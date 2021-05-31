import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode"; //Paquete para decodificar el Token
import AddCurso from "../components/AddCurso";

const Admin = () => {
  const [state, setState] = useState({});
  const token = JSON.parse(localStorage.getItem("token"));
  useEffect(() => {
    if (token) {
      let token_decode = jwt_decode(token); //Obteniendo los datos del payload del token
      // console.log(token_decode.usuario);
      setState(token_decode.usuario);
    }
  }, [token]);
  return (
    <>
      {token.length > 0 ? (
        <div className="container mt-5">
          <div className="row">
            <div className="col">
              <h1>Administrador</h1>
              <hr />
            </div>
          </div>

          <div className="row">
            {state.role === "ADMIN_ROLE" ? (
              <>
                <div className="col">
                  <h3>Bienvenido al ABM</h3>
                </div>
                <AddCurso />
              </>
            ) : (
              <div className="col">
                <div className="alert alert-info" role="alert">
                  Lo sentimos, pero no tiene permisos para acceder a este
                  contenido
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="container mt-5">
          <div className="row">
            <div className="col">
              <div className="alert alert-danger" role="alert">
                No se encuentra logueado en la plataforma
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Admin;
