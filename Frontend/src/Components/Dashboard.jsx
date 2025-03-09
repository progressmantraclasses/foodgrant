import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaSearch, FaBox, FaMapMarkerAlt, FaWeightHanging } from "react-icons/fa";

const Dashboard = () => {
  const [wholesalers, setWholesalers] = useState([]);
  const [search, setSearch] = useState({ location: "", itemName: "", quantity: "" });

  useEffect(() => {
    fetchWholesalers();
  }, []);

  const fetchWholesalers = async () => {
    try {
      const response = await axios.get("http://localhost:4000/wholesalers");
      setWholesalers(response.data);
    } catch (error) {
      console.error("Error fetching wholesalers:", error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get("http://localhost:4000/wholesalers", {
        params: search,
      });
      setWholesalers(response.data);
    } catch (error) {
      console.error("Search error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-green-600 text-white p-4 shadow-md">
        <h1 className="text-xl font-bold text-center">Wholesaler Market</h1>
      </nav>

      {/* Search Bar */}
      <div className="max-w-4xl mx-auto mt-6 p-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Search Wholesalers</h2>
        <div className="grid grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Location"
            className="p-2 border rounded"
            value={search.location}
            onChange={(e) => setSearch({ ...search, location: e.target.value })}
          />
          <input
            type="text"
            placeholder="Item Name"
            className="p-2 border rounded"
            value={search.itemName}
            onChange={(e) => setSearch({ ...search, itemName: e.target.value })}
          />
          <input
            type="number"
            placeholder="Min Quantity (kg)"
            className="p-2 border rounded"
            value={search.quantity}
            onChange={(e) => setSearch({ ...search, quantity: e.target.value })}
          />
        </div>
        <button
          className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
          onClick={handleSearch}
        >
          <FaSearch className="inline-block mr-2" /> Search
        </button>
      </div>

      {/* Wholesalers List */}
      <div className="max-w-6xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {wholesalers.length > 0 ? (
          wholesalers.map((wholesaler) => (
            <div key={wholesaler.id} className="bg-white p-4 shadow-md rounded-lg">
              <h3 className="text-lg font-semibold">{wholesaler.wholesalerName}</h3>
              <p className="text-gray-600 flex items-center">
                <FaMapMarkerAlt className="mr-2 text-green-600" /> {wholesaler.location}
              </p>
              <p className="text-gray-600 flex items-center">
                <FaBox className="mr-2 text-blue-600" /> {wholesaler.itemName}
              </p>
              <p className="text-gray-600 flex items-center">
                <FaWeightHanging className="mr-2 text-yellow-600" /> {wholesaler.requirementKgs} kg
              </p>
              <p className="text-gray-600">📞 {wholesaler.contact}</p>
              <p className="text-gray-600">✉️ {wholesaler.email}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-3">No wholesalers found</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
