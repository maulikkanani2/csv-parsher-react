import React, { useState, useEffect } from "react";
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
import AsyncSelect from "react-select/async";
import { columnNames } from "./ColumnNamesList";
import _ from "lodash";

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
  const [isValid, setIsValid] = useState(true);
  const [isTaken, setIsTaken] = useState("");
  const [selectedNewColumnName, setSelectedNewColumnName] = useState({});

  const filterColors = (inputValue) => {
    return columnNames.filter((i) =>
      i.value.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const promiseOptions = (inputValue) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(filterColors(inputValue));
      }, 1000);
    });

  const onChangeSelect = (selectedData) => {
    setSelectedNewColumnName(selectedData);
    let data = props.changedColumnJson;

    if (selectedData) {
      if (!data[selectedData.value]) {
        data[selectedData.value] = props.json[1];
        props.setChangedColumnJson({ ...data });
      } else {
        setIsTaken(
          `${selectedData.value} has already been taken by some other field`
        );
      }
    } else {
      setIsTaken("");
      for (let [key, value] of Object.entries(props.changedColumnJson)) {
        if (_.isEqual(value, props.json[1])) {
          delete data[key];
          props.setChangedColumnJson({ ...data });
          setIsValid(true);
        }
      }
    }
  };

  useEffect(() => {
    for (let [key, value] of Object.entries(props.changedColumnJson)) {
      if (_.isEqual(value, props.json[1])) {
        setSelectedNewColumnName({ value: `${key}`, label: `${key}` });
        console.log({ value: key, label: key });
        setIsValid(false);
      }
    }
    console.log("selectedNewColumnName", selectedNewColumnName.length);
  }, []);

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
                    <TableCell style={{ display: "flex" }}>
                      <div style={{ width: "50%" }}>
                        {Object.entries(props.json)[0][1]}
                      </div>
                      <div style={{ width: "50%" }} react-select>
                        <AsyncSelect
                          cacheOptions
                          onChange={onChangeSelect}
                          defaultOptions
                          isClearable
                          loadOptions={promiseOptions}
                        />
                      </div>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {props.json[1].map((row, index) => {
                    if (index < 4) {
                      return (
                        <TableRow key={index}>
                          <TableCell
                            style={{
                              width: "1px",
                              backgroundColor: "lightgray",
                            }}
                          >
                            {index + 1}
                          </TableCell>
                          <TableCell>{row}</TableCell>
                        </TableRow>
                      );
                    }
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
          <Info style={{ color: "lightgray" }} />
          100% of yours rows have a value for this columns
        </Typography>
        <Typography>
          <Done style={{ color: "green" }} />
          All values pass validation for this field
        </Typography>

        {isTaken && (
          <Typography style={{ color: "red" }}>
            <Done style={{ color: "green" }} />
            {isTaken}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default DataCard;
