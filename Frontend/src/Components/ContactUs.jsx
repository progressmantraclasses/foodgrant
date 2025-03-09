import { useState } from 'react';
import axios from 'axios';
import { FaSeedling, FaUtensils, FaHandsHelping, FaRecycle, FaTruck, FaChartLine, FaShieldAlt, FaUsers, FaClock, FaMapMarkedAlt, FaEnvelope, FaPhone, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGlobe, FaInfoCircle, FaArrowRight, FaBuilding } from "react-icons/fa";


export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: '',
    profession: '',
    subject: '',
    message: '',
    phone: '',
    email: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/contact', formData);
      setSubmitted(true);
      setFormData({ fullName: '', profession: '', subject: '', message: '', phone: '', email: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Try again!');
    }
  };

  return (
    <div className="pt-16">
    <div className="min-h-screen bg-green-200 flex flex-col items-center p-6">
    <header className="bg-gradient-to-r from-green-700 to-green-500 fixed w-full top-0 z-50 shadow-lg">
    <div className="bg-green-600 container mx-auto flex justify-between items-center py-4 px-6">
      <h1 className="text-white text-2xl font-bold">FoodGrant</h1>
      <nav className="hidden md:flex space-x-6 text-white">
        <a href="#home" className="hover:underline">Home</a>
        <a href="/features" className="hover:underline">Features</a>
        <a href="#how-it-works" className="hover:underline">How It Works</a>
        <a href="#impact" className="hover:underline">Impact</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </nav>
      <button className="bg-white text-green-600 px-4 py-2 rounded-full font-semibold">Get Started</button>
    </div>
  </header>
      <h1 className="text-5xl font-bold text-green-800 mt-6">Contact Us</h1>
      <h2 className="text-2xl font-semibold mt-4 text-green-800">Let us know how we can help you</h2>
      {submitted ? (
        <p className="text-green-700 font-semibold mt-4">Your form is submitted. We will contact you soon!</p>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg mt-6">
          <label className="block font-semibold text-green-700">Full Name</label>
          <input type="text" name="fullName" placeholder="Enter Full Name" className="input-field" value={formData.fullName} onChange={handleChange} required />
          
          <label className="block font-semibold text-green-700">Profession</label>
          <input type="text" name="profession" placeholder="Enter Profession" className="input-field" value={formData.profession} onChange={handleChange} required />
          
          <label className="block font-semibold text-green-700">Subject</label>
          <input type="text" name="subject" placeholder="Enter Subject" className="input-field" value={formData.subject} onChange={handleChange} required />
          
          <label className="block font-semibold text-green-700">Message</label>
          <textarea name="message" placeholder="Enter Message" className="input-field h-24" value={formData.message} onChange={handleChange} required></textarea>
          
          <label className="block font-semibold text-green-700">Phone Number</label>
          <input type="tel" name="phone" placeholder="Enter Phone Number" className="input-field" value={formData.phone} onChange={handleChange} required />
          
          <label className="block font-semibold text-green-700">Email Address</label>
          <input type="email" name="email" placeholder="Enter Email Address" className="input-field" value={formData.email} onChange={handleChange} required />
          
          <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 w-full mt-4">Submit</button>
        </form>
      )}
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
}

const styles = `
  .input-field {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;

document.head.insertAdjacentHTML('beforeend', `<style>${styles}</style>`);
