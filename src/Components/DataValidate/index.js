import React from "react";
import Grid from "@material-ui/core/Grid";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Icon,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import DataCard from "./components/DataCard";

const useStyles = makeStyles((theme) => ({
  m5: {
    margin: 90,
  },
  p2: {
    padding: 30,
  },
  m2: {
    margin: 20,
  },
  pb0: {
    paddingBottom: 0,
  },
  py: {
    paddingLeft: 30,
    paddingRight: 30,
  },
}));
const DataValidate = (props) => {
  const classes = useStyles();
  const finalObj = {};

  if (props.json.length) {
    const coulmn = props.json[0];
    const data = props.json.slice(1, props.json.length);
    coulmn.forEach((item, index) => {
      data.map((inneritem) => {
        if (inneritem[index]) {
          if (finalObj[item]) {
            finalObj[item] = [...finalObj[item], inneritem[index]];
          } else {
            finalObj[item] = [inneritem[index]];
          }
        }
      });
    });
    console.log("FinalObj", finalObj);
  }
  return (
    <Paper className={classes.m5}>
      <h3 className={`${classes.p2}`}>Bulk add flatefile test</h3>
      {Object.keys(finalObj).length != 0 &&
        Object.entries(finalObj).map((item, index) => {
          console.log("item bom", item);
          return <DataCard json={item} />;
        })}
    </Paper>
  );
};

export default DataValidate;
