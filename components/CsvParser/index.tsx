import { useState } from "react";
import CSVReader from "react-csv-reader";

const papaparseOptions = {
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true,
  transformHeader: header => header.toLowerCase().replace(/\W/g, "_")
};

export function CsvParser() {
  const [team, setTeam] = useState([])
  const handleForce = (data) => {
    setTeam(data)
  }

  console.log(team)
  return (
    <div className="container">
      <CSVReader
        cssClass="react-csv-input"
        label="Select CSV with secret Death Star statistics"
        onFileLoaded={handleForce}
        parserOptions={papaparseOptions}
      />
      <p>and then open the console</p>
    </div>
  )
};

