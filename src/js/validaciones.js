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
  email: (...inputs) => {
    let result = false;
    inputs.forEach((e) => {
      if (!/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(e)) {
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
};
