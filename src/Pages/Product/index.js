import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { TextField, Button, Container, Grid } from "@material-ui/core";
import { paperStyle, campoForm, btnS, btnStyle } from "./style";
import Header from "../../Components/Header";
import { api } from "../../Config/host";
import Axios from "../../Config/axios";

const Product = () => {
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    qty: "",
    image: "",
  });
  const params = useParams();

  const cadProduct = async (e) => {
    e.preventDefault();
    const { _id } = params;
    try {
      const response = await Axios().post(
        api + "/user/" + _id + "/product",
        product
      );
      setSuccess("Cadastrado com sucesso");
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
                type="file"
                id="image"
                variant="outlined"
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
        </Grid>
      </Container>
    </div>
  );
};

export default Product;
