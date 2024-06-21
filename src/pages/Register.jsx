import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { validar } from "../js/validaciones.js";
import { postData } from "../js/fetch.js";
import Button from "../components/Button";
import Input from "../components/Input";

const Register = () => {
  const [mensaje, setMensaje] = useState();
  const navigate = useNavigate();
  const inputUser = useRef();
  const inputPassword = useRef();

  const signUp = async (user, password) => {
    if (validar.vacio(user, password)) {
      setMensaje("Debe llenar todos los campos");
    } else if (validar.espacios(user, password)) {
      setMensaje("No ingrese espacios");
    } else if (validar.username(user)) {
      setMensaje("Nombre de usuario no valido ( A-z, números, '.' o '_' )");
    } else if (await validar.usuario(user)) {
      setMensaje("El nombre de usuario no está disponible");
    } else {
      let dataReg = {
        user: user,
        password: password,
        tasks: [],
      };
      await postData(dataReg);
      setMensaje("Se ha registrado");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
  };

  return (
    <>
      <h1>Register</h1>
      <div>
        <h2>Registrese</h2>
        <Input inputRef={inputUser} txt="Usuario" />
        <Input inputRef={inputPassword} txt="Contraseña" />
        <div>{mensaje}</div>
        <Button
          foo={() =>
            signUp(inputUser.current.value, inputPassword.current.value)
          }
          txt="Registrarse"
        />
      </div>
    </>
  );
};

export default Register;
