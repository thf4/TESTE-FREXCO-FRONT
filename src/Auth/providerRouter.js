import React from "react";
import { Route, useHistory } from "react-router-dom";

import jwt from "jsonwebtoken";

const PrivateRouter = ({ component: Routercomponent, ...rest }) => {
  const history = useHistory();

  const token = sessionStorage.getItem("Token");
  if (token) {
    try {
      jwt.decode(token, { headers: true });
    } catch (err) {
      history.push("/login");
    }
  } else {
    history.push("/login");
  }

  return <Route {...rest} component={Routercomponent} />;
};

export default PrivateRouter;
