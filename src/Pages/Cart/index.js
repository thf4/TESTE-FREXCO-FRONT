import React, { useState, useContext, useEffect } from "react";
import { Button, Paper, Grid } from "@material-ui/core";
import { useHistory, withRouter, useParams } from "react-router-dom";
import { paperStyle, btnS, btnStyle } from "./style";
import { AuthContext } from "../../Auth/Auth-Provider";
import Header from "../../Components/Header";
import Axios from "../../Config/axios";
import { api } from "../../Config/host";

const Cart = () => {
  const history = useHistory();
  const [error, setError] = useState();
  const [user, setUser] = useState();
  const params = useParams();
  const { authenticated } = useContext(AuthContext);

  useEffect(() => {
    const handleSubmit = async () => {
      const { _id } = params;
      console.log(_id);
      try {
        const { response } = await Axios().get(
          `${api}/user/${_id}/cart/`,
          user
        );
        setUser(response);
      } catch (err) {}
    };
    handleSubmit();
  }, [params, user, authenticated]);

  return (
    <div>
      <Header />
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <img
              width="200"
              alt="frexco-Logo"
              src="https://frexco-images-prd.s3.amazonaws.com/uploads/2020/10/26/339c1848-47e9-4c4a-ba67-1f952737345b.png"
            />
          </Grid>
          <p>Ola</p>
          {error}

          {user &&
            user.map((item) => {
              return (
                <ul key={item._id}>
                  <li>Ainda estou aqui</li>
                  <li>{user.name}</li>
                </ul>
              );
            })}

          <Button style={btnS} color="primary" variant="contained" fullWidth>
            Finalizar Compra
          </Button>
        </Paper>
      </Grid>
    </div>
  );
};

export default withRouter(Cart);
