import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCursos } from "../helpers/rutaCursos";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const NavBar = () => {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    getCursos().then((datos) => {
      setCursos(datos);
    });
  }, []);

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Link to="/">
          <Navbar.Brand>Academy App</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/cursos" className="nav-link">
              Cursos
            </Link>
            <NavDropdown title="Buscar Curso" id="basic-nav-dropdown">
              {cursos.map((curso) => (
                <NavDropdown.Item key={curso.id}>
                  <Link to={`/curso/${curso.id}`} className="dropdown-item">
                    {curso.title}
                  </Link>
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
