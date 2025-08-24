// Helper functions for API calls to backend
const API_URL = "http://localhost:5000/api";

export async function loginUser(credentials) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  return res.json();
}

export async function registerUser(data) {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function fetchPortfolio(userId) {
  const res = await fetch(`${API_URL}/portfolio/${userId}`);
  if (!res.ok) throw new Error("Failed to fetch portfolio");
  return res.json();
}
export async function fetchStocks() {
  const res = await fetch(`${API_URL}/stocks`);
  return res.json();
}
// 🔹 Insert portfolio API
export async function addToPortfolio({ userId, symbol, quantity, buyPrice }) {
  const res = await fetch(`${API_URL}/portfolio`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, symbol, quantity, buyPrice }),
  });
  if (!res.ok) throw new Error("Failed to add stock");
  return res.json();
}
export async function addStock(stock) {
  const res = await fetch(`${API_URL}/stocks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(stock),
  });
  if (!res.ok) throw new Error("Failed to add stock");
  return res.json();
}
export async function fetchOrders(userId) {
  const res = await fetch(`${API_URL}/orders/${userId}`);
  if (!res.ok) throw new Error("Failed to fetch orders");
  return res.json();
}

// Place a new order
export async function placeOrder(order) {
  const res = await fetch(`${API_URL}/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(order),
  });
  if (!res.ok) throw new Error("Failed to place order");
  return res.json();
}