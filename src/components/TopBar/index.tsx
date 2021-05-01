import React from "react";
import { Grid, Container, Typography } from "@material-ui/core";
import { useStyles } from "./style";
import logoWhatsapp from "./logo-whatsapp.svg";

const TopBar = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container maxWidth={"xl"} className={classes.topBar}>
        <Grid container>
          <Grid item sm={12}>
            <img width="28" src={logoWhatsapp} alt="logo whatsapp" />
            <Typography className={classes.contact}>+598 99 027 591</Typography>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default TopBar;
