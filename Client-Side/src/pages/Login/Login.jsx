import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { login, user, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const location = useLocation();

  const path = location?.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await login(email, password);
      navigate(path, { replace: true });

      setEmail("");
      setPassword("");
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  const googleLogin = async () => {
    try {
      const res = await loginWithGoogle();
      console.log(res.user.displayName);
      // send request
      await fetch(`https://college-booking-system.vercel.app/api/v1/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: res.user.displayName,
          email: res.user.email,
          photo: res.user.photoURL,
        }),
      });

      if (!res.ok) throw new Error(res.message);
      navigate(path, { replace: true });
    } catch (err) {
      setError(err.message);
    }
  };

  if (user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient">
        <h1 className="text-5xl"> You are already logged in!</h1>
      </div>
    );
  }

  return (
    <section>
      <div className="min-h-screen flex items-center justify-center bg-gradient">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Login
          </h2>
          <form onSubmit={handleSubmit}>
            <p className="text-[16px] text-red-600"> {error}</p>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Enter your email"
                className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Enter your password"
                className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white font-semibold py-2 rounded-lg hover:bg-purple-700 transition duration-300 cursor-pointer"
            >
              Login
            </button>
            <div className="mt-4 text-center">
              <p>
                Don't have an account?
                <Link to="/Register" className="text-purple-500 font-medium">
                  Register
                </Link>
              </p>

              <p className="text-center p-y"> OR </p>

              <div className="my-[16px] ">
                <button
                  onClick={googleLogin}
                  className="flex gap-2 items-center justify-center text-textH5 text-colorPrimary border-[1px] py-[.8rem] px-[2.4rem] w-[100%] mx-auto rounded-[3px] cursor-pointer"
                >
                  <span className="icon-1x">
                    <FcGoogle />
                  </span>
                  Login With Google
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
