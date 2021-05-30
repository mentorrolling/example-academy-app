import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { postLogin } from "../helpers/rutaUsuarios";

const LoginForm = () => {
  const history = useHistory();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [user, setUser] = useState({
    data: { ok: null },
    loading: false,
  });

  useEffect(() => {
    if (user.data.ok) {
      localStorage.setItem("token", JSON.stringify(user.data.token));
      localStorage.setItem("id", JSON.stringify(user.data.usuario._id));
      localStorage.setItem("usuario", JSON.stringify(user.data.usuario.nombre));

      history.push("./");
    }
  }, [user, history]);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setUser({
      ...user,
      loading: true,
    });

    postLogin(formValues).then((datos) => {
      // console.log(datos.data);
      setUser(datos);
    });
    setFormValues({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="text-muted">Correo electrónico</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="text-muted">Contraseña</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={formValues.password}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="btn btn-info btn-block"
          disabled={user.loading}
        >
          Enviar
          {/* {user.loading ? <SpinnerLoading /> : "Entrar"} */}
        </button>
      </form>
      {user.data.ok === false && (
        <div className="alert alert-danger mt-3 text-center" role="alert">
          {user.data.err.message}
        </div>
      )}
      {/* {user.data.ok === true && (
          <div className="alert alert-success mt-3 text-center" role="alert">
            Usuario Correcto!
          </div>
        )} */}
    </>
  );
};

export default LoginForm;
