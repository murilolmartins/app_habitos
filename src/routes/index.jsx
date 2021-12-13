import { Switch, Route } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import Activities from "../pages/Activities";
import Goals from "../pages/Goals";
import Groups from "../pages/Groups";
import Habits from "../pages/Habits";
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
      <Route path="/habits" component={Habits} />
      <Route path="/groups" component={Groups} />
      <Route path="/goals" component={Goals} />
      <Route path="/activities" component={Activities} />
    </Switch>
  );
};

export default Routes;
