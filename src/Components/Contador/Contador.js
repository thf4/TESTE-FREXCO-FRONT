import React, { useState } from "react";
import { Button, Grid, TextField } from "@material-ui/core";

import { btnS } from "../../Pages/Home/style";

const Contador = ({ productId, onChange, price }) => {
  const [count, setCount] = useState(0);

  const onClick = (value) => {
    if (value === "+") setCount(count + 1);
    if (value === "-" && count > 0) setCount(count - 1);
  };

  return (
    <>
      <Grid container>
        <Button onClick={() => onClick("-")}>-</Button>
        <TextField value={count} />
        <Button onClick={() => onClick("+")}>+</Button>
      </Grid>
      <Grid>
        <Button
          size="small"
          color="primary"
          variant="contained"
          style={btnS}
          fullWidth
          onClick={() => onChange({ productId, count })}
          disabled={count === 0}
        >
          {count > 0 ? (price * count).toFixed(2) : price} R$ Adicionar
        </Button>
      </Grid>
    </>
  );
};

export default Contador;
