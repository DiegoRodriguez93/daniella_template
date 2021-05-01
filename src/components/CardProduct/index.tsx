import React, { useState } from "react";
import { useStyles } from "./style";
import {
  Card,
  CardActions,
  CardActionArea,
  CardMedia,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";

interface ProductDataInterface {
  img1: string;
  img2: string;
  name: string;
  id: object;
  price: number;
}

interface CardProductInterface {
  productData: ProductDataInterface;
}

export default function CardProduct(props: CardProductInterface) {
  const classes = useStyles();
  const { img1, img2, name, /* id, */ price } = props.productData;
  const [image, setImage] = useState(img1);

  const changeImageHover = (image: string) => {
    if (image === img1) {
      setImage(img2);
    } else {
      setImage(img1);
    }
  };

  return (
    <Card className={classes.card}>
      <CardActionArea
        onMouseOver={() => changeImageHover(image)}
        onMouseOut={() => changeImageHover(image)}
      >
        <CardMedia
          component="img"
          alt={name}
          height="240"
          image={image}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h6">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actions}>
        <Typography variant="h5">${price}</Typography>
        <Button
          onClick={() => console.log("comprar producto con id:")}
          variant="contained"
          color="primary"
        >
          Comprar
        </Button>
      </CardActions>
    </Card>
  );
}
