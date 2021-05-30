import React from "react";
import { Link } from "react-router-dom";
const CursoDetail = ({ data }) => {
  const { curso } = data;
  return (
    <>
      <div className="row">
        <div className="col">
          <h3>{curso.title}</h3>
          <div className="mb-2">
            <img className="avatar" src={curso.img_mentor} alt={curso.mentor} />
            <span className="ml-2">{curso.mentor}</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <iframe
            width="560"
            height="315"
            src={curso.video}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
          <p>{curso.detalle}</p>
        </div>
        <div className="col-6">
          <div className="card ml-3 w-100">
            <div className="card-header">
              <h3>
                $885 <span>Arg/mes</span>{" "}
              </h3>
            </div>
            <div className="card-body">
              <h4 className="card-title">Membresía Premium</h4>
              <hr />
              <ul>
                <li>Acceso a +150 cursos</li>
                <li>Cancela en cualquier momento</li>

                <li>Clases en vivo semanales</li>
              </ul>

              <Link to="/comprar" className="btn btn-info btn-block">
                Comprar Membresía
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CursoDetail;
