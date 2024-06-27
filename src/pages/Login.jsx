import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { validar } from "../js/validaciones.js";
import { getData } from "../js/fetch.js";
import Button from "../components/Button";
import Input from "../components/Input";

const Login = () => {
  const [mensaje, setMensaje] = useState();
  const navigate = useNavigate();
  const inputUser = useRef();
  const inputPassword = useRef();

  const logIn = async (user, password) => {
    if (validar.vacio(user, password)) {
      setMensaje("Debe llenar todos los campos");
    } else if (validar.espacios(user, password)) {
      setMensaje("No ingrese espacios");
    } else if (validar.username(user)) {
      setMensaje("Nombre de usuario no valido ( letras, números, . y _ )");
    } else {
      const promise = await getData();
      let data = promise.find(
        (e) => e.user === user && e.password === password
      );
      if (!data) {
        setMensaje("Usuario o contraseña no coinciden");
      } else {
        setMensaje("Redireccionando...");
        setTimeout(() => {
          sessionStorage.setItem("sessionId", data.id);
          navigate("/");
        }, 1000);
      }
    }
  };

  return (
    <>
      <h1>Login</h1>
      <div>
        <h2>Inicie Sesión</h2>
        <Input inputRef={inputUser} txt="Usuario" />
        <Input inputRef={inputPassword} txt="Contraseña" />
        <div>{mensaje}</div>
        <Button
          foo={() =>
            logIn(inputUser.current.value, inputPassword.current.value)
          }
          txt="Iniciar Sesión"
        />
      </div>
    </>
  );
};

export default Login;
