import React from "react";
import { Container, Divider, Typography } from "@material-ui/core";

interface SeparatorInterface {
  text: string;
}

const Separator = (props: SeparatorInterface) => {
  return (
    <Container maxWidth={"lg"}>
      <Typography variant="h6" color="initial">
        {props.text}
      </Typography>
      <Divider></Divider>
    </Container>
  );
};

export default Separator;
