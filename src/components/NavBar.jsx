import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode"; //Paquete para decodificar el Token
import { Link, useLocation, useHistory } from "react-router-dom";
import { getCursos } from "../helpers/rutaCursos";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const NavBar = () => {
  //Defino location e history
  const location = useLocation();
  const history = useHistory();

  //estado para manejar el usuario
  const [user, setUser] = useState("Iniciar sesión");

  const [payload, setPayload] = useState({
    role: "",
  });

  //estado para manejar los datos de los cursos
  const [cursos, setCursos] = useState({
    data: {},
    loading: true,
  });

  //Si cambia la locación asigno a user el valor de localstorage
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("usuario")) || "Iniciar Sesión");

    checkToken();
  }, [location]);

  //Cuando monto navbar se cargan los cursos
  useEffect(() => {
    getCursos().then((datos) => {
      setCursos({
        data: datos,
        loading: false,
      });
    });
  }, []);

  //Manejo el deslogueo de la web
  const handleLogin = () => {
    localStorage.setItem("token", JSON.stringify(""));
    localStorage.setItem("id", JSON.stringify(""));
    localStorage.setItem("usuario", JSON.stringify("Iniciar Sesión"));
    setUser(JSON.parse(localStorage.getItem("usuario")));
    setPayload({ role: "" });
    history.push("/login");
  };

  const checkToken = () => {
    let token = JSON.parse(localStorage.getItem("token")) || "";
    if (token.length > 0) {
      let token_decode = jwt_decode(localStorage.getItem("token")); //Obteniendo los datos del payload
      setPayload(token_decode.usuario);
    }
    // console.log(token.length);
  };

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
            {!cursos.loading && (
              <NavDropdown title="Buscar Curso" id="basic-nav-dropdown">
                {cursos.data.cursos.map((curso) => (
                  <NavDropdown.Item key={curso._id}>
                    <Link to={`/curso/${curso._id}`} className="dropdown-item">
                      {curso.title}
                    </Link>
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            )}
          </Nav>
          {payload.role === "ADMIN_ROLE" && (
            <Link to="/admin" className="text-decoration-none text-muted mr-2">
              Administrador
            </Link>
          )}
          <button className="btn btn-outline-info" onClick={handleLogin}>
            {user}
          </button>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
