import React from "react";
import { Link } from "react-router-dom";

const CursosItem = ({ curso }) => {
  return (
    <>
      <Link to={`/curso/${curso.id}`} className="text-decoration-none">
        <div className="col-3">
          <div className="card">
            <img
              src={curso.imagen}
              className="card-img-top"
              alt={curso.title}
            />
            <div className="card-body">
              <h5 className="card-title">{curso.title}</h5>
              <img
                className="avatar"
                src={curso.img_mentor}
                alt={curso.mentor}
              />
              <span>{curso.mentor}</span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CursosItem;
