import { useState } from "react";
import CSVReader from "react-csv-reader";
import { useTeamContext } from "../../contexts/teamContext";
import styles from './styles.module.scss'

const papaparseOptions = {
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true,
  transformHeader: header => header.toLowerCase().replace(/\W/g, "_")
};

export function CsvParser() {
  const { setTeam } = useTeamContext()
  const [fileLabel, setFileLabel] = useState({} as any)

  const handleForce = (data: any, fileInfo: any) => {
    setTeam(data)
    setFileLabel(fileInfo)
  }

  return (
    <>
    <div>
      <CSVReader
        cssClass="csvParser"
        onFileLoaded={handleForce}
        parserOptions={papaparseOptions}
      />
      <p>{fileLabel.name}</p>
    </div>
    </>
  )
};

