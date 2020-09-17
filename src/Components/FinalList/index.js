import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import {
  Paper,
  FormControlLabel,
  Switch,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import JsonGrid from "react-json-grid";

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
const FinalList = (props) => {
  const [data, setData] = useState([]);

  const OnCellChange = (x, y, objKey, value) => {
    let newData = data;
    newData[y][objKey] = value;
    setData([...newData]);
    //   props.setFinalJson([...newData]);
  };

  useEffect(() => {
    let finalarr = [];

    props.confirmJson.forEach((item) => {
      item[1].forEach((inneritem, innerindex) =>
        !finalarr.length
          ? finalarr.push({ [item[0]]: inneritem })
          : (finalarr[innerindex] = {
              ...finalarr[innerindex],
              [item[0]]: inneritem,
            })
      );
    });
    setData(finalarr);
    // props.setFinalJson(finalarr);
    console.log("its reloading every time");
  }, [props.confirmJson]);
  const classes = useStyles();
  return (
    <Paper className={classes.m5}>
      <h3 className={`${classes.p2}`} style={{ margin: "auto" }}>
        Bulk add 10 flatefile test
      </h3>
      <div className={`${classes.p2}`} style={{ paddingTop: "0px" }}>
        <FormControlLabel
          control={<Switch />}
          label="Only show rows with Problems"
        />
        <FormControlLabel control={<Switch />} label="Show modification" />
      </div>

      <Grid container className={classes.p2}>
        <Grid item lg={12} md={12} sm={12}>
          <Paper>
            <JsonGrid
              data={data}
              onChange={(x, y, objKey, value) => {
                OnCellChange(x, y, objKey, value);
              }}
            />
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default FinalList;
