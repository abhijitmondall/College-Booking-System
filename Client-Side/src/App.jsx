import { Routes, Route } from "react-router";
import Main from "./layouts/Main";
import Home from "./pages/Home/Home";
import MyCollege from "./pages/My College/MyCollege";
import Colleges from "./pages/Colleges/Colleges";
import Admission from "./pages/Admission/Admission";
import Login from "./pages/Login/Login";
import CollegeDetails from "./pages/CollegeDetails/CollegeDetails";
import Register from "./pages/Register/Register";
import PrivateRoutes from "./routes/PrivateRoutes";
import Error from "./pages/Error/Error";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="/Colleges" element={<Colleges />} />
        <Route
          path="/Colleges/:id"
          element={
            <PrivateRoutes>
              <CollegeDetails />
            </PrivateRoutes>
          }
        />
        <Route path="/Admission" element={<Admission />} />
        <Route
          path="/MyCollege"
          element={
            <PrivateRoutes>
              <MyCollege />
            </PrivateRoutes>
          }
        />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
