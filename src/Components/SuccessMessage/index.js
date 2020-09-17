import React from "react";
import { Paper } from "@material-ui/core";
import { Alert, AlertTitle } from '@material-ui/lab';
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles((theme) => ({
  m5: {
    margin: 90,
  }
}));

const SuccessMessage = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.m5}>
      <h3 className={`${classes.p2}`} style={{ margin: "auto" }}>
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          Your Final Json is sent to your account
        </Alert>
      </h3>
    </Paper>
  );
};

export default SuccessMessage;
