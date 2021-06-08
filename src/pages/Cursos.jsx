import React, { useEffect, useState } from "react";
import { getCursos } from "../helpers/rutaCursos";
import CursosItem from "../components/CursosItem";
import CursoSearch from "../components/CursoSearch";

import "../css/cursos.css";
const Cursos = () => {
  const [contarPagina, setContarPagina] = useState(0); //Para manejar desde que registro se mostrará la data
  const [cursos, setCursos] = useState({
    data: {},
    loading: true,
  });

  const [inputValue, setInputValue] = useState("");
  let cursosFilter = [];

  useEffect(() => {
    getCursos(contarPagina).then((datos) => {
      setCursos({
        data: datos,
        loading: false,
      });
    });
  }, [contarPagina]);

  //-------Botones previo y next---------------
  const handlePaginaNext = () => {
    let cantidadArray = cursos.data.cursos.length;
    if (cantidadArray >= 4) {
      setContarPagina(contarPagina + 4);
    }
  };

  const handlePaginaPrev = () => {
    if (contarPagina >= 4) {
      setContarPagina(contarPagina - 4);
    }
  };

  //Arreglo nuevo con el filtro

  if (!cursos.loading) {
    cursosFilter = cursos.data.cursos.filter((curso) => {
      return curso.title.toLowerCase().includes(inputValue.toLowerCase());
    });
  }

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
        </div>

        {!cursos.loading && (
          <>
            <div className="row mb-3">
              <div className="col col-md-6 offset-md-3 text-center">
                <button
                  className="btn btn-outline-info mr-2"
                  onClick={handlePaginaPrev}
                  disabled={contarPagina === 0 ? true : false}
                >
                  <i className="fa fa-chevron-left" aria-hidden="true"></i>
                </button>
                <button
                  className="btn btn-outline-info"
                  onClick={handlePaginaNext}
                  disabled={cursos.data.cursos.length < 4 ? true : false}
                >
                  <i className="fa fa-chevron-right" aria-hidden="true"></i>
                </button>
              </div>
            </div>
            <div className="row">
              {cursosFilter.map((curso) => {
                return <CursosItem key={curso._id} curso={curso} />;
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cursos;
