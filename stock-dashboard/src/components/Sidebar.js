import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 bg-gray-200 h-screen p-4">
      <ul className="space-y-3">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/orders">Orders</Link></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
