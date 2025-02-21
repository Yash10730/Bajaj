require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

// GET method
app.get("/bfhl", (req, res) => {
  res.status(200).json({ operation_code: 1 });
});

// POST method
app.post("/bfhl", (req, res) => {
  try {
    const { data } = req.body;
    if (!Array.isArray(data)) {
      return res.status(400).json({ is_success: false, message: "Invalid input format" });
    }

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => /^[a-zA-Z]$/.test(item));
    const highestAlphabet = alphabets.length > 0
      ? [alphabets.sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' })).pop()]
      : [];

    const response = {
      is_success: true,
      user_id: process.env.USER_ID || "fullname_ddmmyyyy",
      email: process.env.EMAIL || "user@college.com",
      roll_number: process.env.ROLL_NUMBER || "CU123456",
      numbers,
      alphabets,
      highest_alphabet: highestAlphabet
    };

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ is_success: false, message: "Server error" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
