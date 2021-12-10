import { useContext } from "react";
import { Redirect, Route as ReactDOMRoute } from "react-router-dom";
import { AuthContext } from "../providers/Auth";

const Route = ({ isPrivate = false, component: Component }) => {
  const { token } = useContext(AuthContext);
  return (
    <ReactDOMRoute
      render={() =>
        isPrivate === !!token ? (
          <Component></Component>
        ) : (
          <Redirect to={isPrivate ? "/login" : "/dashboard"} />
        )
      }
    />
  );
};

export default Route;
