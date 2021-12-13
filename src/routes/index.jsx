import { Switch, Route } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SingUp from "../pages/SingUp";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/singup" component={SingUp} />
      <Route path="/aboutUs" component={AboutUs} />
    </Switch>
  );
};

export default Routes;
