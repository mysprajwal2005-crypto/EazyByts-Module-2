import React, { useEffect, useState } from "react";
import { fetchStocks, addStock } from "../api/api";
import StockCard from "../components/StockCard";

function Dashboard() {
  const [stocks, setStocks] = useState([]);
  const [form, setForm] = useState({ symbol: "", price: "", change_percent: "" });

  // Load stocks
  useEffect(() => {
    loadStocks();
  }, []);

  async function loadStocks() {
    try {
      const data = await fetchStocks();
      setStocks(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Error fetching stocks", err);
    }
  }

  // Handle form submit
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await addStock(form);
      setForm({ symbol: "", price: "", change_percent: "" });
      loadStocks(); // refresh list
    } catch (err) {
      console.error("Error adding stock", err);
    }
  }

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Stocks Dashboard</h2>

      {/* Add Stock Form */}
      <form onSubmit={handleSubmit} className="mb-6 space-x-2">
        <input
          type="text"
          placeholder="Symbol"
          value={form.symbol}
          onChange={(e) => setForm({ ...form, symbol: e.target.value })}
          className="border p-2"
        />
        <input
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          className="border p-2"
        />
        <input
  type="text"
  placeholder="Change %"
  value={form.change_percent}
  onChange={(e) => setForm({ ...form, change_percent: e.target.value })}
  className="border p-2"
/>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Stock
        </button>
      </form>

      {/* Show Stocks */}
      <div className="grid grid-cols-3 gap-4">
        {Array.isArray(stocks) && stocks.length > 0 ? (
          stocks.map((stock) => (
            <StockCard
              key={stock.id}
              symbol={stock.symbol}
              price={stock.price}
              change={stock.change_percent}
            />
          ))
        ) : (
          <p>No stocks available</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
