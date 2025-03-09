import React, { useState } from "react";
import axios from "axios";

const Retail = () => {
  const [formData, setFormData] = useState({
    wholesalerName: "",
    itemName: "",
    contact: "",
    email: "",
    location: "",
    requirementKgs: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/submit", formData);
      alert("Form submitted successfully!");
      console.log(response.data);
      setFormData({ wholesalerName: "", itemName: "", contact: "", email: "", location: "", requirementKgs: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Retailer Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="wholesalerName" placeholder="Wholesaler Name" value={formData.wholesalerName} onChange={handleChange} className="w-full p-2 border rounded"/>
          <input type="text" name="itemName" placeholder="Item Name" value={formData.itemName} onChange={handleChange} className="w-full p-2 border rounded"/>
          <input type="text" name="contact" placeholder="Contact" value={formData.contact} onChange={handleChange} className="w-full p-2 border rounded"/>
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded"/>
          <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} className="w-full p-2 border rounded"/>
          <input type="number" name="requirementKgs" placeholder="Requirement (kg)" value={formData.requirementKgs} onChange={handleChange} className="w-full p-2 border rounded"/>
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Retail;
