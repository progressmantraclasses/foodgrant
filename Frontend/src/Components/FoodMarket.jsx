import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { FaSeedling, FaUtensils, FaHandsHelping, FaRecycle, FaTruck, FaChartLine, FaShieldAlt, FaUsers, FaClock, FaMapMarkedAlt, FaEnvelope, FaPhone, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGlobe, FaInfoCircle, FaArrowRight, FaBuilding } from "react-icons/fa";


const FoodMarket = () => {
  const [foods, setFoods] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/businesses")
      .then((res) => res.json())
      .then((data) => setFoods(data))
      .catch((err) => console.error(err));
  }, []);

  const filteredFoods = foods.filter((food) =>
    (food.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      food.location.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (!maxPrice || food.price <= maxPrice)
  );

  return (
    <div className="pt-16">
      <header className="bg-gradient-to-r from-green-700 to-green-500 fixed w-full top-0 z-50 shadow-lg">
    <div className="container mx-auto flex justify-between items-center py-4 px-6">
      <h1 className="text-white text-2xl font-bold">FoodGrant</h1>
      <nav className="hidden md:flex space-x-6 text-white">
        <a href="/">Home</a>
        <a href="/features">Features</a>
        <a href="#how-it-works">How It Works</a>
        <a href="#impact">Impact</a>
        <a href="#contact">Contact</a>
      </nav>
      <button className="bg-yellow-400 text-green-800 px-4 py-2 rounded-full font-semibold hover:bg-yellow-500 transition-all">
        Get Started
      </button>
    </div>
  </header>

      <div className="container mx-auto mt-20 px-6">
        <h2 className="text-4xl font-bold text-green-800 text-center">Buy Delicious Dishes at the Lowest Price!</h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
          <div className="flex items-center border rounded-lg shadow-md p-3 w-full md:w-1/2">
            <FaSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search food or location"
              className="w-full px-3 py-2 outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center border rounded-lg shadow-md p-3 w-full md:w-1/4">
            <span className="text-gray-500">Under  </span>
            <input
              type="number"
              placeholder="₹ Price"
              className="w-full px-3 py-2 outline-none"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-4">
        {filteredFoods.map((food) => (
          <div key={food._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={food.foodImage} alt={food.foodName} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-green-700 mt-3">{food.foodName}</h3>
              <p className="text-gray-600">{food.location}</p>
              <p className="text-gray-800 font-semibold">Price: ₹{food.price}</p>
              <p className="text-gray-600">Contact: {food.contactNumber}</p>
              <div className="flex justify-between mt-4">
                <a href={food.mapLink} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">View on Map</a>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
       <footer className="bg-gradient-to-r from-green-700 to-green-500 text-white py-10">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-xl font-bold flex items-center justify-center md:justify-start"><FaInfoCircle className="mr-2" /> About FoodGrant</h3>
              <p className="mt-2 text-sm">We aim to reduce food waste by connecting donors, NGOs, and businesses to ensure surplus food reaches those in need. Our platform promotes sustainability and food security worldwide.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold flex items-center justify-center md:justify-start"><FaEnvelope className="mr-2" /> Contact Us</h3>
              <p className="mt-2 flex items-center justify-center md:justify-start"><FaEnvelope className="mr-2" /> contact@foodgrant.com</p>
              <p className="mt-2 flex items-center justify-center md:justify-start"><FaPhone className="mr-2" /> +1 234 567 890</p>
              <p className="mt-2 flex items-center justify-center md:justify-start"><FaGlobe className="mr-2" /> www.foodgrant.com</p>
            </div>
            <div>
              <h3 className="text-xl font-bold flex items-center justify-center md:justify-start"><FaUsers className="mr-2" /> Follow Us</h3>
              <div className="flex justify-center md:justify-start space-x-4 mt-2">
                <a href="#" className="hover:text-gray-300"><FaFacebook size={24} /></a>
                <a href="#" className="hover:text-gray-300"><FaTwitter size={24} /></a>
                <a href="#" className="hover:text-gray-300"><FaInstagram size={24} /></a>
                <a href="#" className="hover:text-gray-300"><FaLinkedin size={24} /></a>
              </div>
            </div>
          </div>
          <div className="text-center mt-6 text-sm border-t border-gray-400 pt-4">&copy; 2025 FoodGrant | All Rights Reserved | <a href="#" className="underline">Privacy Policy</a> | <a href="#" className="underline">Terms of Service</a></div>
        </footer>
    </div>
  );
};

export default FoodMarket;
