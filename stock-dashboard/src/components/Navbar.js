function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Stock Dashboard</h1>
      <div>
        <button className="bg-red-500 px-3 py-1 rounded">Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;
