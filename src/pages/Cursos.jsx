import React, { useEffect, useState } from "react";
import { getCursos } from "../helpers/rutaCursos";
import CursosItem from "../components/CursosItem";
import CursoSearch from "../components/CursoSearch";

import "../css/cursos.css";

const Cursos = () => {
  const [cursos, setCursos] = useState({
    data: [],
    loading: true,
  });

  const [inputValue, setInputValue] = useState("");

  //estado para manejar el formulario

  useEffect(() => {
    getCursos().then((cursos) => {
      setCursos({
        data: cursos,
        loading: false,
      });
    });
  }, []);

  //Arreglo nuevo con el filtro
  const cursosFilter = cursos.data.filter((curso) => {
    return curso.title.toLowerCase().includes(inputValue.toLowerCase());
  });

  return (
    <div className="background-curso">
      <div className="container">
        <div className="row">
          <div className="col text-center my-5 ">
            <h3>Conoce nuestros cursos</h3>
          </div>
        </div>
        <div className="row mb-5">
          <CursoSearch inputValue={inputValue} setInputValue={setInputValue} />
          {/* CursoSearch */}
        </div>

        <div className="row">
          {cursosFilter.map((curso) => {
            return <CursosItem key={curso.id} curso={curso} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Cursos;
