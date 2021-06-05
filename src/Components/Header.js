import React, { useContext } from "react";
import { AppBar, Toolbar, Typography, Button, Icon } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import { Link } from "react-router-dom";
import { styleaBar, btnColor, useStyles } from "./style";
import { AuthContext } from "../Auth/Auth-Provider";
const Header = () => {

  const classes = useStyles();
  const { authenticated } = useContext(AuthContext);

  const isAuthenticated = () =>{
    if(!authenticated){
      return <Button> Entrar </Button>
    }
  }

  return (
    <div>
      <AppBar position="static" onChange={isAuthenticated}>
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
          <Button style={btnColor}>aqui</Button>
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
          <Button
            href={`/user/${authenticated && authenticated._id}/cart`}
            style={btnColor}
          >
            <Icon>
              <ShoppingCartIcon />
            </Icon>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
