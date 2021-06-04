import React, { useState } from "react";
import { TextField, Button, Paper, Grid, Typography } from "@material-ui/core";
import Axios from "../../Config/axios";
import { api } from "../../Config/host";
import { Link, useHistory } from "react-router-dom";
import { paperStyle, btnS, btnStyle } from "./style";

const Create = () => {
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const [user, setUser] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });
  const history = useHistory();

  const cadUser = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios().post(api + "/cadastrar", user);
      setSuccess("Cadastrado com Sucesso !");
      history.push("/login");
      return response;
    } catch (err) {
      const res = err.response.data.message;
      setError(res);
    }
  };

  return (
    <div>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <img
              width="200"
              alt="frexco-Logo"
              src="https://frexco-images-prd.s3.amazonaws.com/uploads/2020/10/26/339c1848-47e9-4c4a-ba67-1f952737345b.png"
            />
            <h2>Cadastre-se</h2>
          </Grid>
          <form onSubmit={cadUser}>
            {error}
            {success}
            <TextField
              type="text"
              id="name"
              variant="outlined"
              label="Nome"
              fullWidth
              required
              style={btnStyle}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
            <TextField
              type="text"
              id="fullName"
              variant="outlined"
              label="Sobrenome"
              fullWidth
              required
              style={btnStyle}
              onChange={(e) => setUser({ ...user, surname: e.target.value })}
            />
            <TextField
              type="email"
              id="email"
              variant="outlined"
              label="Email"
              fullWidth
              required
              style={btnStyle}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <TextField
              type="password"
              id="password"
              variant="outlined"
              label="Senha"
              fullWidth
              required
              style={btnStyle}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              fullWidth
              style={btnS}
            >
              Criar Conta
            </Button>
          </form>

          <Typography>
            Já possui uma conta ?<Link to="/Login"> Entrar </Link>
          </Typography>
        </Paper>
      </Grid>
    </div>
  );
};

export default Create;
