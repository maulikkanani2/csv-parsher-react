import React, { useState, useRef } from "react";
import { Icon, Paper, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Dropzone from "react-dropzone";
import Papa from "papaparse";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  m5: {
    margin: 90,
  },
  p5: {
    padding: 30,
  },
  borderRight: {
    borderRight: "2px solid #80808080",
  },
  py: {
    paddingLeft: 30,
    paddingRight: 30,
  },
}));

function UploadFiles(props) {
  const inputFile = useRef(null);
  const [files, setfiles] = useState([]);
  const [json, setJson] = useState([]);

  const handledrop = (acceptedFiles) => {
    var fileobj = new File(acceptedFiles, "demo.csv");

    Papa.parse(fileobj, {
      complete: function (results, file) {
        props.setJsonData(results.data);
        setJson(results.data);
      },
    });

    setfiles(acceptedFiles);
  };
  const classes = useStyles();

  const onButtonClick = () => {
    inputFile.current.click();
  };

  return (
    <div>
      <Dropzone onDrop={(acceptedFiles) => handledrop(acceptedFiles)}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps()} className="dropzone-container">
              <input {...getInputProps()} ref={inputFile} accept=".csv" />
              <div className="flex justify-center sm:justify-start flex-wrap dropzone-container">
                <label htmlFor="button-file"></label>
                <Paper
                  elevation={3}
                  className={classes.m5}
                  style={{ borderStyle: "dotted", borderColor: "#80808080" }}
                >
                  <Grid container>
                    <Grid
                      item
                      lg={4}
                      md={4}
                      sm={12}
                      className={`${classes.borderRight} ${classes.p5}`}
                      style={{ margin: "auto", textAlign: "center" }}
                    >
                      <div style={{ display: "block" }}>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={onButtonClick}
                        >
                          Upload data from file
                        </Button>
                        <div style={{ color: "rgba(0, 0, 0, 0.54)" }}>
                          .csv .tsv spreadsheets accepted
                        </div>
                      </div>
                    </Grid>
                    <Grid item lg={8} md={8} sm={12} className={classes.p5}>
                      <Icon fontSize="small" color="action">
                        You can upload any .csv, .tsv file with any set Of
                        columns as long as it has 1 record per row. The next
                        step will allow you to match your spreadsheet columns to
                        the right data points, You'll be able to clean up or
                        remove any corrupted data before finalizing your report.
                      </Icon>
                    </Grid>
                  </Grid>
                </Paper>
              </div>
            </div>
          </section>
        )}
      </Dropzone>
    </div>
  );
}

export default UploadFiles;
