import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Redirect, Route, Switch } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.components";
import CatPage from "./pages/catpage/catpage.component";

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/:catId" component={CatPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
