import React from "react";
import { TextField, Button, Container, Grid } from "@material-ui/core";
import Header from "../../Components/Header";
import {
  paperStyle,
  tittle,
  Cliente,
  btnStyle,
  btnS,
  btnC,
  campoForm,
} from "./style";
const Dados = () => {
  return (
    <div>
      <Header />
      <Container>
        <Grid alignItems="center">
          <h2 style={{ margin: "8px 0", paddingTop: "50px" }}>Minha Conta</h2>

          <form style={paperStyle}>
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
                style={btnStyle}
              />
              <TextField
                type="text"
                id="fullName"
                variant="outlined"
                label="Sobrenome"
                size="small"
                required
                style={btnStyle}
              />
              <TextField
                type="text"
                id="cel"
                variant="outlined"
                label="Celular"
                size="small"
                required
                style={btnStyle}
              />
              <TextField
                type="text"
                id="tel"
                variant="outlined"
                label="Telefone"
                required
                size="small"
                style={btnStyle}
              />
              <TextField
                type="text"
                id="zip"
                variant="outlined"
                label="CEP"
                required
                size="small"
                style={btnStyle}
              />
              <TextField
                type="text"
                id="cpf"
                variant="outlined"
                label="CPF"
                required
                size="small"
                style={btnStyle}
              />
              <TextField
                type="text"
                id="address"
                variant="outlined"
                label="Endereço"
                required
                size="small"
                style={btnStyle}
              />
              <TextField
                type="number"
                id="number"
                variant="outlined"
                label="Numero"
                required
                size="small"
                style={btnStyle}
              />
              <TextField
                type="text"
                id="city"
                variant="outlined"
                label="Cidade"
                required
                size="small"
                style={btnStyle}
              />
              <TextField
                type="text"
                id="estate"
                variant="outlined"
                label="Estado"
                required
                size="small"
                style={btnStyle}
              />
              <TextField
                type="text"
                id="comple"
                variant="outlined"
                label="Complemento"
                required
                fullWidth
                size="small"
                style={btnStyle}
              />
              <TextField
                type="email"
                id="email"
                variant="outlined"
                label="Email"
                required
                size="small"
                fullWidth
                style={btnStyle}
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
