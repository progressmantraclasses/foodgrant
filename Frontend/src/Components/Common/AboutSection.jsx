import { Briefcase, LineChart, Banknote, Shield } from "lucide-react";

const AboutSection = () => {
  return (
    // <section className="bg-gradient-to-b from-green-700 to-gray-700 py-16 px-6">
      <section className="bg-gradient-to-b from-black to-indigo-900 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-red-400 mb-6">
          Hive AI Auto-Investor: Smart Trading for Web3 Tokens
        </h2>
        <p className="text-lg text-white max-w-3xl mx-auto">
          At <span className="font-semibold text-yellow-600">HELLOWORLD 🇮🇳💡</span>,Hive AI Auto-Investor is an advanced AI-powered bot that analyzes Hive Blockchain transactions in real-time and automatically invests in high-potential Web3 tokens..
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Feature Cards */}
        <FeatureCard
          icon={<Briefcase size={40} className="text-blue-600" />}
          title="AI-Powered Auto-Investing on Hive Blockchain"
          description="Harness the power of AI to automate Web3 investments with real-time blockchain insights. Our intelligent bot scans Hive Blockchain transactions, identifies trending tokens, and predicts their future performance using deep learning models..
          By combining AI-driven analytics with decentralized finance, this platform revolutionizes crypto trading, making investment smarter, faster, and more efficient.
          "
        />
        <FeatureCard
          icon={<LineChart size={40} className="text-green-600" />}
          title="AI-Powered Auto-Investing on Hive Blockchain"
          description="Harness the power of AI to automate Web3 investments with real-time blockchain insights. Our intelligent bot scans Hive Blockchain transactions, identifies trending tokens, and predicts their future performance using deep learning models..
          By combining AI-driven analytics with decentralized finance, this platform revolutionizes crypto trading, making investment smarter, faster, and more efficient.
          "
        />
        <FeatureCard
          icon={<Banknote size={40} className="text-yellow-600" />}
          title="AI-Powered Auto-Investing on Hive Blockchain"
          description="Harness the power of AI to automate Web3 investments with real-time blockchain insights. Our intelligent bot scans Hive Blockchain transactions, identifies trending tokens, and predicts their future performance using deep learning models..
          By combining AI-driven analytics with decentralized finance, this platform revolutionizes crypto trading, making investment smarter, faster, and more efficient.
          "
          />
      </div>

      <div className="text-center mt-12">
        <a
          href="#"
          className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
        >
         This HELLOWORLD platform bridges AI and Web3 to create an innovative, self-learning DeFi trading solution.
        </a>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-indigo-400 shadow-lg rounded-xl p-6 flex flex-col items-center text-center">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-white mt-2">{description}</p>
    </div>
  );
};

export default AboutSection;
 