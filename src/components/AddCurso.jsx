import React, { useState } from "react";
import ModalCurso from "./ModalCurso";
import { addCurso } from "../helpers/rutaCursos";

const AddCurso = () => {
  // const id = JSON.parse(localStorage.getItem("id"));

  // const [curso, setCurso] = useState({});

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="col-12">
      <button className="btn btn-outline-info" onClick={handleShow}>
        Agregar curso
      </button>

      <ModalCurso show={show} handleClose={handleClose} addCurso={addCurso} />
    </div>
  );
};

export default AddCurso;
