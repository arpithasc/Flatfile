const ColumnSelector = ({ columns, selectedColumns, setSelectedColumns }) => {
    const toggleColumn = (col) => {
      setSelectedColumns(
        selectedColumns.includes(col)
          ? selectedColumns.filter((c) => c !== col)
          : [...selectedColumns, col]
      );
    };
  
    return (
      <div style={{ marginTop: "10px" }}>
        <h4>Select Columns</h4>
        {columns.map((col) => (
          <label key={col}>
            <input
              type="checkbox"
              checked={selectedColumns.includes(col)}
              onChange={() => toggleColumn(col)}
            />
            {col}
          </label>
        ))}
      </div>
    );
  };
  
  export default ColumnSelector;
  