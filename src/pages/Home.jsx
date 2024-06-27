import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getData, putData } from "../js/fetch";
import { validar } from "../js/validaciones";
import Button from "../components/Button";
import Input from "../components/Input";
import uuid from "react-uuid";
const Home = () => {
  const [userData, setUserData] = useState({});
  const [userTasks, setUserTasks] = useState([]);
  const [mensaje, setMensaje] = useState();
  const inputTask = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    getData(sessionStorage.getItem("sessionId")).then((data) => {
      return setUserData(data), setUserTasks(data.tasks);
    });
  }, []);

  const postTask = async (inputTask) => {
    if (validar.vacio(inputTask)) {
      setMensaje("Debe ingregar una tarea");
    } else {
      let newTasks = [...userTasks];
      let task = {
        task: inputTask,
        status: false,
        id: uuid(),
      };
      newTasks.push(task);
      await putData(userData.id, {
        user: userData.user,
        password: userData.password,
        tasks: newTasks,
      });
      setUserTasks(newTasks);
      setMensaje("");
    }
  };

  const deleteTask = () => {
    console.log("eliminado lol");
  };

  return (
    <>
      <h1>Home</h1>
      <h2>Bienvenido, {userData.user}</h2>
      <p
        onClick={() => {
          sessionStorage.removeItem("sessionId");
          navigate("/login");
        }}
      >
        Log Out
      </p>

      <div>
        <Input inputRef={inputTask} txt="Tareas" />
        <Button foo={() => postTask(inputTask.current.value)} txt="Agregar" />
        <div>{mensaje}</div>
      </div>

      <ul>
        {userTasks.map((e) => (
          <li id={e.id} key={e.id}>
            <input type="checkbox" />
            <p>{e.task}</p>
            <div>
              <Button foo={() => deleteTask()} txt="Editar" />
              <Button txt="Eliminar" />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
