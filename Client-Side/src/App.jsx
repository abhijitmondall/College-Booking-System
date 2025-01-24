import { Routes, Route } from "react-router";
import Main from "./layouts/Main";
import Home from "./pages/Home/Home";
import MyCollege from "./pages/My College/MyCollege";
import Colleges from "./pages/Colleges/Colleges";
import Admission from "./pages/Admission/Admission";
import Login from "./pages/Login/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="/Colleges" element={<Colleges />} />
        <Route path="/Admission" element={<Admission />} />
        <Route path="/MyCollege" element={<MyCollege />} />
        <Route path="/Login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
