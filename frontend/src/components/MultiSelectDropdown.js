import React from "react";
import Select from "react-select";

const options = [
  { value: "numbers", label: "Numbers" },
  { value: "alphabets", label: "Alphabets" },
  { value: "highest_alphabet", label: "Highest Alphabet" }
];

function MultiSelectDropdown({ setSelectedOptions }) {
  return (
    <Select
      isMulti
      options={options}
      onChange={(selected) => setSelectedOptions(selected.map(opt => opt.value))}
    />
  );
}

export default MultiSelectDropdown;
