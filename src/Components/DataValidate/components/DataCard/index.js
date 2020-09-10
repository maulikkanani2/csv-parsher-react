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
const DataCard = (props) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.p2}>
      <Grid item lg={6} md={6} sm={12}>
        <Paper>
          {props.json.length > 0 ? (
            <TableContainer component={Paper}>
              <Table size="small">
                <TableHead style={{ backgroundColor: "lightgray" }}>
                  <TableRow>
                    {/* {props.json[0].map((item, index) => {
                      return <TableCell key={index}>{item}</TableCell>;
                    })} */}
                    <TableCell>{props.json[0]}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {props.json[1].map((row, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell>{row}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          ) : null}
        </Paper>
      </Grid>
      <Grid item lg={6} md={6} sm={12}>
        validation status will apear here
      </Grid>
    </Grid>
  );
};

export default DataCard;
