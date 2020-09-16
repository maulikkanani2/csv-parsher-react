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
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

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
  borderRight: {
    borderRight: "2px solid lightgray",
  },
  textLast: {},
  py: {
    paddingLeft: 30,
    paddingRight: 30,
  },
}));
const DataTableOne = (props) => {
  const classes = useStyles();
  return (
    <Paper className={classes.m5}>
      <h3 className={`${classes.p2} ${classes.pb0}`} style={{ margin: 'auto' }}>
        Bulk add flatefile test
      </h3>
      <Grid container className={classes.p2}>
        <Grid item lg={3} md={3} sm={12}>
          <h4 style={{ marginTop: 0, textAlign: "end" }}>
            Dose this row contain column name{" "}
            <Icon component={ArrowRightAltIcon} />
          </h4>
          <div>
            <Button variant="contained" style={{backgroundColor: "#5ea712", marginRight: 10, color: "#fff"}} onClick={() => props.setToTheNextStep(1)}>Yes</Button>
            <Button variant="contained" style={{backgroundColor: "#000000", color: "#fff"}} onClick={() => props.setJsonData([])}>No</Button>
          </div>
          <div style={{marginTop: 25}}>
            <Button variant="contained" style={{backgroundColor: "#828E9C", color: "#fff"}} color="default" onClick={() => props.setJsonData([])}>Go back</Button>
          </div>
        </Grid>
        <Grid item lg={9} md={9} sm={12}>
          {props.json.length > 0 ? (
            <TableContainer component={Paper}>
              <Table size="small">
                <TableHead style={{ backgroundColor: "lightgray" }}>
                  <TableRow style={{borderBottom: '1px solid #80808080'}}>
                    {props.json[0].map((item, index) => {
                      return <TableCell key={index} style={{borderRight: '1px solid #80808080'}}>{item}</TableCell>;
                    })}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {props.json.map((row, index) => {
                    if (index != 0 && row.length > 1 && index < 2) {
                      return (
                        <TableRow key={index} style={{borderBottom: '1px solid #80808080'}}>
                          {row.map((item, index) => {
                            return <TableCell key={index} style={{borderRight: '1px solid #80808080'}}>{item}</TableCell>;
                          })}
                        </TableRow>
                      );
                    }
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          ) : null}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default DataTableOne;
