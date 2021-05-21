import React from "react";

const CursoSearch = ({ inputValue, setInputValue }) => {
  const handleChange = (e) => {
    setInputValue(e.target.value);

    // console.log(e.target.value);
  };

  return (
    <div className="col-6 offset-3">
      <input
        type="text"
        className="form-control"
        placeholder="Curso a buscar..."
        value={inputValue}
        onChange={handleChange}
        name="nombre"
      />
    </div>
  );
};

export default CursoSearch;
