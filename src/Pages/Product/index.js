import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { TextField, Button, Container, Grid, Paper } from "@material-ui/core";
import { paperStyle, campoForm, btnS, btnStyle, paper } from "./style";
import Header from "../../Components/Header";
import { api } from "../../Config/host";
import Axios from "../../Config/axios";

const Product = () => {
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const [card, setCard] = useState();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    qty: "",
    image: "",
  });
  const history = useHistory();

  const cadProduct = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios().post(`${api}/product`, product);
      setSuccess("Cadastrado com sucesso");
      window.location.reload();
      return response;
    } catch (err) {
      if (
        err &&
        err.response &&
        err.response.data &&
        err.response.data.message
      ) {
        const rest = err.response.data.message;

        setError(rest);
      } else {
        setError("Erro inesperado!");
      }
    }
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const { data } = await Axios().get(`${api}/product`);
        setCard(data);
      } catch (err) {
        console.log(err);
      }
    };
    loadData();
  }, []);

  return (
    <div>
      <Header />
      <Container>
        <Grid>
          <h2 style={{ margin: "8px 0", paddingTop: "50px" }}>
            Cadastrar Produto{" "}
          </h2>

          <form style={paperStyle} onSubmit={cadProduct}>
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
                onChange={(e) =>
                  setProduct({ ...product, name: e.target.value })
                }
              />
              <TextField
                type="text"
                id="descrição"
                variant="outlined"
                label="Descrição do Produto"
                size="small"
                fullWidth
                style={btnStyle}
                onChange={(e) =>
                  setProduct({ ...product, description: e.target.value })
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
                onChange={(e) =>
                  setProduct({ ...product, price: e.target.value })
                }
              />
              <TextField
                type="Number"
                id="qty"
                variant="outlined"
                label="Quantidade"
                fullWidth
                size="small"
                style={btnStyle}
                onChange={(e) =>
                  setProduct({ ...product, qty: e.target.value })
                }
              />
              <TextField
                type="text"
                id="image"
                variant="outlined"
                label="ImagemUrl"
                fullWidth
                size="small"
                style={btnStyle}
                onChange={(e) =>
                  setProduct({ ...product, image: e.target.value })
                }
              />
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
          <h2> PRODUTOS CADASTRADOS </h2>
          {card &&
            card.map((item) => {
              const handleDelete = async () => {
                try {
                  const data = await Axios().delete(
                    `${api}/product/${item._id}`
                  );
                  window.location.reload();
                  return data;
                } catch (err) {
                  console.log(err);
                }
              };
              const handleEdit = async () => {
                history.push(`product/${item._id}`);
              };

              return (
                <Paper style={paper} key={item._id}>
                  <img
                    alt=""
                    height="100"
                    src={item.image}
                    style={{ float: "right" }}
                  />
                  <ul>
                    <li>
                      <strong>{item.name}</strong>
                    </li>
                    <li>{item.description}</li>
                    <li>{item.price}</li>
                    <li>{item.qty}</li>
                  </ul>

                  <Button
                    size="small"
                    color="primary"
                    variant="contained"
                    style={btnS}
                    onClick={handleEdit}
                  >
                    Editar
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    variant="contained"
                    style={btnS}
                    onClick={handleDelete}
                  >
                    Deletar
                  </Button>
                </Paper>
              );
            })}
        </Grid>
      </Container>
    </div>
  );
};

export default Product;
