import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Header from "../../Components/Header";
import { useStyles, title, btn } from "./style";

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <div>
        <Typography gutterBottom variant="h5" component="h2" style={title}>
          O que você deseja levar hoje?
          <br /> Pedidos feitos até às 18h são entregues no dia seguinte.
          <br /> Taxa de entrega: R$ 5,00
        </Typography>
      </div>

      <div style={{ margin: "100px", display: "inline-flex" }}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="240"
              src="https://dourados.saofranciscoonline.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/c/acelga-unidade-0000000028684.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Acelga
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Uni
              </Typography>
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
    </div>
  );
};
export default Home;
