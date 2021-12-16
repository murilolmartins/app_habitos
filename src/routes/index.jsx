import { Switch } from "react-router-dom";
import CreateActivities from "../components/CreateActivities";
import AboutUs from "../pages/AboutUs";
import Dashboaord from "../pages/Dashboard";
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
      <Route path="/dashboard" isPrivate component={Dashboaord} />
    </Switch>
  );
};

export default Routes;
