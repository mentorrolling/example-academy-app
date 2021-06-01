import React, { useState, useEffect } from "react";
import { getCursos, delCurso, getCursoId } from "../helpers/rutaCursos";
import ModalCurso from "./ModalCurso";
import { Table } from "react-bootstrap";

const TableCursos = () => {
  let id_curso = "";
  const [cursos, setCursos] = useState({
    data: {},
    loading: true,
  });

  const [curso, setCurso] = useState({});
  const [show, setShow] = useState(false);

  const [pagina, setPagina] = useState(0);

  useEffect(() => {
    consultaCursos();
    // console.log(cursos);
  }, []);

  const consultaCursos = (desde) => {
    getCursos(desde).then((datos) => {
      setCursos({
        data: datos,
        loading: false,
      });

      // console.log(datos);
    });
  };

  const cambiarPagina = () => {
    let cantPag = Math.round(cursos.data.cantidad / 5);

    if (cantPag >= 1) {
      setPagina(cantPag + 5);
    } else {
    }
  };

  const handleClose = () => {
    setShow(false);
    consultaCursos();
  };
  const handleShow = () => setShow(true);

  const modificaCurso = (id) => {
    // console.log(id);
    id_curso = id;
    // console.log(id_curso);
    getCursoId(id_curso).then((resp) => {
      console.log(resp);
      setCurso(resp);

      handleShow();
    });
  };

  const deleteCurso = (id) => {
    let validar = window.confirm("está seguro que desea borrar el curso?");
    if (validar) {
      delCurso(id).then((resp) => {
        consultaCursos();
      });
    }
  };

  return (
    <div>
      {!cursos.loading && (
        <>
          <div className="col-12 mt-4">
            {/* <button className="btn btn-outline-info" onClick={cambiarPagina}>
              Anterior
            </button> */}
            {/* <button className="btn btn-outline-info" onClick={cambiarPagina}>
              Siguiente
            </button> */}
          </div>
          <Table striped bordered hover className="mt-2">
            <thead>
              <tr>
                <th>Título</th>
                <th>Detalle</th>
                <th>Mentor</th>
                <th>Usuario</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cursos.data.cursos.map((curso) => (
                <tr key={curso._id}>
                  <td>{curso.title}</td>
                  <td>{curso.detalle}</td>
                  <td>{curso.mentor}</td>
                  <td>{curso.usuario.nombre}</td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        modificaCurso(curso._id);
                      }}
                    >
                      <i
                        className="fa fa-pencil-square-o"
                        aria-hidden="true"
                      ></i>
                    </button>
                    <button
                      className="btn btn-danger mt-2"
                      onClick={() => {
                        deleteCurso(curso._id);
                      }}
                    >
                      <i className="fa fa-trash-o" aria-hidden="true"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <ModalCurso
            show={show}
            handleClose={handleClose}
            curso={curso.curso}
            // alta={alta}
            // id_curso={id_curso}
          />
        </>
      )}
    </div>
  );
};

export default TableCursos;
