import React, { useContext, useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import { AuthContext } from "./Auth-Provider";
import jwt from "jsonwebtoken";

const PrivateRouter = ({ component: Routercomponent, ...rest }) => {
  const { setAuthenticated } = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      try {
        const userData = jwt.decode(token, { headers: true });
        setAuthenticated(userData);
      } catch (err) {
        sessionStorage.removeItem("token");
        setAuthenticated(null);
        history.push("/login");
      }
    }
  }, [setAuthenticated, history]);
  return <Route {...rest} component={Routercomponent} />;
};

export default PrivateRouter;
