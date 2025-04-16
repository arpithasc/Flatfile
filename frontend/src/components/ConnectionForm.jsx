const ConnectionForm = ({ source, config, setConfig }) => {
    const handleChange = (e) =>
      setConfig({ ...config, [e.target.name]: e.target.value });
  
    return (
      <div style={{ marginTop: "15px" }}>
        {source === "ClickHouse" ? (
          <>
            <input name="host" placeholder="Host" onChange={handleChange} />
            <input name="port" placeholder="Port" onChange={handleChange} />
            <input name="database" placeholder="Database" onChange={handleChange} />
            <input name="user" placeholder="User" onChange={handleChange} />
            <input name="jwt" placeholder="JWT Token" onChange={handleChange} />
          </>
        ) : (
          <>
            <input name="file_name" placeholder="Flat File Name" onChange={handleChange} />
            <input name="delimiter" placeholder="Delimiter (e.g. ,)" onChange={handleChange} />
          </>
        )}
      </div>
    );
  };
  
  export default ConnectionForm;
  