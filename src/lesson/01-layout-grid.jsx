import React from "react";
import { Grid, Paper, Button, ButtonBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


// Button và ButtonBase
// ButtonBase là component được thiết kế tối giản
// hơn Button
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "green"
  },
  conatainer: {
    background: "red"
  },
  item: {
    border: "1px solid"
  },
  btn: {
    width: '128px',
    height: '128px',
    border: '1px solid'
  },
  img: {
    // margin: 'auto',
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  }
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2} style={{ border: "1px solid" }}>
        <Grid
          item
          xs
          container
          justify="center"
          alignItems="center"
          style={{ background: "coral", height: "100px" }}
        >
          <Paper style={{ flex: 1, textAlign: "center" }}>Header</Paper>
        </Grid>

        <Grid item container spacing={2}>
          <Grid
            item
            xs={4}
            style={{
              background: "purple",
              justifyContent: "center",
              alignContent: "center"
            }}
            container
          >
            <ButtonBase className={classes.btn}>
              <img
                className={classes.img}
                alt="complex"
                src="https://v3.material-ui.com/static/images/grid/complex.jpg"
              />
            </ButtonBase>
          </Grid>
          <Grid item xs spacing={2} container>
            <Grid item xs={6} style={{ background: "red" }}>
              <Paper>Main</Paper>
            </Grid>
            <Grid item xs={6} style={{ background: "blue" }}>
              <Paper>Right</Paper>
            </Grid>
            <Grid item xs={12} style={{ background: "yellow" }}>
              <Paper>Footer</Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
export default App;
