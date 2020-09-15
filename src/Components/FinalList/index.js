import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  FormGroup,
  FormControlLabel,
  Switch,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import JsonGrid from "react-json-grid"

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
  useEffect(()=>{
    // const finalOutput = [];
    // const innerList = {};
    // props.confirmJson.map((item, index)=> {
    //     const name = item[0];
    //     item[1].map((innerItem, innerIndex)=>{

    //     })
    // })
    console.log('Object.keys(props.confirmJson)', Object.keys(props.confirmJson));
  },[props.confirmJson])
  const classes = useStyles();
  // console.log('props.confirmJson from review section', JSON.stringify(props.confirmJson));
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
            {props.confirmJson.length > 0 ? (
              <TableContainer component={Paper} style={{ width: 'min-content' }}>
                <Table size="small">
                  <TableHead style={{ backgroundColor: "lightgray" }}>
                    <TableBody>
                      {props.confirmJson.map((item, index) => {
                        console.log("item", item[0]);
                        return <TableCell key={index}>{item[0]}</TableCell>;
                      })}
                    </TableBody>
                  </TableHead>
                  <div style={{display: "flex"}}>
                    {props.confirmJson.map((item) => {
                      return (
                        <TableBody>
                          {item[1].map((innerItem, innerIndex) => {
                            return (
                              <TableRow key={innerIndex}>
                                {console.log("innerItem", innerItem)}
                                <TableCell>{innerItem}</TableCell>
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      );
                    })}
                  </div>
                </Table>
              </TableContainer>
            ) : null}
          </Paper>
        </Grid>
      </Grid>
      <JsonGrid data={props.confirmJson} onChange={(x,y,objKey,value)=>{ console.log('dkjdskbsdfkjbdsfjb') }}/>
    </Paper>
  );
};

export default FinalList;
