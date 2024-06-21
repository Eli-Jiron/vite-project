import { useRef, useState } from "react";
import { validar } from "../js/validaciones.js";
import Button from "../components/Button";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";

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
      setMensaje("Nombre de usuario no valido ( A-z, números, '.' o '_' )");
    } else if (!(await validar.sesion(user, password))) {
      setMensaje("Usuario o contraseña no coinciden");
    } else {
      sessionStorage.setItem("sessionId", await validar.sesion(user, password));
      setMensaje("Redireccionando...");
      setTimeout(() => {
        navigate("/");
      }, 1000);
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
