import React from "react";
import { Container, Grid } from "@material-ui/core";
import { useStyles } from "./style";

const Banner = () => {
  const classes = useStyles();
  return (
    <Container maxWidth={"lg"}>
      <Grid container>
        <Grid item md={12}>
          <img
            className={classes.bannerImg}
            src="https://livedemo00-opencart.template-help.com/opencart_prod-18464/image/cache/catalog/slide-2-1170x584.jpg"
            alt="banner 1"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
