import axios from 'axios';

const handleIngest = async () => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/ingest', {
      source: "ClickHouse", // or "FlatFile"
      config: {
        host: "localhost",
        port: "8123",
        database: "default",
        user: "default",
        jwtToken: "your-jwt-token-here"
      },
      columns: ["column1", "column2"]
    });

    if (response.data.success) {
      alert(`Ingestion successful! Records: ${response.data.recordCount}`);
    } else {
      alert(`Ingestion failed: ${response.data.message}`);
    }
  } catch (err) {
    alert("Error: " + err.message);
  }
};
