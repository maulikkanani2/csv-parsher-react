import React from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles((theme) => ({
  m5: {
    margin: 90,
  }
}));

const FinishButton = (props) => {
  const classes = useStyles();
  return (
    <Paper className={classes.m5}>
        {props.children}
    </Paper>
  );
};

export default FinishButton;
