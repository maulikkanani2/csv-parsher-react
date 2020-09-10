import React, { useState } from "react";
import AddFlateFile from "../Components/AddFlateFile";
import DataTableOne from "../Components/DataTableOne";
import DataValidate from "../Components/DataValidate";
import FinalList from "../Components/FinalList";

function Home() {
  const [json, setJson] = useState([]);
  const setJsonData = (value) => {
    setJson(value);
  };
  return (
    <div>
      <AddFlateFile setJsonData={setJsonData} />
      <DataTableOne json={json} />
      <DataValidate json={json} />
      <FinalList json={json} />
    </div>
  );
}

export default Home;
