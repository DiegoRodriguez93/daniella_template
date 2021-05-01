import { Container, Grid } from "@material-ui/core";
import React from "react";
import CardProduct from "../CardProduct";
import { useStyles } from "./style";

const Products = () => {
  const classes = useStyles();

  const productData = {
    img1:
    "https://livedemo00-opencart.template-help.com/opencart_prod-18464/image/cache/catalog/products/product-49-270x280.png",
    img2:
      "https://livedemo00-opencart.template-help.com/opencart_prod-18464/image/cache/catalog/products/product-51-270x280.png",
    name: "Saskiia Lingerie",
    id: 1,
    price: 199,
  };

  return (
    <Container maxWidth={"lg"}>
      <Grid className={classes.productsContainer} container spacing={4}>
        <Grid item lg={3} md={3} sm={6} xs={12}>
          <CardProduct productData={productData} />
        </Grid>
        <Grid item lg={3} md={3} sm={6} xs={12}>
          <CardProduct productData={productData} />
        </Grid>
        <Grid item lg={3} md={3} sm={6} xs={12}>
          <CardProduct productData={productData} />
        </Grid>
        <Grid item lg={3} md={3} sm={6} xs={12}>
          <CardProduct productData={productData} />
        </Grid>
      </Grid>
    </Container>
  );
};
export default Products;
