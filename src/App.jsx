import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cursos from "./pages/Cursos";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Curso from "./pages/Curso";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

const App = () => {
  return (
    <>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/cursos" component={Cursos} />
            <Route exact path="/curso/:id" component={Curso} />
            <Route exact path="/admin" component={Admin} />
            <Route component={Error404} />
          </Switch>
        </Layout>
      </Router>
    </>
  );
};

export default App;
