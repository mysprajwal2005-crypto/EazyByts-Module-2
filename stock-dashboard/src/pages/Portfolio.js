import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import PortfolioTable from "../components/PortfolioTable";
import AddStockForm from "../components/AddStockForm";
import { fetchPortfolio } from "../api/api";

function Portfolio() {
  const [portfolio, setPortfolio] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function loadPortfolio() {
    try {
      setLoading(true);
      const data = await fetchPortfolio(1); // example userId = 1
      setPortfolio(data);
    } catch (err) {
      setError("Error loading portfolio");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadPortfolio();
  }, []);

  if (loading) return <p className="p-6">Loading portfolio...</p>;
  if (error) return <p className="p-6 text-red-500">{error}</p>;

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">My Portfolio</h2>

          {/* 🔹 Add stock form */}
          <AddStockForm onAdded={loadPortfolio} />

          {/* 🔹 Portfolio table */}
          <PortfolioTable portfolio={portfolio} />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
