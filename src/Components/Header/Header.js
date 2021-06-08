import React, { useContext } from "react";
import { AppBar, Toolbar, Typography, Button, Icon } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import { Link, useHistory } from "react-router-dom";
import { styleaBar, btnColor, useStyles, color } from "./style";
import { AuthContext } from "../../Auth/Auth-Provider";

const Header = (props) => {
  const classes = useStyles();
  const { authenticated } = useContext(AuthContext);
  const history = useHistory();

  const logout = () => {
    sessionStorage.clear("Token");
    history.push("/login");
    window.location.reload();
  };

  const IsLogged = (props) => {
    return (
      <>
        <Button
          href={`/user/${authenticated && authenticated._id}/dados`}
          style={btnColor}
        >
          Dados
        </Button>
        <Button
          href={`/user/${authenticated && authenticated._id}/product`}
          style={btnColor}
        >
          Cadastrar Produtos
        </Button>
        <Button onClick={logout} style={btnColor}>
          Sair
        </Button>
      </>
    );
  };

  const NotLogged = (props) => {
    return (
      <Button style={btnColor} href="/login">
        Entrar
      </Button>
    );
  };

  const IsAuthenticated = () => {
    if (authenticated) {
      return <IsLogged />;
    } else {
      return <NotLogged />;
    }
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar style={styleaBar}>
          <Typography variant="h5" className={classes.title}>
            <Link to="/home">
              <img
                alt="logo-Frexco"
                width="150"
                src="https://frexco-images-prd.s3.amazonaws.com/uploads/2020/10/26/339c1848-47e9-4c4a-ba67-1f952737345b.png"
              />
            </Link>
          </Typography>
          <IsAuthenticated />
          <Button style={btnColor}>
            <Icon>
              <ShoppingCartIcon />
            </Icon>
            <span style={color}>({props.text})</span>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
