import React, { useState } from "react";
import { TextField, Button, Container, Grid } from "@material-ui/core";
import { useParams, useHistory } from "react-router-dom";
import { paperStyle, campoForm, btnS, btnStyle } from "./styleEdit";
import Header from "../../Components/Header";
import { api } from "../../Config/host";
import Axios from "../../Config/axios";

const EditProduct = () => {
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    qty: "",
    image: "",
  });
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const params = useParams();
  const history = useHistory();
  const editCard = async (e) => {
    e.preventDefault();
    const { _id } = params;
    try {
      const { response } = await Axios().put(`${api}/product/${_id}`, data);
      setSuccess("Atualizado com sucesso!");
      history.push("/home");
      return response;
    } catch (err) {
      const res = err.response.data.message;
      setError(res);
    }
  };

  return (
    <div>
      <Header />
      <Container>
        <Grid>
          <h2 style={{ margin: "8px 0", paddingTop: "50px" }}>
            Editar Produto{" "}
          </h2>
          <form style={paperStyle} onSubmit={editCard}>
            {error}
            {success}
            <div style={campoForm}>
              <TextField
                type="text"
                id="name"
                variant="outlined"
                label="Nome do Produto"
                size="small"
                fullWidth
                style={btnStyle}
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
              <TextField
                type="text"
                id="descrição"
                variant="outlined"
                label="Descrição do Produto"
                size="small"
                fullWidth
                style={btnStyle}
                value={data.description}
                onChange={(e) =>
                  setData({ ...data, description: e.target.value })
                }
              />
              <TextField
                type="text"
                id="price"
                variant="outlined"
                label="Preço"
                size="small"
                fullWidth
                style={btnStyle}
                value={data.price}
                onChange={(e) => setData({ ...data, price: e.target.value })}
              />
              <TextField
                type="Number"
                id="qty"
                variant="outlined"
                label="Quantidade"
                fullWidth
                size="small"
                style={btnStyle}
                value={data.qty}
                onChange={(e) => setData({ ...data, qty: e.target.value })}
              />
              <TextField
                type="text"
                id="image"
                variant="outlined"
                fullWidth
                size="small"
                style={btnStyle}
                value={data.image}
                onChange={(e) => setData({ ...data, image: e.target.value })}
              />
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
      </Container>
    </div>
  );
};

export default EditProduct;
