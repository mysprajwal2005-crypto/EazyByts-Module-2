import { useState } from "react";
import { addToPortfolio } from "../api/api";

function AddStockForm({ onAdded }) {
  const [symbol, setSymbol] = useState("");
  const [quantity, setQuantity] = useState("");
  const [buyPrice, setBuyPrice] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await addToPortfolio({ userId: 1, symbol, quantity, buyPrice }); // example userId = 1
      alert("Stock added!");
      setSymbol("");
      setQuantity("");
      setBuyPrice("");
      onAdded(); // refresh portfolio
    } catch (err) {
      alert("Error adding stock");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex gap-2">
      <input
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        placeholder="Symbol"
        className="border p-2 rounded"
      />
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        placeholder="Quantity"
        className="border p-2 rounded"
      />
      <input
        type="number"
        value={buyPrice}
        onChange={(e) => setBuyPrice(e.target.value)}
        placeholder="Avg Price"
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add
      </button>
    </form>
  );
}

export default AddStockForm;
