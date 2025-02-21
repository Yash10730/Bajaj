import React from "react";

function ResponseDisplay({ response, selectedOptions }) {
  return (
    <div>
      <h3>Response:</h3>
      <pre>
        {JSON.stringify(
          selectedOptions.reduce((acc, key) => {
            acc[key] = response[key];
            return acc;
          }, {}),
          null,
          2
        )}
      </pre>
    </div>
  );
}

export default ResponseDisplay;
