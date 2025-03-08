import React, { useState } from "react";
import { FaSeedling, FaUtensils, FaHandsHelping, FaBuilding } from "react-icons/fa";

const Header = () => (
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
);

const JoinMovement = () => {
  const [selectedForm, setSelectedForm] = useState(null);

  return (
    <section className="py-16 text-center bg-green-100">
      <h2 className="text-4xl font-bold text-green-800">Join the Movement</h2>
      <p className="text-lg text-gray-700 mt-4">Be a part of the food rescue revolution!</p>
      <div className="mt-6 flex flex-wrap justify-center space-x-4">
        <button onClick={() => setSelectedForm("ngo")} className="bg-green-600 px-6 py-3 flex items-center space-x-2 rounded-full text-white font-bold hover:bg-green-700 transition-all">
          <FaHandsHelping /> <span>Join as an NGO</span>
        </button>
        <button onClick={() => setSelectedForm("business")} className="bg-blue-600 px-6 py-3 flex items-center space-x-2 rounded-full text-white font-bold hover:bg-blue-700 transition-all">
          <FaBuilding /> <span>List Your Business</span>
        </button>
        <button onClick={() => setSelectedForm("farmer")} className="bg-yellow-500 px-6 py-3 flex items-center space-x-2 rounded-full text-white font-bold hover:bg-yellow-600 transition-all">
          <FaSeedling /> <span>Register as a Farmer</span>
        </button>
      </div>
      {selectedForm === "ngo" && <NgoForm />}
      {selectedForm === "business" && <BusinessForm />}
      {selectedForm === "farmer" && <FarmerForm />}
    </section>
  );
};

const InputField = ({ label, value, onChange, type = "text", ...props }) => (
  <div className="mt-4 flex flex-col text-left">
    <label className="text-gray-800 font-semibold mb-1">{label}</label>
    <input
      className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
      type={type}
      value={value}
      onChange={onChange}
      {...props}
    />
  </div>
);

const FormContainer = ({ title, onSubmit, children }) => (
  <form onSubmit={onSubmit} className="mt-8 p-8 bg-white shadow-lg rounded-lg max-w-lg mx-auto">
    <h3 className="text-2xl font-bold text-center text-green-800 mb-4">{title}</h3>
    {children}
    <button type="submit" className="w-full bg-green-600 text-white px-4 py-3 mt-6 rounded-lg font-semibold shadow-md hover:bg-green-700 transition-all">
      Submit
    </button>
  </form>
);

const NgoForm = () => {
  const [formData, setFormData] = useState({
    ngoId: "",
    name: "",
    contactNumber: "",
    email: "",
    members: "",
    location: "",
    mapLink: "",
    ngoImage: "", // Added field for storing the image URL
  });

  const [imageFile, setImageFile] = useState(null);

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let imageUrl = "";
    if (imageFile) {
      const formDataImage = new FormData();
      formDataImage.append("image", imageFile);

      const uploadResponse = await fetch("http://localhost:5000/api/upload", {
        method: "POST",
        body: formDataImage,
      });

      const result = await uploadResponse.json();
      imageUrl = result.imageUrl; // Assuming backend returns an image URL
    }

    const updatedData = { ...formData, ngoImage: imageUrl };

    await fetch("http://localhost:5000/api/ngos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });

    alert("NGO Registered Successfully!");
  };

  return (
    <FormContainer title="NGO Registration" onSubmit={handleSubmit}>
      {Object.keys(formData).map((key) =>
        key === "ngoImage" ? (
          <InputField key={key} label="Upload NGO Image" type="file" onChange={handleFileChange} />
        ) : (
          <InputField key={key} label={key.replace(/([A-Z])/g, " $1")} value={formData[key]} onChange={(e) => setFormData({ ...formData, [key]: e.target.value })} />
        )
      )}
    </FormContainer>
  );
};


const BusinessForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    foodName: "",
    foodImage: "",
    price: "",
    location: "",
    mapLink: "",
  });

  const [imageFile, setImageFile] = useState(null);

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let imageUrl = "";
    if (imageFile) {
      const formDataImage = new FormData();
      formDataImage.append("image", imageFile);

      const uploadResponse = await fetch("http://localhost:5000/api/upload", {
        method: "POST",
        body: formDataImage,
      });

      const result = await uploadResponse.json();
      imageUrl = result.imageUrl;
    }

    const updatedData = { ...formData, foodImage: imageUrl };

    await fetch("http://localhost:5000/api/businesses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });

    alert("Business Registered Successfully!");
  };

  return (
    <FormContainer title="Restaurant Registration" onSubmit={handleSubmit}>
      {Object.keys(formData).map((key) =>
        key === "foodImage" ? (
          <InputField key={key} label="Upload Food Image" type="file" onChange={handleFileChange} />
        ) : (
          <InputField key={key} label={key.replace(/([A-Z])/g, " $1")} value={formData[key]} onChange={(e) => setFormData({ ...formData, [key]: e.target.value })} />
        )
      )}
    </FormContainer>
  );
};


const FarmerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    location: "",
    quantity: "",
    price: "",
    itemImage: "",
    itemName: "",
    mapLink: "",
  });

  const [imageFile, setImageFile] = useState(null);

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let imageUrl = "";
    if (imageFile) {
      const formDataImage = new FormData();
      formDataImage.append("image", imageFile);

      const uploadResponse = await fetch("http://localhost:5000/api/upload", {
        method: "POST",
        body: formDataImage,
      });

      const result = await uploadResponse.json();
      imageUrl = result.imageUrl; // Assuming the server returns the uploaded image URL
    }

    const updatedData = { ...formData, itemImage: imageUrl };

    await fetch("http://localhost:5000/api/farmers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });

    alert("Farmer Registered Successfully!");
  };

  return (
    <FormContainer title="Farmer Registration" onSubmit={handleSubmit}>
      {Object.keys(formData).map((key) =>
        key === "itemImage" ? (
          <InputField key={key} label="Upload Item Image" type="file" onChange={handleFileChange} />
        ) : (
          <InputField key={key} label={key.replace(/([A-Z])/g, " $1")} value={formData[key]} onChange={(e) => setFormData({ ...formData, [key]: e.target.value })} />
        )
      )}
    </FormContainer>
  );
};


const FoodWasteForm = () => (
  <div className="pt-16">
    <Header />
    <JoinMovement />
    <Footer />
  </div>
);

const Footer = () => (
  <footer className="bg-gradient-to-r from-green-700 to-green-500 text-white py-10 text-center">
    <p>&copy; 2025 FoodGrant | All Rights Reserved</p>
  </footer>
);

export default FoodWasteForm;
