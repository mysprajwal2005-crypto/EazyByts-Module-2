import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { fetchOrders, placeOrder } from "../api/api"; // ⬅️ import API functions

function Orders() {
  const [orders, setOrders] = useState([]);
  const [form, setForm] = useState({
    symbol: "",
    quantity: "",
    orderType: "BUY",
    price: "",
  });

  const userId = 1; // ⚡ Replace with logged-in user ID

  // Load orders on page load
  useEffect(() => {
    loadOrders();
  }, []);

  async function loadOrders() {
    try {
      const data = await fetchOrders(userId);
      setOrders(data);
    } catch (err) {
      console.error(err);
    }
  }

  // Submit order
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await placeOrder({ userId, ...form });
      setForm({ symbol: "", quantity: "", orderType: "BUY", price: "" });
      loadOrders(); // refresh orders
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">My Orders</h2>

          {/* Place Order Form */}
          <form onSubmit={handleSubmit} className="mb-6 flex gap-2">
            <input
              type="text"
              placeholder="Symbol"
              value={form.symbol}
              onChange={(e) => setForm({ ...form, symbol: e.target.value })}
              className="border p-2 rounded"
              required
            />
            <input
              type="number"
              placeholder="Quantity"
              value={form.quantity}
              onChange={(e) => setForm({ ...form, quantity: e.target.value })}
              className="border p-2 rounded"
              required
            />
            <select
              value={form.orderType}
              onChange={(e) => setForm({ ...form, orderType: e.target.value })}
              className="border p-2 rounded"
            >
              <option value="BUY">BUY</option>
              <option value="SELL">SELL</option>
            </select>
            <input
              type="number"
              placeholder="Price"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              className="border p-2 rounded"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Place Order
            </button>
          </form>

          {/* Show Orders */}
          {orders.length > 0 ? (
            <table className="w-full border">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2 border">Symbol</th>
                  <th className="p-2 border">Quantity</th>
                  <th className="p-2 border">Type</th>
                  <th className="p-2 border">Price</th>
                  <th className="p-2 border">Date</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="text-center">
                    <td className="p-2 border">{order.symbol}</td>
                    <td className="p-2 border">{order.quantity}</td>
                    <td
                      className={`p-2 border font-bold ${
                        order.order_type === "BUY"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {order.order_type}
                    </td>
                    <td className="p-2 border">${order.price}</td>
                    <td className="p-2 border">
                      {new Date(order.created_at).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No orders placed yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Orders;
