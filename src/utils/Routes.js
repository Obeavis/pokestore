import React from "react";
import {
  HashRouter as Router,
  Route,
} from "react-router-dom";
import Main from "pages/Main";
import Water from "pages/Water";
import Fire from "pages/Fire";
import Electric from "pages/Electric";
import Grass from "pages/Grass";

const Routes = () => (
  <Router basename="">
    <Route exact path="/" component={Main} />
    <Route exact path="/water" component={Water} />
    <Route path="/water/:pokeName" component={Water} />
    <Route exact path="/fire" component={Fire} />
    <Route path="/fire/:pokeName" component={Fire} />
    <Route exact path="/electric" component={Electric} />
    <Route path="/electric/:pokeName" component={Electric} />
    <Route exact path="/grass" component={Grass} />
    <Route path="/grass/:pokeName" component={Grass} />
  </Router>
);

export default Routes;