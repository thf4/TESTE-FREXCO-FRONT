import React from "react";
import { TextField, Button, Container, Grid } from "@material-ui/core";
import Header from "../../Components/Header";

const EditProduct = () => {
  const paperStyle = {
    padding: "20px 0",
    height: 600,
    width: 600,
    margin: "20px 0",
  };

  const btnS = { backgroundColor: "#455a64", margin: "8px 5px" };
  const btnStyle = { margin: "10px ", align: "center" };
  const campoForm = { width: "100%" };
  return (
    <div>
      <Header />
      <Container>
        <Grid alignItems="center">
          <h2 style={{ margin: "8px 0", paddingTop: "50px" }}>
            Editar Produto{" "}
          </h2>

          <form style={paperStyle}>
            <div style={campoForm}>
              <TextField
                type="text"
                id="name"
                variant="outlined"
                label="Nome do Produto"
                size="small"
                fullWidth
                required
                style={btnStyle}
              />
              <TextField
                type="text"
                id="descrição"
                variant="outlined"
                label="Descrição do Produto"
                size="small"
                fullWidth
                required
                style={btnStyle}
              />
              <TextField
                type="text"
                id="price"
                variant="outlined"
                label="Preço"
                size="small"
                fullWidth
                required
                style={btnStyle}
              />
              <TextField
                type="Number"
                id="qty"
                variant="outlined"
                label="Quantidade"
                required
                fullWidth
                size="small"
                style={btnStyle}
              />
              <TextField
                type="file"
                id="zip"
                variant="outlined"
                required
                fullWidth
                size="small"
                style={btnStyle}
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
