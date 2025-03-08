import React from "react";
import { FaUtensils, FaRecycle, FaTruck, FaChartLine, FaShieldAlt, FaUsers, FaClock, FaMapMarkedAlt, FaHandsHelping, FaBuilding, FaSeedling } from "react-icons/fa";

const Header = () => (
  <header className="bg-green-600 fixed w-full z-50 shadow-lg">
    <div className="container mx-auto flex justify-between items-center py-4 px-6">
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
);

const HeroSection = () => (
  <section id="home" className="h-screen flex flex-col justify-center items-center bg-cover bg-center text-center text-white" style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2014/06/11/17/00/food-366875_1280.jpg')" }}>
    <h2 className="text-4xl md:text-6xl font-bold mb-4">A Smarter Way to Reduce Food Waste & Help Communities!</h2>
    <p className="text-lg md:text-xl max-w-2xl">Discover how our platform connects event organizers, NGOs, restaurants, retailers, and farmers to minimize food waste and maximize impact.</p>
    <div className="mt-6 space-x-4">
      <button className="bg-green-600 px-6 py-3 rounded-full text-white font-bold shadow-md">Join as a Donor</button>
      <button className="bg-blue-500 px-6 py-3 rounded-full text-white font-bold shadow-md">Buy Food at Lowest Price</button>
      <button className="bg-red-500 px-6 py-3 rounded-full text-white font-bold shadow-md">Sell Your Surplus Items</button>
    </div>
  </section>
);

const JoinMovement = () => (
  <section className="py-16 bg-green-100 text-center">
    <h2 className="text-4xl font-bold text-green-700">Join the Movement</h2>
    <p className="text-lg text-gray-700 mt-4">Be a part of the food rescue revolution!</p>
    <div className="mt-6 flex justify-center space-x-4">
      <button className="bg-green-600 px-6 py-3 flex items-center space-x-2 rounded-full text-white font-bold shadow-md hover:bg-green-700 transition-all">
        <FaHandsHelping /> <span>Join as an NGO</span>
      </button>
      <button className="bg-blue-500 px-6 py-3 flex items-center space-x-2 rounded-full text-white font-bold shadow-md hover:bg-blue-600 transition-all">
        <FaBuilding /> <span>List Your Business</span>
      </button>
      <button className="bg-yellow-500 px-6 py-3 flex items-center space-x-2 rounded-full text-white font-bold shadow-md hover:bg-yellow-600 transition-all">
        <FaSeedling /> <span>Register as a Farmer</span>
      </button>
    </div>
  </section>
);

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
    <div className="text-green-600 text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FeaturesSection = () => (
  <section id="features" className="py-16 bg-gray-100">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold text-green-700">Our Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
        <FeatureCard icon={<FaClock />} title="Real-Time Food Matching" description="List surplus food & get matched instantly with NGOs." />
        <FeatureCard icon={<FaTruck />} title="Pickup Scheduling" description="Event organizers & restaurants can schedule pickups." />
        <FeatureCard icon={<FaUtensils />} title="Surplus Meal Marketplace" description="Buy & sell extra meals at discounted rates." />
        <FeatureCard icon={<FaRecycle />} title="Farmers’ Produce Marketplace" description="Sell imperfect but edible produce." />
        <FeatureCard icon={<FaMapMarkedAlt />} title="Live Order Tracking" description="Track donations, food orders & deliveries on a map." />
        <FeatureCard icon={<FaChartLine />} title="AI Demand & Pricing" description="Smart predictions for reducing food wastage." />
        <FeatureCard icon={<FaShieldAlt />} title="Secure Transactions" description="End-to-end payment & donation tracking." />
        <FeatureCard icon={<FaUsers />} title="Community Impact Reports" description="Track your contribution towards reducing food waste." />
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-green-700 text-white py-6 text-center">
    <p>&copy; 2025 FoodGrant | All Rights Reserved</p>
  </footer>
);

const Home = () => (
  <div>
    <Header />
    <HeroSection />
    <FeaturesSection />
    <JoinMovement />
    <Footer />
  </div>
);

export default Home;
