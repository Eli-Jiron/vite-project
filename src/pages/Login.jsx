import { useRef } from "react";
import Button from "../components/Button";
import Input from "../components/Input";

const Login = () => {
  const inputUser = useRef();
  const inputPassword = useRef();

  return (
    <>
      <h1>Login</h1>
      <div>
        <h2>Inicie Sesión</h2>
        <Input inputRef={inputUser} txt="Usuario" />
        <Input inputRef={inputPassword} txt="Contraseña" />
        <Button foo={() => {}} txt="Iniciar Sesión" />
      </div>
    </>
  );
};

export default Login;
