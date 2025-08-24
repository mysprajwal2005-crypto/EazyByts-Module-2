const express = require("express");
const db = require("../config/db");
const router = express.Router();

// Get all orders
router.get("/:userId", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM orders WHERE user_id = ?", [req.params.userId]);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});

// Place an order
router.post("/", async (req, res) => {
  const { userId, symbol, quantity, orderType, price } = req.body;
  try {
    await db.query("INSERT INTO orders (user_id, symbol, quantity, order_type, price) VALUES (?, ?, ?, ?, ?)", 
      [userId, symbol, quantity, orderType, price]);
    res.json({ message: "Order placed successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to place order" });
  }
});

module.exports = router;
