import React, { useState } from "react";
import { addCurso } from "../helpers/rutaCursos";

const AddCursoForm = ({ setShow }) => {
  const id = JSON.parse(localStorage.getItem("id"));
  const [formValues, setFormValues] = useState({
    title: "",
    imagen: "",
    detalle: "",
    video: "",
    mentor: "",
    img_mentor: "",
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
    addCurso(formValues).then((resp) => {
      console.log(resp);

      setFormValues({
        title: "",
        imagen: "",
        detalle: "",
        video: "",
        mentor: "",
        img_mentor: "",
      });

      setShow(false);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <div>
        <button type="submit" className="btn btn-outline-info">
          Guardar
        </button>
      </div>
    </form>
  );
};

export default AddCursoForm;
