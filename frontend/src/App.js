import React, { useState } from "react";
import InputForm from "./components/InputForm";
import MultiSelectDropdown from "./components/MultiSelectDropdown";
import ResponseDisplay from "./components/ResponseDisplay";
import axios from "axios";

function App() {
  const [data, setData] = useState(''); // Input data
  const [selectedOptions, setSelectedOptions] = useState([]); // Selected filters
  const [response, setResponse] = useState(null); // API Response

  const handleSubmit = async () => {
    try {
      const parsedData = JSON.parse(data);
      const res = await axios.post("http://localhost:5000/bfhl", parsedData);
      setResponse(res.data);
    } catch (error) {
      console.error("Error processing data. Check JSON format.");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>BFHL Data Processor</h2>
      <InputForm data={data} setData={setData} onSubmit={handleSubmit} />
      <MultiSelectDropdown setSelectedOptions={setSelectedOptions} />
      {response && <ResponseDisplay response={response} selectedOptions={selectedOptions} />}
    </div>
  );
}

export default App;
