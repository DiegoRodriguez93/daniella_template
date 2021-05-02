import React from "react";
import { Switch, Route } from "react-router-dom";

// PAGES
import Admin from "../../containers/Admin";
import NotFound from "../../containers/NotFound";
import Home from "./../../containers/Home";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/admin" component={Admin} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Router;
