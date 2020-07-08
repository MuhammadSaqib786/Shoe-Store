import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    width: "80%",
    align: "center",
    height: "100%",
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
export const Home = () => {
  const classes = useStyles();
  return (
    <div style={{ marginTop: "100px", marginLeft: "40px" }}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Link to="men">
            <Button
              variant="outlined"
              size="large"
              color="primary"
              className={classes.margin}
              style={{ backgroundColor: "darkblue", color: "white" }}
            >
              Men
            </Button>
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Link to="women">
            <Button
              variant="outlined"
              size="large"
              color="primary"
              className={classes.margin}
              style={{ backgroundColor: "darkviolet", color: "white" }}
            >
              Women
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};
