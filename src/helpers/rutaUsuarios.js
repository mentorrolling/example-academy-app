import axios from "axios";
import qs from "qs";

export const postLogin = async (datos) => {
  const url = `http://localhost:3004/login`;

  const options = {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    data: qs.stringify(datos),
  };
  try {
    const resp = await axios(url, options);
    const { data } = resp;
    // console.log(data);
    return {
      data: data,
      loading: false,
    };
  } catch (error) {
    // console.log(error.response.data);
    return {
      data: error.response.data,
      loading: false,
    };
  }
};
