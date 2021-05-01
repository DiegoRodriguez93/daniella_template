import React from "react";
import { Grid, Container, Typography, /* Input */ } from "@material-ui/core";
import { useStyles } from "./style";

const NavBar = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth={"lg"} className={classes.navBar}>
        <Grid container>
          <Grid item md={4} sm={12}>
            <Typography className={classes.logo}>Daniella</Typography>
          </Grid>
          <Grid item md={4} sm={12}>
            {/* <Input placeholder={"Buscador"} /> */}
          </Grid>
          <Grid item md={4} sm={12}></Grid>
        </Grid>
      </Container>
    </>
  );
};

export default NavBar;
