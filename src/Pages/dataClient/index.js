import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TextField, Button, Grid } from "@material-ui/core";
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

const Dados = () => {
  const { authenticated } = useContext(AuthContext);
  const params = useParams();
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const [dado, setDado] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    nameAd: "",
    zip: "",
    cpf: "",
    city: "",
    state: "",
    district: "",
    number: "",
    telephone: "",
    cellphone: "",
    complement: "",
    address: "",
  });

  const dataUser = async (e) => {
    e.preventDefault();
    try {
      const { _id } = params;
      const response = await Axios().put(`${api}/user/${_id}`, dado);
      setSuccess("Atualizado com sucesso");
      window.location.reload();
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

        setDado(data);
      } catch (err) {
        console.log(err);
      }
    };
    loadData();
  }, [params]);

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
              value={dado.name || ""}
              onChange={(e) => setDado({ ...dado, name: e.target.value })}
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
              value={dado.surname || ""}
              onChange={(e) => setDado({ ...dado, surname: e.target.value })}
            />

            <TextField
              type="email"
              id="email"
              variant="outlined"
              label="Email"
              fullWidth
              size="small"
              style={btnStyle}
              value={(authenticated && authenticated.email) || ""}
              onChange={(e) => setDado({ ...dado, email: e.target.value })}
            />
            <TextField
              type="password"
              id="password"
              variant="outlined"
              label="Senha"
              fullWidth
              size="small"
              style={btnStyle}
              onChange={(e) => setDado({ ...dado, password: e.target.value })}
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
        <form style={paperDiv} onSubmit={dataUser}>
          <div style={Cliente}>
            <h3 style={tittle}>Endereço de Entrega</h3>
          </div>

          {error}
          {success}
          <div style={campoForm}>
            <TextField
              type="text"
              id="nameAd"
              variant="outlined"
              label="Nome do Endereço"
              size="small"
              aria-required
              style={btnStyle}
              value={dado.nameAd || ""}
              onChange={(e) => setDado({ ...dado, nameAd: e.target.value })}
            />
            <TextField
              type="text"
              id="cpf"
              variant="outlined"
              label="CPF"
              size="small"
              aria-required
              style={btnStyle}
              value={dado.cpf || ""}
              onChange={(e) => setDado({ ...dado, cpf: e.target.value })}
            />
            <TextField
              type="text"
              id="zip"
              variant="outlined"
              label="CEP"
              size="small"
              aria-required
              style={btnStyle}
              value={dado.zip || ""}
              onChange={(e) => setDado({ ...dado, zip: e.target.value })}
            />
            <TextField
              type="text"
              id="cell"
              variant="outlined"
              label="Celular"
              size="small"
              aria-required
              style={btnStyle}
              value={dado.cellphone || ""}
              onChange={(e) => setDado({ ...dado, cellphone: e.target.value })}
            />
            <TextField
              type="text"
              id="tel"
              variant="outlined"
              label="Telefone"
              size="small"
              aria-required
              style={btnStyle}
              value={dado.telephone || ""}
              onChange={(e) => setDado({ ...dado, telephone: e.target.value })}
            />
            <TextField
              type="text"
              id="address"
              variant="outlined"
              label="Endereço"
              size="small"
              aria-required
              style={btnStyle}
              value={dado.address || ""}
              onChange={(e) => setDado({ ...dado, address: e.target.value })}
            />
            <TextField
              type="text"
              id="number"
              variant="outlined"
              label="Numero"
              size="small"
              aria-required
              style={btnStyle}
              value={dado.number || ""}
              onChange={(e) => setDado({ ...dado, number: e.target.value })}
            />

            <TextField
              type="text"
              id="district"
              variant="outlined"
              label="Bairro"
              aria-required
              size="small"
              style={btnStyle}
              value={dado.district || ""}
              onChange={(e) => setDado({ ...dado, district: e.target.value })}
            />
            <TextField
              type="text"
              id="state"
              variant="outlined"
              label="Estado"
              aria-required
              size="small"
              style={btnStyle}
              value={dado.state || ""}
              onChange={(e) => setDado({ ...dado, state: e.target.value })}
            />
            <TextField
              type="text"
              id="city"
              variant="outlined"
              label="Cidade"
              aria-required
              size="small"
              style={btnStyle}
              value={dado.city || ""}
              onChange={(e) => setDado({ ...dado, city: e.target.value })}
            />
            <TextField
              type="text"
              id="complement"
              variant="outlined"
              label="Complemento"
              aria-required
              fullWidth
              size="small"
              style={btnStyle}
              value={dado.complement || ""}
              onChange={(e) => setDado({ ...dado, complement: e.target.value })}
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
              Editar
            </Button>
          </div>
        </form>
      </Grid>
    </div>
  );
};

export default Dados;
