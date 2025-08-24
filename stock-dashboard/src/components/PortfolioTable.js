function PortfolioTable({ portfolio }) {
  return (
    <table className="w-full border mt-4">
      <thead>
        <tr className="bg-gray-300">
          <th className="p-2">Symbol</th>
          <th className="p-2">Quantity</th>
          <th className="p-2">Buy Price</th>
          <th className="p-2">Total Value</th>
        </tr>
      </thead>
      <tbody>
        {portfolio.map((stock, i) => (
          <tr key={i} className="border-t">
            <td className="p-2">{stock.symbol}</td>
            <td className="p-2">{stock.quantity}</td>
            <td className="p-2">${stock.avg_price}</td>
            <td className="p-2">
              ${(stock.quantity * stock.avg_price).toFixed(2)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PortfolioTable;
