import React, { useEffect, useState } from "react";
import { getCursos } from "../helpers/rutaCursos";
import CursosItem from "../components/CursosItem";

import "../css/cursos.css";

const Cursos = () => {
  const [cursos, setCursos] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getCursos().then((cursos) => {
      setCursos({
        data: cursos,
        loading: false,
      });
    });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col text-center my-5 ">
          <h3>Conoce nuestros cursos</h3>
        </div>
      </div>
      <div className="row">
        {cursos.data.map((curso) => {
          return <CursosItem key={curso.id} curso={curso} />;
        })}
      </div>
    </div>
  );
};

export default Cursos;
