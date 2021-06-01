import axios from "axios";
import qs from "qs";

// const token = localStorage.getItem("token") || "";

// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7InJvbGUiOiJBRE1JTl9ST0xFIiwiZXN0YWRvIjp0cnVlLCJfaWQiOiI2MGFiYjhmM2ZkYzgwZTAwNTQ1MjZkNzgiLCJub21icmUiOiJwbWFyaW5vIiwiZW1haWwiOiJwbWFyaW5vQGdtYWlsLmNvbSIsIl9fdiI6MH0sImlhdCI6MTYyMjI0MjM3MywiZXhwIjoxNjIyNDE1MTczfQ.PQfdx4nso67jzmeOA3lNPACx69Q7CgPAiKSXxyt937M";

export const getCursos = async (desde = 0) => {
  let url = `http://localhost:3004/cursos?desde=${desde}`;

  const options = {
    method: "GET",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      // token: token,
    },
  };
  try {
    const resp = await axios(url, options);
    const { data } = resp;
    // console.log(data);
    return data;
  } catch (error) {
    // console.log(error.response.data);
    return {
      data: error.response.data,
      loading: false,
    };
  }
};

export const getCursoId = async (id) => {
  let url = `http://localhost:3004/cursos/${id}`;
  const options = {
    method: "GET",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      //token: token,
    },
  };
  try {
    const resp = await axios(url, options);
    const { data } = resp;
    console.log(data);
    return data;
  } catch (error) {
    // console.log(error.response.data);
    return {
      data: error.response.data,
      loading: false,
    };
  }
};

export const addCurso = async (datos) => {
  console.log(datos);
  const token = JSON.parse(localStorage.getItem("token")) || "";
  let url = "http://localhost:3004/cursos";

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      token: token,
    },
    data: qs.stringify(datos),
  };
  try {
    const resp = await axios(url, options);
    const { data } = resp;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.response.data);
    return {
      data: error.response.data,
      loading: false,
    };
  }
};

export const modifCurso = async (datos, id) => {
  console.log(datos);
  const token = JSON.parse(localStorage.getItem("token")) || "";
  let url = `http://localhost:3004/cursos/${id}`;

  const options = {
    method: "PUT",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      token: token,
    },
    data: qs.stringify(datos),
  };
  try {
    const resp = await axios(url, options);
    const { data } = resp;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.response.data);
    return {
      data: error.response.data,
      loading: false,
    };
  }
};

export const delCurso = async (id) => {
  const token = JSON.parse(localStorage.getItem("token")) || "";
  let url = `http://localhost:3004/cursos/${id}`;

  const options = {
    method: "DELETE",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      token: token,
    },
    // data: qs.stringify(datos),
  };
  try {
    const resp = await axios(url, options);
    const { data } = resp;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.response.data);
    return {
      data: error.response.data,
      loading: false,
    };
  }
};
