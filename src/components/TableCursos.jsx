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

  useEffect(() => {
    consultaCursos();
  }, []);

  const consultaCursos = (desde) => {
    getCursos(desde).then((datos) => {
      setCursos({
        data: datos,
        loading: false,
      });
    });
  };

  const handleClose = () => {
    setShow(false);
    consultaCursos();
  };
  const handleShow = () => setShow(true);

  const modificaCurso = (id) => {
    id_curso = id;

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
          <div className="col-12 mt-4"></div>
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
          />
        </>
      )}
    </div>
  );
};

export default TableCursos;
