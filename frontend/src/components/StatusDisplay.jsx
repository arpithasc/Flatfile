const StatusDisplay = ({ status, recordCount }) => (
    <div style={{ marginTop: "20px" }}>
      <p>Status: {status}</p>
      {recordCount !== null && <p>Records Ingested: {recordCount}</p>}
    </div>
  );
  
  export default StatusDisplay;
  