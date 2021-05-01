import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  navBar: {
    paddingTop: "15px",
    paddingBottom: "15px",
    borderBottom: "22px solid " + theme.palette.primary.main,
  },
  logo: {
    color: theme.palette.primary.main,
    fontSize: "3.2rem",
    fontWeight: 300
  },
}));
