const express = require("express");
const db = require("../config/db");
const router = express.Router();

// Get user portfolio
router.get("/:userId", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM portfolio WHERE id = ?", [req.params.userId]);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch portfolio" });
  }
});

// Add stock to portfolio
router.post("/", async (req, res) => {
  const { userId, symbol, quantity, buyPrice } = req.body;
  try {
    await db.query("INSERT INTO portfolio (user_id, symbol, quantity, avg_price) VALUES (?, ?, ?, ?)", 
      [userId, symbol, quantity, buyPrice]);
    res.json({ message: "Stock added to portfolio" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to add stock" });
  }
});

module.exports = router;
