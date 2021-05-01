import React from "react";
import { Container, Grid, Card, CardMedia } from "@material-ui/core";

const Promotion = () => {
  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item md={3} sm={12}>
          <Card>
            <CardMedia
              component="img"
              image="https://livedemo00-opencart.template-help.com/opencart_prod-18464/image/cache/catalog/banner-aside-270x380.jpg"
              alt="last day"
              height="310"
              title="last day"
            ></CardMedia>
          </Card>
        </Grid>
        <Grid item md={9} sm={12}>
          <CardMedia
            component="img"
            image="https://livedemo00-opencart.template-help.com/opencart_prod-18464/image/cache/catalog/deal-bg-870x299.jpg"
            alt="deal day"
            title="deal day"
          ></CardMedia>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Promotion;
