const apiUrl = "http://localhost:3000/users/";

//Metodo POST
export const postData = async (userData) => {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

//Metodo GET
export const getData = async (id = "") => {
  try {
    const response = await fetch(apiUrl + id);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

//Metodo PUT
export const putData = async (id, newData) => {
  try {
    const response = await fetch(apiUrl + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

//Metodo DELETE
export const deleteData = async (id) => {
  try {
    const response = await fetch(apiUrl + id, {
      method: "DELETE",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
