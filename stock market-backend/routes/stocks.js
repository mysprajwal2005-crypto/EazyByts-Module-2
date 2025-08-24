const express = require("express");
const db = require("../config/db");
const router = express.Router();
// Get all stocks
router.get("/", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM stocks");
    res.json(rows); // ✅ rows is an array
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch stocks" });
  }
});

router.post("/", async (req, res) => {
  let { symbol, price, change_percent } = req.body;

  if (!symbol || !price) {
    return res.status(400).json({ error: "Symbol and price are required" });
  }

  // If user enters only number, append %
  if (change_percent && !change_percent.includes("%")) {
    change_percent = change_percent + "%";
  }

  try {
    await db.query(
      "INSERT INTO stocks (symbol, price, change_percent) VALUES (?, ?, ?)",
      [symbol, price, change_percent || "0%"]
    );
    res.json({ message: "Stock added successfully" });
  } catch (err) {
    console.error("Error adding stock:", err);
    res.status(500).json({ error: "Failed to add stock" });
  }
});

module.exports = router;
