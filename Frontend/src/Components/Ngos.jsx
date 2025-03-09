import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

const Ngos = () => {
  const [ngos, setNgos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [minMembers, setMinMembers] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/ngos")
      .then((res) => res.json())
      .then((data) => setNgos(data))
      .catch((err) => console.error(err));
  }, []);

  const filteredNgos = ngos.filter(
    (ngo) =>
      (ngo.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ngo.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (!minMembers || ngo.members >= minMembers)
  );

  return (
    <div className="pt-16">
      <header className="bg-gradient-to-r from-green-700 to-green-500 fixed w-full top-0 z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-white text-2xl font-bold">NGO Directory</h1>
        </div>
      </header>

      <div className="container mx-auto mt-20 p-4">
        <h2 className="text-4xl font-bold text-green-800 text-center">Find NGOs Helping Communities!</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
          <div className="flex items-center border rounded-lg shadow-md p-3 w-full md:w-1/2">
            <FaSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search by name or location"
              className="w-full px-3 py-2 outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center border rounded-lg shadow-md p-3 w-full md:w-1/4">
            <span className="text-gray-500">Min Members:</span>
            <input
              type="number"
              placeholder="Min Members"
              className="w-full px-3 py-2 outline-none"
              value={minMembers}
              onChange={(e) => setMinMembers(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
        {filteredNgos.map((ngo) => (
          <div key={ngo._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={ngo.ngoImage} alt={ngo.name} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-green-700 mt-3">{ngo.name}</h3>
              <p className="text-gray-600">Location: {ngo.location}</p>
              <p className="text-gray-800 font-semibold">Members: {ngo.members}</p>
              <p className="text-gray-600">Contact: {ngo.contactNumber}</p>
              <div className="flex justify-between mt-4">
                <a href={ngo.mapLink} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">View on Map</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <footer className="bg-gradient-to-r from-green-700 to-green-500 text-white py-10 text-center mt-10">
        <p>&copy; 2025 NGO Directory | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Ngos;
