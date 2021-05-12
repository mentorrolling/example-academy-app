import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cursos from "./pages/Cursos";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Curso from "./pages/Curso";

const App = () => {
  return (
    <>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cursos" component={Cursos} />
            <Route exact path="/curso/:id" component={Curso} />
            <Route component={Error404} />
          </Switch>
        </Layout>
      </Router>
    </>
  );
};

export default App;
