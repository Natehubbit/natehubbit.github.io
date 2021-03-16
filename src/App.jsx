import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from "react-router-dom";
import Home from "./containers/Home";
import Projects from './containers/Projects'
import CantShow from './containers/CantShow'
import Project from './containers/Project'

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/cantShow">
            <CantShow />
          </Route>
          <Route exact path="/project/:id">
            <Project />
          </Route>
          {/* <Redirect  /> */}
        </Switch>
    </Router>
  );
}

export default App;
