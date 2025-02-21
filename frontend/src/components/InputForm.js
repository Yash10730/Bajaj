import React, { useState } from "react";

function InputForm({ data, setData, onSubmit }) {
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setData(e.target.value);
    setError(""); // Clear error when typing
  };

  const handleSubmit = () => {
    try {
      const parsedData = JSON.parse(data);
      if (!parsedData.data || !Array.isArray(parsedData.data)) {
        throw new Error("Invalid format! JSON must have a 'data' array.");
      }
      onSubmit();
    } catch (error) {
      setError("Invalid JSON format. Please check your input.");
    }
  };

  return (
    <div>
      <textarea
        rows="5"
        cols="50"
        placeholder='Enter JSON like { "data": ["A", "C", "z"] }'
        value={data}
        onChange={handleInputChange}
      />
      <br />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default InputForm;
