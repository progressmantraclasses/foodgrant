import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HiveImage from '../../Images/Hive.png'


const SignupPage = () => {
  const navigate = useNavigate();
  const [typingText, setTypingText] = useState("");
  const fullText = "Create Your Account";
  const [PanId, setPanId] = useState("");
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    let index = 0;
    const type = () => {
      if (index < fullText.length) {
        setTypingText(fullText.substring(0, index + 1));
        index++;
        setTimeout(type, 60);
      }
    };
    type();
  }, []);

  const handleNameChange = (event) => {
    setFullName(event.target.value);
  };

  

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-green-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-3/4 h-44 bg-green-500 opacity-30 blur-3xl z-0"></div>

      {/* Typing Effect Heading */}
      <h1 className="text-white text-4xl md:text-5xl font-black text-center shadow-2xl relative z-10">
        <span>{typingText}</span>
        <span className="animate-blink">|</span>
      </h1>

      {/* Signup Box */}
      <div className="signup-box bg-gray-900 p-8 rounded-2xl shadow-2xl w-96 relative transition mt-12 transform hover:scale-105">
        <form>
          <label className="block text-gray-400 text-sm mb-1">Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            required
            value={fullName}
            onChange={handleNameChange}
            className="w-full p-3 mb-3 bg-gray-700 text-white rounded-full border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />

          <label className="block text-gray-400 text-sm mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="w-full p-3 mb-3 bg-gray-700 text-white rounded-full border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />

          <label className="block text-gray-400 text-sm mb-1">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            required
            className="w-full p-3 mb-3 bg-gray-700 text-white rounded-full border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />

          

          <div className="flex items-center gap-x-2 text-gray-400 text-sm mb-4">
            <input type="checkbox" className="w-4 h-4" required />
            <span>
              I agree to the <a href="#" className="text-green-400 hover:underline">Terms & Conditions</a>
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-full transition font-semibold mb-2"
          >
            Sign Up
          </button>
        </form>

        {/* Signup with Google */}
        <button
          className="w-full bg-white text-black flex items-center justify-center py-3 rounded-full hover:bg-gray-200 transition shadow-md"
        >
          <img src={HiveImage} className="w-6 h-6 mr-2" alt="Google Logo" />
          Sign Up with HIVE
        </button>

        <div className="text-center text-gray-400 mt-4 text-sm">
          Already have an account? <a href="/login" className="text-white hover:underline">Log In</a>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;