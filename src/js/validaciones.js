import { getData } from "./fetch.js";

export const validar = {
  vacio: (...inputs) => {
    let result = false;
    inputs.forEach((e) => {
      if (e.trim() === "") {
        result = true;
      }
    });
    return result;
  },
  espacios: (...inputs) => {
    let result = false;
    inputs.forEach((e) => {
      if (!/^\S*$/.test(e)) {
        result = true;
      }
    });
    return result;
  },
  username: (input) => {
    let result = false;
    if (!/^[A-Za-z0-9._]+$/.test(input)) {
      result = true;
    }
    return result;
  },
  usuario: async (user) => {
    let userReg = false;
    const data = await getData();
    data.forEach((e) => {
      if (user === e.user) {
        userReg = true;
      }
    });
    return userReg;
  },
  sesion: async (user, password) => {
    let userReg = null;
    const data = await getData();
    data.forEach((e) => {
      if (e.user === user && e.password === password) {
        userReg = e.id;
      }
    });
    return userReg;
  },
};
