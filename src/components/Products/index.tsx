import React from "react";
import { Container, Grid } from "@material-ui/core";
import { getProducts } from "../../libs/api";
import CardProduct from "../CardProduct";
import { useStyles } from "./style";
import { useQuery } from "react-query";

const Products = () => {
  const classes = useStyles();

  const { isLoading, error, data = [] } = useQuery("products", getProducts, {
    refetchOnMount: false,
  });

  if (isLoading) return <>Cargando....</>;
  if (error) return <>Error : {error}</>;

  return (
    <Container maxWidth={"lg"}>
      <Grid className={classes.productsContainer} container spacing={4}>
        {!isLoading &&
          data instanceof Array &&
          data.map((product, key) => (
            <Grid item key={key} lg={3} md={3} sm={6} xs={12}>
              <CardProduct productData={product} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};
export default Products;
