import { Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Register />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="*" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
};

export default Routing;
