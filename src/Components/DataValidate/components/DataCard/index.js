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
  Button,
  Typography,
} from "@material-ui/core";
import { Done, Info } from "@material-ui/icons";
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

  const onTextChange = (e) => {
    console.log("onTextChange", e.target.value);
  };
  console.log(
    "props.confirmJsonprops.confirmJsonprops.confirmJson",
    props.confirmJson.includes(props.json)
  );
  return (
    <Grid container className={classes.p2} style={{ paddingTop: "0" }}>
      <Grid item lg={6} md={6} sm={12}>
        <Paper>
          {props.json.length > 0 ? (
            <TableContainer component={Paper}>
              <Table size="small">
                <TableHead style={{ backgroundColor: "lightgray" }}>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell>{props.json[0]}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {props.json[1].map((row, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell
                          style={{ width: "1px", backgroundColor: "lightgray" }}
                        >
                          {index + 1}
                        </TableCell>
                        <TableCell onChangeCapture={(e) => onTextChange(e)}>
                          {row}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          ) : null}
        </Paper>
      </Grid>
      <Grid
        item
        lg={6}
        md={6}
        sm={12}
        style={{
          paddingLeft: "20px",
          paddingRight: "20px",
          margin: "auto",
        }}
      >
        <Typography>
          <Done style={{ color: "green" }} />
          Matched to the Name Fields
        </Typography>
        <Typography>
          <Info style={{ color: "lightgray" }} />
          100% of yours rows have a value for this columns
        </Typography>
        <Typography>
          <Done style={{ color: "green" }} />
          All values pass validation for this field
        </Typography>
        <div style={{ marginTop: 20 }}>
          <Button
            variant="contained"
            style={{ backgroundColor: "green", marginRight: 20, color: "#fff" }}
            onClick={() => props.setConfirmJson(props.json)}
            disabled={
              props.confirmJson.includes(props.json) ||
              props.ignoredJson.includes(props.json)
            }
          >
            Confirm mapping
          </Button>
          <Button
            variant="outlined"
            color="default"
            onClick={() => props.setConfirmJson(props.json)}
            disabled={
              props.confirmJson.includes(props.json) ||
              props.ignoredJson.includes(props.json)
            }
          >
            Ignore this columns
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default DataCard;
