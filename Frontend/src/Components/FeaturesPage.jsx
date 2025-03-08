import React from "react";
import { FaSeedling, FaUtensils, FaHandsHelping, FaRecycle, FaTruck, FaChartLine, FaShieldAlt, FaUsers, FaClock, FaMapMarkedAlt, FaEnvelope, FaPhone, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGlobe, FaInfoCircle, FaArrowRight, FaBuilding } from "react-icons/fa";

const Header = () => (
  <header className="bg-gradient-to-r from-green-700 to-green-500 fixed w-full top-0 z-50 shadow-lg">
    <div className="container mx-auto flex justify-between items-center py-4 px-6">
      <h1 className="text-white text-2xl font-bold">FoodGrant</h1>
      <nav className="hidden md:flex space-x-6 text-white">
        <a href="/" className="hover:underline">Home</a>
        <a href="/features" className="hover:underline">Features</a>
        <a href="#how-it-works" className="hover:underline">How It Works</a>
        <a href="#impact" className="hover:underline">Impact</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </nav>
      <button className="bg-yellow-400 text-green-800 px-4 py-2 rounded-full font-semibold hover:bg-yellow-500 transition-all">Get Started</button>
    </div>
  </header>
);

const FeaturesPage = () => (
  <div className="pt-16">
    <Header />
    <section className="py-16 text-center bg-gradient-to-b from-gray-100 to-white">
      <h2 className="text-4xl font-bold text-green-800">Explore Our Features</h2>
      <div className="mt-8 flex flex-wrap justify-center space-x-4">
        <FeatureButton icon={<FaSeedling />} text="See All Crops from Farmers" />
        <FeatureButton icon={<FaUtensils />} text="Order Yummy Foods" />
        <FeatureButton icon={<FaHandsHelping />} text="Find Nearby NGOs" />
      </div>
    </section>

    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold text-green-800">Our Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 max-w-6xl mx-auto">
        <FeatureCard icon={<FaSeedling />} title="See All Crops from Farmers" description="Explore a wide variety of fresh and organic crops directly from local farmers, ensuring better quality and fair pricing." />
        <FeatureCard icon={<FaUtensils />} title="Order Yummy Foods at Lowest Price" description="Get surplus meals from top restaurants at highly discounted rates, reducing food waste and saving money." />
        <FeatureCard icon={<FaHandsHelping />} title="Find NGOs Near You" description="Locate and connect with NGOs working towards food distribution and hunger relief in your area." />
      </div>
    </section>

    <section className="py-16 text-center bg-green-100">
      <h2 className="text-4xl font-bold text-green-800">Join the Movement</h2>
      <p className="text-lg text-gray-700 mt-4">Be a part of the food rescue revolution!</p>
      <div className="mt-6 flex flex-wrap justify-center space-x-4">
        <FeatureButton icon={<FaHandsHelping />} text="Join as an NGO" />
        <FeatureButton icon={<FaBuilding />} text="List Your Business" />
        <FeatureButton icon={<FaSeedling />} text="Register as a Farmer" />
      </div>
    </section>

    <Footer />
  </div>
);

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
    <div className="text-green-700 text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-green-900">{title}</h3>
    <p className="text-gray-700">{description}</p>
    <button className="mt-4 bg-green-700 text-white px-4 py-2 rounded-full flex items-center justify-center space-x-2 hover:bg-green-800 transition-all">
      <span>Learn More</span> <FaArrowRight />
    </button>
  </div>
);

const FeatureButton = ({ icon, text }) => (
  <button className="bg-green-600 px-6 py-3 flex items-center space-x-2 rounded-full text-white font-bold shadow-md hover:bg-green-700 transition-all">
    {icon} <span>{text}</span>
  </button>
);

const Footer = () => (
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
);

export default FeaturesPage;
