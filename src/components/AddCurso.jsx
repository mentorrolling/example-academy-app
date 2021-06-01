import React from "react";
import AddCursoForm from "./AddCursoForm";

const AddCurso = ({ show, setShow }) => {
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
