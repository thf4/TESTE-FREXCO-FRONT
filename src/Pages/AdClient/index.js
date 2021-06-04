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
} from "./style";
import { data } from "browserslist";

const Dados = () => {
  const { authenticated } = useContext(AuthContext);
  const params = useParams();
  const history = useHistory();
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const [user, setUser] = useState({
    name: "",
    address: "",
    cpf: "",
    zip: "",
    city: "",
    number: "",
    complement: "",
    telephone: "",
    cellphone: "",
  });

  const dataUser = async (e) => {
    e.preventDefault();
    try {
      const { _id } = params;
      const response = await Axios().put(`${api}/user/${_id}/shipping`, user);
      setSuccess("Atualizado com sucesso");
      return response;
    } catch (err) {
      console.log(err);
      const res = err.response.data.message;
      setError(res);
    }
  };

  return (
    <div>
      <Header />
      <Container>
        <Grid alignItems="center">
          <h2 style={{ margin: "8px 0", paddingTop: "50px" }}>Minha Conta</h2>

          <form style={paperStyle} onSubmit={dataUser}>
            {error}
            {success}
            <div style={Cliente}>
              <h3 style={tittle}>Cadastrar Endereço</h3>
            </div>
            <div style={campoForm}>
              <TextField
                type="text"
                id="name"
                variant="outlined"
                label="Nome"
                size="small"
                required
                focused
                style={btnStyle}
                value={(authenticated && authenticated.name) || data.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
              <TextField
                type="text"
                id="cel"
                variant="outlined"
                label="Celular"
                size="small"
                required
                focused
                style={btnStyle}
                value={
                  (authenticated && authenticated.cellphone) || data.cellphone
                }
                onChange={(e) =>
                  setUser({ ...user, cellphone: e.target.value })
                }
              />
              <TextField
                type="text"
                id="tel"
                variant="outlined"
                label="Telefone"
                required
                size="small"
                focused
                style={btnStyle}
                value={
                  (authenticated && authenticated.telephone) || data.telephone
                }
                onChange={(e) =>
                  setUser({ ...user, telephone: e.target.value })
                }
              />
              <TextField
                type="text"
                id="zip"
                variant="outlined"
                label="CEP"
                required
                size="small"
                focused
                style={btnStyle}
                value={(authenticated && authenticated.zip) || data.zip}
                onChange={(e) => setUser({ ...user, zip: e.target.value })}
              />
              <TextField
                type="text"
                id="cpf"
                variant="outlined"
                label="CPF"
                required
                size="small"
                style={btnStyle}
                focused
                value={(authenticated && authenticated.cpf) || data.cpf}
                onChange={(e) => setUser({ ...user, cpf: e.target.value })}
              />
              <TextField
                type="text"
                id="address"
                variant="outlined"
                label="Endereço"
                required
                focused
                size="small"
                style={btnStyle}
                value={(authenticated && authenticated.address) || data.address}
                onChange={(e) => setUser({ ...user, address: e.target.value })}
              />
              <TextField
                type="number"
                id="number"
                variant="outlined"
                label="Numero"
                required
                size="small"
                focused
                style={btnStyle}
                value={(authenticated && authenticated.number) || data.number}
                onChange={(e) => setUser({ ...user, number: e.target.value })}
              />
              <TextField
                type="text"
                id="city"
                variant="outlined"
                label="Cidade"
                required
                size="small"
                style={btnStyle}
                focused
                value={(authenticated && authenticated.city) || data.city}
                onChange={(e) => setUser({ ...user, city: e.target.value })}
              />
              <TextField
                type="text"
                id="complement"
                variant="outlined"
                label="Complemento"
                fullWidth
                size="small"
                focused
                style={btnStyle}
                value={
                  (authenticated && authenticated.complement) || data.complement
                }
                onChange={(e) =>
                  setUser({ ...user, complement: e.target.value })
                }
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
        </Grid>
      </Container>
    </div>
  );
};

export default Dados;
