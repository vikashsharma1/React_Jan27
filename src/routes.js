import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Candidates from "./component/candidates/Candidates";
import Detail from "./component/detail/Detail";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/candidates" component={Candidates} />
      <Route path="/detail" component={Detail} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
