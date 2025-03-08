import { useState } from "react";

export default function FoodWasteForm() {
  const [category, setCategory] = useState("hotel");
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    foodName: "",
    quantity: "",
    pickupTime: "",
    ngoPreference: "",
    expiryTime: "",
    discountedPrice: "",
    image: "",
    location: "",
    price: ""
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "number" && value < 0) return;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: "",
      contact: "",
      email: "",
      foodName: "",
      quantity: "",
      pickupTime: "",
      ngoPreference: "",
      expiryTime: "",
      discountedPrice: "",
      image: "",
      location: "",
      price: ""
    });
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-gradient-to-r from-green-400 to-green-700 text-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Food Waste Management</h2>
      <label className="block mb-2 font-semibold">Select Category:</label>
      <select
        className="w-full p-2 border rounded mb-4 text-black"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="hotel">Hotel → NGO</option>
        <option value="restaurant">Restaurant → Customers</option>
        <option value="farmer">Farmer → Retailers</option>
      </select>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {category === "hotel" && (
          <>
            <input type="text" name="name" placeholder="Hotel Name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded text-black" required />
            <input type="tel" name="contact" placeholder="Contact Number" value={formData.contact} onChange={handleChange} className="w-full p-2 border rounded text-black" required />
            <input type="email" name="email" placeholder="Email ID" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded text-black" required />
            <input type="text" name="foodName" placeholder="Food Name" value={formData.foodName} onChange={handleChange} className="w-full p-2 border rounded text-black" required />
            <input type="number" name="quantity" placeholder="Quantity (kg)" value={formData.quantity} onChange={handleChange} className="w-full p-2 border rounded text-black" required min="0" />
            <input type="time" name="pickupTime" placeholder="Pickup Time" value={formData.pickupTime} onChange={handleChange} className="w-full p-2 border rounded text-black" required />
            <select name="ngoPreference" value={formData.ngoPreference} onChange={handleChange} className="w-full p-2 border rounded text-black" required>
              <option value="">Select NGO</option>
              <option value="ngo1">NGO 1</option>
              <option value="ngo2">NGO 2</option>
            </select>
          </>
        )}
        {category === "restaurant" && (
          <>
            <input type="text" name="foodName" placeholder="Food Name" value={formData.foodName} onChange={handleChange} className="w-full p-2 border rounded text-black" required />
            <input type="time" name="expiryTime" placeholder="Expiry Time" value={formData.expiryTime} onChange={handleChange} className="w-full p-2 border rounded text-black" required />
            <input type="number" name="discountedPrice" placeholder="Discounted Price" value={formData.discountedPrice} onChange={handleChange} className="w-full p-2 border rounded text-black" required min="0" />
            <input type="file" name="image" onChange={handleChange} className="w-full p-2 border rounded text-black" required />
            <input type="number" name="quantity" placeholder="Quantity" value={formData.quantity} onChange={handleChange} className="w-full p-2 border rounded text-black" required min="0" />
            <input type="text" name="name" placeholder="Restaurant Name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded text-black" required />
          </>
        )}
        {category === "farmer" && (
          <>
            <input type="text" name="name" placeholder="Farmer Name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded text-black" required />
            <input type="tel" name="contact" placeholder="Contact Number" value={formData.contact} onChange={handleChange} className="w-full p-2 border rounded text-black" required />
            <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} className="w-full p-2 border rounded text-black" required />
            <input type="number" name="quantity" placeholder="Quantity" value={formData.quantity} onChange={handleChange} className="w-full p-2 border rounded text-black" required min="0" />
            <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} className="w-full p-2 border rounded text-black" required min="0" />
          </>
        )}
        <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white p-2 rounded font-semibold">Submit</button>
      </form>
    </div>
  );
}