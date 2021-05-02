import React from "react";
import { Typography, Container, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStyles } from "./style";

const NotFound = () => {
  const classes = useStyles();
  return (
    <Container maxWidth={"md"}>
      <Grid container>
        <Grid item xs={12} className={classes.notFoundContainer}>
          <Typography variant="h2">Página no encontrada 404</Typography>
          <Typography variant="h6">
            <Link to={"/"}>Volver al Inicio</Link>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NotFound;
