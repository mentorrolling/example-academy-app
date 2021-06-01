import React from "react";

import { Modal } from "react-bootstrap";
import ModalFormCurso from "./ModalFormCurso";

const ModalCurso = ({ show, handleClose, curso }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modificar curso</Modal.Title>
      </Modal.Header>
      <ModalFormCurso curso={curso} handleClose={handleClose} />
    </Modal>
  );
};

export default ModalCurso;
