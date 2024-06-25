import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { validar } from "../js/validaciones.js";
import { getData, postData } from "../js/fetch.js";
import uuid from "react-uuid";
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
      setMensaje("Nombre de usuario no valido ( letras, números, . y _ )");
    } else {
      const promise = await getData();
      let data = promise.find((e) => e.user === user);
      if (data) {
        setMensaje("Nombre de usuario no disponible");
      } else {
        await postData({
          user: user,
          password: password,
          tasks: [],
          id: uuid(),
        });
        setMensaje("Se ha registrado");
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      }
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
