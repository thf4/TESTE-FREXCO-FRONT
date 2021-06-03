import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const styleaBar = { backgroundColor: "white" };
  const classes = useStyles();
  const btnColor = { color: "green" };

  return (
    <div>
      <AppBar position="static">
        <Toolbar style={styleaBar}>
          <Typography variant="h6 " className={classes.title}>
            <Link to="/home">
              <img
                alt="logo-Frexco"
                width="150"
                src="https://frexco-images-prd.s3.amazonaws.com/uploads/2020/10/26/339c1848-47e9-4c4a-ba67-1f952737345b.png"
              />
            </Link>
          </Typography>
          <Button style={btnColor} href="/login">
            Entrar
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
