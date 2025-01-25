import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";

function Register() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const navigate = useNavigate();
  const location = useLocation();
  const path = location?.state?.from?.pathname || "/";
  const { createUser, updateUserProfile, loginWithGoogle } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) return;
    try {
      setLoading(true);

      const res = await fetch(
        `https://college-booking-system.vercel.app/api/v1/users`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            gender: formData.gender,
          }),
        }
      );
      if (!res.ok) {
        console.log(res);
        throw new Error(res);
      }

      await createUser(formData.email, formData.password);
      await updateUserProfile(formData.name);
      navigate(path, { replace: true });
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: "",
      });
      setLoading(true);
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };

  const googleSignup = async () => {
    try {
      const res = await loginWithGoogle();

      if (!res.ok) throw new Error(res.message);

      // send request
      await fetch(`https://college-booking-system.vercel.app/api/v1/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: res?.user?.displayName,
          email: res?.user?.email,
          photo: res?.user?.photoURL,
        }),
      });

      navigate(path, { replace: true });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Register
        </h2>
        <form onSubmit={handleSubmit}>
          <p className="text-[16px] text-red-600"> {error}</p>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
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
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              minLength="8"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 font-medium"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <p className="text-red-600">
              {formData.password !== formData.confirmPassword &&
                formData.confirmPassword &&
                "Password does not match!"}
            </p>
          </div>
          <div className="mb-4">
            <label htmlFor="gender" className="block text-gray-700 font-medium">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select your gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-purple-600 text-white font-semibold py-2 rounded-lg hover:bg-purple-700 transition duration-300 cursor-pointer ${
              loading && "disabled"
            }`}
          >
            Register
          </button>
          <div className="mt-4 text-center">
            <p>
              Already have an account?
              <Link to="/Login" className="text-blue-500 font-medium">
                Login
              </Link>
            </p>
          </div>
        </form>
        <p className="text-center p-y"> OR </p>

        <div className="my-[16px] ">
          <button
            onClick={googleSignup}
            className="flex gap-2 items-center justify-center text-textH5 text-colorPrimary border-[1px] py-[.8rem] px-[2.4rem] w-[100%] mx-auto rounded-[3px] cursor-pointer"
          >
            <span className="icon-1x">
              <FcGoogle />
            </span>
            Login With Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
