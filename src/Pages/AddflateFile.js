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
    borderRight: "2px solid lightgray",
  },
  py: {
    paddingLeft: 30,
    paddingRight: 30,
  },
}));

function UploadFiles() {
  const inputFile = useRef(null);
  const [files, setfiles] = useState([]);
  const [json, setJson] = useState([]);

  const handledrop = (acceptedFiles) => {
    var fileobj = new File(acceptedFiles, "demo.csv");

    Papa.parse(fileobj, {
      complete: function (results, file) {
        console.log("parsing complete read", results, "records.", "file", file);
        setJson(results.data);
      },
    });

    setfiles(acceptedFiles);
  };
  const classes = useStyles();

  const onButtonClick = () => {
    inputFile.current.click();
  }

  return (
    <div>
      <Paper
        elevation={3}
        className={classes.m5}
        style={{ borderStyle: "dotted", borderColor: "#80808080" }}
      >
        {/* <div> */}
        <Grid container>
          {/* <Paper elevation={3} className={classes.m5}> */}
          <Grid
            item
            lg={4}
            md={4}
            sm={12}
            className={(classes.borderRight, classes.p5)}
            style={{ margin: "auto", textAlign: "center" }}
          >
            <Button variant="contained" color="primary" onClick={onButtonClick}>
              Upload data from file
            </Button>
          </Grid>
          <Grid item lg={8} md={8} sm={12} className={classes.p5}>
            <Dropzone onDrop={(acceptedFiles) => handledrop(acceptedFiles)}>
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} ref={inputFile}/>
                    <div className="flex justify-center sm:justify-start flex-wrap">
                      <label htmlFor="button-file">
                        <Icon fontSize="small" color="action">
                          You can upload any .csv, .tsv file with any set Of
                          columns as long as it has 1 record per row. The next
                          step will allow you to match your spreadsheet columns
                          to the right data points, You'll be able to clean up
                          or remove any corrupted data before finalizing your
                          report.
                        </Icon>
                      </label>
                    </div>
                  </div>
                </section>
              )}
            </Dropzone>
          </Grid>
        </Grid>
        {json.length > 0 ?
        <div>
          <pre>{JSON.stringify(json)}</pre>
        </div>
        : null }
      </Paper>
    </div>
  );
}

export default UploadFiles;
