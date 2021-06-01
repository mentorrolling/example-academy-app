import React, { useState } from "react";
import { modifCurso } from "../helpers/rutaCursos";
import { Modal, Button } from "react-bootstrap";

const ModalFormCurso = ({ curso, handleClose }) => {
  const id = JSON.parse(localStorage.getItem("id"));
  const [formValues, setFormValues] = useState({
    title: curso.title,
    imagen: curso.imagen,
    detalle: curso.detalle,
    video: curso.video,
    mentor: curso.mentor,
    img_mentor: curso.img_mentor,
    usuario: id,
  });

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    modifCurso(formValues, curso._id).then((respuesta) => {
      console.log(respuesta);

      handleClose();
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Modal.Body>
        <div className="form-group">
          <label>Título</label>
          <input
            type="text"
            className="form-control"
            name="title"
            required
            value={formValues.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Imagen</label>
          <input
            type="text"
            className="form-control"
            name="imagen"
            value={formValues.imagen}
            onChange={handleChange}
          />
          <small>Url de imagen</small>
        </div>
        <div className="form-group">
          <label>Detalle</label>
          <textarea
            className="form-control"
            rows="3"
            required
            name="detalle"
            value={formValues.detalle}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label>Video</label>
          <input
            type="text"
            className="form-control"
            name="video"
            value={formValues.video}
            onChange={handleChange}
          />
          <small>Url del video de youtube</small>
        </div>
        <div className="form-group">
          <label>Mentor</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nombre del mentor"
            name="mentor"
            required
            value={formValues.mentor}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Avatar Mentor</label>
          <input
            type="text"
            className="form-control"
            name="img_mentor"
            value={formValues.img_mentor}
            onChange={handleChange}
          />
          <small>Url de imagen</small>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button type="submit" variant="outline-info">
          Guardar
        </Button>
      </Modal.Footer>
    </form>
  );
};

export default ModalFormCurso;
