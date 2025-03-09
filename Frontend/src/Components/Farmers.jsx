import React, { useState, useEffect } from "react";

const Farmers = () => {
  const [farmers, setFarmers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  // Fetch farmers data from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/farmers") // Adjust backend URL
      .then((res) => res.json())
      .then((data) => setFarmers(data))
      .catch((err) => console.error("Error fetching farmers:", err));
  }, []);

  // Filtered farmers list
  const filteredFarmers = farmers.filter((farmer) =>
    farmer.itemName.toLowerCase().includes(searchQuery.toLowerCase()) &&
    farmer.location.toLowerCase().includes(locationFilter.toLowerCase())
  );

  return (
    <div className="bg-green-50 min-h-screen">
      {/* Navbar */}
      <nav className="bg-green-700 text-white py-4 px-6 shadow-md">
     
    <div className="container mx-auto flex justify-between items-center py-4 px-6">
      <h1 className="text-white text-2xl font-bold">FoodGrant</h1>
      <nav className="hidden md:flex space-x-6 text-white">
        <a href="/" className="hover:underline">Home</a>
        <a href="/features" className="hover:underline">Features</a>
        <a href="/forms" className="hover:underline">How It Works</a>
        <a href="/food" className="hover:underline">Buy a meal</a>
        <a href="/admin" className="hover:underline">Dashboard</a>
        <a href="/contact" className="hover:underline">Contact</a>
      </nav>
      <button className="bg-white text-green-600 px-4 py-2 rounded-full font-semibold">Get Started</button>
    </div>
      </nav>

      {/* Headline */}
      <header className="text-center py-8">
        <h2 className="text-4xl font-bold text-green-800">
          Now you can connect directly with farmers
        </h2>
      </header>

      {/* Search Bar */}
      <div className="flex justify-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search for items..."
          className="w-1/3 p-3 border rounded-lg"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <input
          type="text"
          placeholder="Filter by location..."
          className="w-1/4 p-3 border rounded-lg"
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
        />
      </div>

      {/* Farmers Listing */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFarmers.map((farmer) => (
          <div key={farmer._id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={farmer.itemImage}
              alt={farmer.itemName}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-2xl font-semibold">{farmer.itemName}</h3>
              <p className="text-gray-700">📍 {farmer.location}</p>
              <p className="text-gray-700">📦 Quantity: {farmer.quantity}</p>
              <p className="text-gray-700">💰 Price: ₹{farmer.price}</p>
              <p className="text-gray-700">📞 Contact: {farmer.contactNumber}</p>
              <a
                href={farmer.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 text-center bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
              >
                View on Map
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="bg-green-700 text-white text-center py-6 mt-10">
        <p>&copy; 2025 Farmers Market | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Farmers;
