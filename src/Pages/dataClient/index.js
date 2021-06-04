import React, { useState, useContext, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { TextField, Button, Container, Grid } from "@material-ui/core";
import Header from "../../Components/Header";
import { api } from "../../Config/host";
import Axios from "../../Config/axios";
import { AuthContext } from "../../Auth/Auth-Provider";

import {
  paperStyle,
  tittle,
  Cliente,
  btnStyle,
  btnS,
  btnC,
  campoForm,
  paperDiv,
} from "./style";
import { data } from "browserslist";

const Edit = () => {
  const { authenticated } = useContext(AuthContext);
  const params = useParams();
  const history = useHistory();
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const [user, setUser] = useState();
  const [dado, setDado] = useState();

  const dataUser = async (e) => {
    e.preventDefault();
    try {
      const { _id } = params;
      const response = await Axios().put(`${api}/user/${_id}`, user);
      setSuccess("Atualizado com sucesso");
      return response;
    } catch (err) {
      console.log(err);
      const res = err.response.data.message;
      setError(res);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const { _id } = params;
        const { data } = await Axios().get(`${api}/user/${_id}`);
        const { name, surname, email } = data;

        setUser({
          name,
          surname,
          email,
        });
        setDado(data.nameAd)
      } catch (err) {
        console.log(err);
      }
    };
    loadData();
  }, [params]);

  useEffect(() => {
    setUser({
      ...data,
      email: (authenticated && authenticated.email) || "",
      name: (authenticated && authenticated.name) || "",
      surname: (authenticated && authenticated.surname) || "",
    });
  }, [authenticated]);

  return (
    <div>
      <Header />
      <Grid container>
        <h2 style={tittle}>Minha Conta</h2>

        <form style={paperStyle} onSubmit={dataUser}>
          {error}
          {success}
          <div style={Cliente}>
            <h3 style={tittle}>Dados do Cliente</h3>
          </div>
          <div style={campoForm}>
            <TextField
              type="text"
              id="name"
              variant="outlined"
              label="Nome"
              size="small"
              required
              fullWidth
              style={btnStyle}
              value={data.name || (authenticated && authenticated.name)}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
            <TextField
              type="text"
              id="surname"
              variant="outlined"
              label="Sobrenome"
              size="small"
              required
              fullWidth
              style={btnStyle}
              value={(authenticated && authenticated.surname) || data.surname}
              onChange={(e) => setUser({ ...user, surname: e.target.value })}
            />

            <TextField
              type="email"
              id="email"
              variant="outlined"
              label="Email"
              fullWidth
              size="small"
              style={btnStyle}
              value={(authenticated && authenticated.email) || data.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <TextField
              type="password"
              id="password"
              variant="outlined"
              label="Senha"
              fullWidth
              size="small"
              style={btnStyle}
              value={data.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <Button type="submi" style={btnC} href="/home">
              Cancelar
            </Button>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              style={btnS}
            >
              Salvar
            </Button>
          </div>
        </form>
        <div style={paperDiv}>
          <div style={Cliente}>
            <h3 style={tittle}>Endereços de Entrega</h3>
          </div>
          {dado}
        </div>
      </Grid>
    </div>
  );
};

export default Edit;
