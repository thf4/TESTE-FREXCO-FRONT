import React, { useState, useEffect } from "react";
import { Container, Grid, Button, Paper, Typography } from "@material-ui/core";

import Header from "../../Components/Header";
import { paper, btnS, title } from "./style";
import { api } from "../../Config/host";
import Axios from "../../Config/axios";

const Home = () => {
  const [card, setCard] = useState([]);
  const [count, setCount] = useState(1);

  const btn = () => {
    setCount(count + 1);
  };

  const btnM = () => {
    if (count === 1) {
      return <Button disabled></Button>;
    }
    setCount(count - 1);
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
      <div>
        <Typography gutterBottom variant="h5" style={title}>
          O que você deseja levar hoje?
          <br /> Pedidos feitos até às 18h são entregues no dia seguinte.
          <br /> Taxa de entrega: R$ 5,00
        </Typography>
      </div>
      <Container>
        <Grid>
          {card &&
            card.map((item) => {
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

                  <Button onClick={btnM}>-</Button>
                  {count}
                  <Button onClick={btn}>+</Button>

                  <Button
                    size="small"
                    color="primary"
                    variant="contained"
                    style={btnS}
                  >
                    {count * item.price} R$ Adicionar
                  </Button>
                </Paper>
              );
            })}
        </Grid>
      </Container>
    </div>
  );
};
export default Home;
