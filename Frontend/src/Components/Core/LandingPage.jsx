
import Spline from '@splinetool/react-spline';
import TypeWritingEffect from '../../TypeWritingEffect';

const LandingPage = () => {
  return (
    <div id="home" className="min-h-screen bg-gradient-to-b from-black to-indigo-900 flex items-center">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side */}
          <div className="flex flex-col justify-center text-left space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              <span className="text-cyan-600 text-5xl md:text-6xl">Hello!<br /></span>
              Welcome to <span className="text-red-500">HELLO WORLD</span>
            </h1>
            <h3 className="text-2xl md:text-4xl font-bold text-white">
              <TypeWritingEffect />
            </h3>
            <p className="text-lg md:text-xl text-white leading-relaxed max-w-lg">
              Get Live AI token recommendations with real-time blockchain transcation logs and investement history tracking plus Hive Smart Contarcts that auto-invest based on AI insights 🇮🇳🔥       
            </p>
          </div>
          
          {/* Right side */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-lg h-[500px] lg:h-[600px] overflow-hidden">
              <Spline scene="https://prod.spline.design/h3lM35MODGx8V1o4/scene.splinecode" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
