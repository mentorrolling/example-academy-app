import React, { useEffect, useState } from "react";
import { getCursoId } from "../helpers/rutaCursos";
import { useParams } from "react-router-dom";

import "../css/curso.css";
import CursoDetail from "../components/CursoDetail";

const Curso = () => {
  const [data, setData] = useState({
    ok: false,
    curso: {},
  });

  let { id } = useParams();

  useEffect(() => {
    getCursoId(id).then((datos) => {
      setData(datos);
    });
  }, [id]);

  return (
    <div className="container mt-5">
      {data.ok ? (
        <CursoDetail data={data} />
      ) : (
        <div className="row">
          <div className="col">
            <div className="alert alert-danger text-center" role="alert">
              El curso no existe
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Curso;
