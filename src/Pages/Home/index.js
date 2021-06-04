import React, { useState, useEffect } from "react";
import {
  Card,
  Container,
  CardContent,
  CardMedia,
  Button,
  CardActionArea,
  Typography,
  CardActions,
} from "@material-ui/core";

import Header from "../../Components/Header";
import { useStyles, title, btn, styleDiv } from "./style";
import { api } from "../../Config/host";
import Axios from "../../Config/axios";

const Home = () => {
  const classes = useStyles();

  const [card, setCard] = useState([]);
  const [count, setCount] = useState();
  

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
      <Container maxWidth="lg">
        {card &&
          card.map((item) => {
            return (
              <div style={styleDiv} key={item._id}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      height="200"
                      src="https://dourados.saofranciscoonline.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/c/acelga-unidade-0000000028684.jpg"
                    />
                    <CardContent>
                      <Typography variant="h5">{item.name}</Typography>
                      <Typography>{item.description}</Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      variant="contained"
                      style={btn}
                    >
                      Share
                    </Button>
                    <Button
                      size="small"
                      color="primary"
                      variant="contained"
                      style={btn}
                    >
                      Adicionar
                    </Button>
                  </CardActions>
                </Card>
              </div>
            );
          })}
      </Container>
    </div>
  );
};
export default Home;
