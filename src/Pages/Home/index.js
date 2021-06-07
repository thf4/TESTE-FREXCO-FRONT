import React, { useState, useEffect, useContext } from "react";
import { Container, Grid, Button, Paper, Typography } from "@material-ui/core";
import Header from "../../Components/Header";
import {
  paper,
  btnS,
  title,
  paperStyle,
  paperCart,
  divs,
  div,
  divC,
} from "./style";
import { api } from "../../Config/host";
import Axios from "../../Config/axios";
import { AuthContext } from "../../Auth/Auth-Provider";
import { Alert, AlertTitle } from "@material-ui/lab";

const Home = () => {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [success, setSuccess] = useState();
  const [error, setError] = useState();
  const { authenticated } = useContext(AuthContext);

  const addButton = (product) => {
    setCart([...cart, { ...product }]);
  };

  const removeItem = (productRemove) => {
    setCart(cart.filter((product) => product !== productRemove));
  };

  const final = async () => {
    try {
      console.log(cart);
      const response = await Axios().post(
        `${api}/user/${authenticated._id}/cart`,
        cart
      );
      setSuccess("Finalizado com sucesso!");
      return response;
    } catch (err) {
      const res = err.response.data.message;
      setError(res);
    }
  };
  useEffect(() => {
    const loadData = async () => {
      try {
        const { data } = await Axios().get(`${api}/product`);
        setProduct(data);
      } catch (err) {
        console.log(err);
      }
    };
    loadData();
  }, []);

  return (
    <div>
      <Header text={cart.length} />

      <div>
        <Typography gutterBottom variant="h5" style={title}>
          O que você deseja levar hoje?
          <br /> Pedidos feitos até às 18h são entregues no dia seguinte.
          <br /> Taxa de entrega: R$ 5,00
        </Typography>
      </div>
      <div>
        {error && (
          <Alert severity="warning">
            <AlertTitle>{error}</AlertTitle>
          </Alert>
        )}
        {success && (
          <Alert severity="success">
            <AlertTitle>{success}</AlertTitle>
          </Alert>
        )}
      </div>
      <div style={div}>
        <div style={divC}>
          <Container>
            {product &&
              product.map((product, id) => {
                return (
                  <Paper style={paperCart} key={id}>
                    <img
                      alt={product.name}
                      height="100"
                      src={product.image}
                      style={{ float: "right" }}
                    />
                    <ul style={{ listStyle: "none" }}>
                      <li>
                        <strong>{product.name}</strong>
                      </li>
                      <li>{product.description}</li>
                      <li>{product.price}</li>
                    </ul>

                    <Button
                      size="small"
                      color="primary"
                      variant="contained"
                      style={btnS}
                      fullWidth
                      onClick={() => addButton(product)}
                    >
                      {product.price} R$ Adicionar
                    </Button>
                  </Paper>
                );
              })}
          </Container>
        </div>

        <div style={divs}>
          <Paper elevation={8} style={paperStyle}>
            <Grid align="center">
              <img
                width="200"
                alt="frexco-Logo"
                src="https://frexco-images-prd.s3.amazonaws.com/uploads/2020/10/26/339c1848-47e9-4c4a-ba67-1f952737345b.png"
              />
            </Grid>

            {cart &&
              cart.map((cartP, idx) => {
                return (
                  <>
                    <Paper style={paper} key={idx}>
                      <img
                        alt={cartP.name}
                        height="100"
                        src={cartP.image}
                        style={{ float: "right" }}
                      />
                      <ul style={{ listStyle: "none" }}>
                        <li>
                          <strong>{cartP.name}</strong>
                        </li>
                        <li>{cartP.description}</li>
                        <li>{cartP.price}</li>
                      </ul>
                      <Button
                        size="small"
                        color="primary"
                        variant="contained"
                        style={btnS}
                        fullWidth
                        onClick={() => removeItem(cartP)}
                      >
                        Remover item
                      </Button>
                    </Paper>
                  </>
                );
              })}

            <Button
              style={btnS}
              color="primary"
              variant="contained"
              fullWidth
              onClick={() => final()}
            >
              {cart.length} Finalizar Compra
            </Button>
          </Paper>
        </div>
      </div>
    </div>
  );
};
export default Home;
