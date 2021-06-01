import React, { useState } from "react";
import AddCursoForm from "./AddCursoForm";
// import ModalCurso from "./ModalCurso";
// import { addCurso } from "../helpers/rutaCursos";

const AddCurso = ({ show, setShow }) => {
  // const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="col-12">
        <button className="btn btn-outline-info" onClick={handleShow}>
          {show ? "Ocultar Form" : "Agregar curso"}
        </button>
      </div>
      {show && (
        <div className="col-md-8 offset-md-2 mb-3">
          <AddCursoForm setShow={setShow} />
        </div>
      )}
    </>
  );
};

export default AddCurso;
