function StockCard({ symbol, price, change }) {
  const displayChange = change || "0%"; // fallback if null

  return (
    <div className="p-4 border rounded shadow bg-white">
      <h2 className="text-lg font-bold">{symbol}</h2>
      <p className="text-gray-700">${price}</p>
      <p
        className={
          displayChange.startsWith("+")
            ? "text-green-500"
            : displayChange.startsWith("-")
            ? "text-red-500"
            : "text-gray-500"
        }
      >
        {displayChange}
      </p>
    </div>
  );
}

export default StockCard;
