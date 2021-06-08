import React, { useState, useEffect, useContext } from "react";
import { Grid, Button, Paper, Typography } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";

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
import { AuthContext } from "../../Auth/Auth-Provider";
import Contador from "../../Components/Contador";
import { api } from "../../Config/host";
import Axios from "../../Config/axios";

const Home = () => {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [success, setSuccess] = useState();
  const [error, setError] = useState();
  const { authenticated } = useContext(AuthContext);

  const removeItem = (params) => {
    setCart(cart.filter((_id) => _id !== params));
  };
  const contadorChange = (value) => {
    const res = cart.find((c) => c.productId === value.productId);
    let arr = [];

    if (res) {
      arr = cart.map((c) => {
        if (c.productId === value.productId) return value;

        return c;
      });
    } else {
      arr = [...cart, value];
    }
    setCart(arr);
  };

  const final = async (e) => {
    e.preventDefault();
    try {
      const data = await Axios().post(
        `${api}/user/${authenticated._id}/cart`,
        cart
      );
      setSuccess("Finalizado com sucesso!");
      return data;
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
          {product.map((item) => {
            return (
              <Paper style={paperCart} key={`p${item._id}`}>
                <img
                  alt={item.name}
                  height="100"
                  src={item.image}
                  style={{ float: "right" }}
                />
                <ul style={{ listStyle: "none" }}>
                  <li>
                    <strong>{item.name}</strong>
                  </li>
                  <li>{item.description}</li>
                  <li>{item.price}</li>
                </ul>
                <Contador
                  productId={item._id}
                  price={item.price}
                  onChange={contadorChange}
                />
              </Paper>
            );
          })}
        </div>

        <div style={divs}>
          <form onSubmit={final}>
            <Paper elevation={8} style={paperStyle}>
              <Grid align="center">
                <img
                  width="200"
                  alt="frexco-Logo"
                  src="https://frexco-images-prd.s3.amazonaws.com/uploads/2020/10/26/339c1848-47e9-4c4a-ba67-1f952737345b.png"
                />
              </Grid>

              {cart.map((item) => {
                const data = product.find((p) => item.productId === p._id);

                return (
                  <div key={`b${item.productId}`}>
                    <Paper style={paper}>
                      <img
                        alt={data && data.name}
                        height="100"
                        src={data && data.image}
                        style={{ float: "right" }}
                      />
                      <ul style={{ listStyle: "none" }}>
                        <li>
                          <strong>{data && data.name}</strong>
                        </li>
                        <li>Descrição: {data && data.description}</li>
                        <li>R$ {data && data.price && +data.price.toFixed(2)}</li>
                        <li>Quantidade: {item.count}</li>
                      </ul>
                      <Button
                        size="small"
                        color="primary"
                        variant="contained"
                        style={btnS}
                        fullWidth
                        onClick={() => removeItem(data)}
                      >
                        Remover item
                      </Button>
                    </Paper>
                  </div>
                );
              })}

              <Button
                style={btnS}
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
              >
                Finalizar Compra
              </Button>
            </Paper>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Home;
