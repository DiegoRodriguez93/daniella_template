import { makeStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
  topBar: {
    background: grey[200],
    padding: 6,
    margin: 0,
    textAlign: "center",
    width: "100%",
    display: "block",
  },
  contact: {
    display: "inline-block",
    transform: 'translateY(-7px)',
    marginLeft: '5px'
  },
}));
