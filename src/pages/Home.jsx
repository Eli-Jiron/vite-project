import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getData } from "../js/fetch";
const Home = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getData(sessionStorage.getItem("sessionId")).then((data) => setUser(data));
  }, []);

  return (
    <>
      <h1>Home</h1>
      <h2>Bienvenido, {user.user}</h2>
      <p
        onClick={() => {
          sessionStorage.removeItem("sessionId");
          navigate("/login");
        }}
      >
        Log Out
      </p>
    </>
  );
};

export default Home;
