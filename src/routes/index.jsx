import { Switch } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import Activities from "../pages/Activities";
import Goals from "../pages/Goals";
import Groups from "../pages/Groups";
import Habits from "../pages/Habits";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SingUp from "../pages/SingUp";
import Route from "./route";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/singup" component={SingUp} />
      <Route path="/aboutUs" component={AboutUs} />
      <Route path="/habits" isPrivate component={Habits} />
      <Route path="/groups" isPrivate component={Groups} />
      <Route path="/goals" isPrivate component={Goals} />
      <Route path="/activities" isPrivate component={Activities} />      
    </Switch>
  );
};

export default Routes;
