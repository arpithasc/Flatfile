import React, { useState } from "react";
import axios from "axios";
import ConnectionForm from "./components/ConnectionForm";
import ColumnSelector from "./components/ColumnSelector";
import StatusDisplay from "./components/StatusDisplay";

const App = () => {
  const [source, setSource] = useState("ClickHouse");
  const [config, setConfig] = useState({});
  const [columns, setColumns] = useState([]);
  const [selectedColumns, setSelectedColumns] = useState([]);
  const [status, setStatus] = useState("");
  const [recordCount, setRecordCount] = useState(null);

  const handleConnect = async () => {
    setStatus("Connecting...");
    try {
      const res = await axios.post("http://localhost:8000/connect", {
        source,
        ...config,
      });
      setColumns(res.data.columns || []);
      setStatus("Connection successful. Columns loaded.");
    } catch (err) {
      setStatus("Connection failed: " + err.message);
    }
  };

  const handleIngest = async () => {
    setStatus("Ingesting...");
    try {
      const res = await axios.post("http://localhost:8000/ingest", {
        source,
        config,
        selected_columns: selectedColumns,
      });
      setRecordCount(res.data.record_count);
      setStatus("Ingestion complete.");
    } catch (err) {
      setStatus("Ingestion failed: " + err.message);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>ClickHouse ↔ Flat File Ingestion Tool</h2>

      <label>
        Select Source:
        <select
          value={source}
          onChange={(e) => {
            setSource(e.target.value);
            setColumns([]);
            setSelectedColumns([]);
          }}
        >
          <option>ClickHouse</option>
          <option>Flat File</option>
        </select>
      </label>

      <ConnectionForm source={source} config={config} setConfig={setConfig} />

      <button onClick={handleConnect}>Connect & Load Columns</button>

      {columns.length > 0 && (
        <ColumnSelector
          columns={columns}
          selectedColumns={selectedColumns}
          setSelectedColumns={setSelectedColumns}
        />
      )}

      <button onClick={handleIngest}>Start Ingestion</button>

      <StatusDisplay status={status} recordCount={recordCount} />
    </div>
  );
};

export default App;
