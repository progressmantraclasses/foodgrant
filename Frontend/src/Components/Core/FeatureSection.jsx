
//import imgaes from Images folder
import Single from '../../Images/Single.png'
import Triple from '../../Images/Triple.png'
import Four from '../../Images/Four.png'
import Five from '../../Images/Five.png'


 const  FeatureSection = () => {
  return (
    // <div className="w-full bg-[#1a1b23] py-[10rem] "
    <div className='w-full bg-gradient-to-b from-green-700 to-gray-700'
    style={{
        boxShadow:'0px 4px 24px -1px rgba(0, 0, 0, 0.20)',
        backdropFilter: 'blur(20px)'
    }}>
        <div className="max-w-[700px] mx-auto text-center mb-30">
           <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
             
             <span className="text-red-500">(Investment Prediction Engine).</span>
           </h1>
           <p className="text-slate-300 text-lg md:text-xl">
         
           </p>
        </div>
       
       <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
           {/* first feature  */}
          <div className="w-full bg-[#24252d] border border-purple-500  shadow-lg flex flex-col rounded-xl my-4 p-6 hover:scale-105 duration-300 relative overflow-hidden ">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-purple-400"></div>
           <img 
             className="w-20 h-20 mx-auto mt-2 rounded-full bg-gradient-to-r from-purple-600 to-purple-400 p-3  "
             src={Single}
           />
           <h2 className='text-2xl font-bold text-white text-center py-6'>
             AI Model (Investment Prediction Engine)
           </h2>
           <div className="text-center font-medium text-slate-300">
              <p className='py-3 mx-8 border-b border-red-400 mt-8'>
                 An AI-powered model analyzes Hive Blockchain transactions to predict high-potential Web3 tokens.
              </p>
              <p className='py-3 mx-8 border-b border-red-400'>
              It uses machine learning techniques like LSTMs for time-series predictions, sentiment analysis, and real-time market data.
              </p>
           </div>
           <button className='bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-indigo-500 hover:to-purple-600 transition-all duration-300 mx-auto w-[220px] py-3 mt-8 rounded-full text-white font-bold shadow-lg hover:shadow-xl'>
              Want to Know  More ? 
           </button>
          </div>

          {/* second feature  */}
          
<div className="w-full bg-[#24252d] border border-purple-900  shadow-lg flex flex-col rounded-xl my-4 p-6 hover:scale-105 duration-300 relative overflow-hidden ">
             <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-600 to-purple-400 p-3"></div>
             <img
              className='w-16 h-16 mx-auto mt-2 rounded-full l bg-gradient-to-r from-purple-600 to-purple-400 p-3"'
              src={Triple}
             />
                <h2 className='text-2xl font-bold text-white text-center py-6'>
                 AI Dashboard
                </h2>
                <div className="text-center font-medium text-gray-400">
                  <p className='py-3 mx-8  border-b border-red-400 mt-8'>
                  A React.js-based frontend dashboard visualizes AI predictions, real-time blockchain transactions, and investment history.
                  </p>
                  <p className="py-3 mx-8  border-b border-red-400">
                  It includes Web3 wallet integration and interactive graphs to track AI-driven investment decisions.
                  </p>
                  <button className="bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-indigo-500 hover:to-purple-600 transition-all duration-300 mx-auto w-[220px] py-3 mt-8 rounded-full text-white font-bold shadow-lg hover:shadow-xl">
                    Want to know more ?
                   </button>
                </div>
             </div>

          {/* third feature  */}
           <div className="w-full bg-[#24252d] border border-purple-900  shadow-lg flex flex-col rounded-xl my-4 p-6 hover:scale-105 duration-300 relative overflow-hidden ">
             <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-600 to-purple-400 p-3"></div>
             <img
              className='w-16 h-16 mx-auto mt-2 rounded-full l bg-gradient-to-r from-purple-600 to-purple-400 p-3"'
              src={Triple}
             />
                <h2 className='text-2xl font-bold text-white text-center py-6'>
                  Blockchain (Hive Smart Contracts)
                </h2>
                <div className="text-center font-medium text-gray-400">
                  <p className='py-3 mx-8  border-b border-red-400 mt-8'>
                  The contracts execute transactions when an AI-predicted probability exceeds a threshold, ensuring secure and automated investments.
                  </p>
                  <p className="py-3 mx-8  border-b border-red-400">
                    Hive Smart Contracts automatically invest in tokens based on AI insights.
                  </p>
                  <button className="bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-indigo-500 hover:to-purple-600 transition-all duration-300 mx-auto w-[220px] py-3 mt-8 rounded-full text-white font-bold shadow-lg hover:shadow-xl">
                    Want to know more ?
                   </button>
                </div>
             </div>

             {/* fourth feature  */}
             {/* <div className="w-full bg-[#24252d] border border-purple-900 shadow-lg flex flex-col rounded-xl my-4 p-6 hover:scale-105 duration-300 relative overflow-hidden  ">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-purple-400"></div>
              <img
               className='w-16 h-16 mx-auto mt-2 rounded-full bg-gradient-to-r from-purple-600 to-purple-400 p-3'
               src={Four}
              />
              <h2 className='text-2xl font-bold text-white text-center py-6'>
                 Banking Related
              </h2>
              <div className="text-center font-medium text-gray-400">
                <p className='py-3 mx-8 border-b border-gray-700 mt-8'>
                    Investment in Government Schemes
                </p>
                <p className='py-3 mx-8 border-b border-gray-700'>
                   Post Office Government Bonds <br/>
                   Only for viewing purpose
                </p>
                <button className="bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-indigo-500 hover:to-purple-600 transition-all duration-300 mx-auto w-[220px] py-3 mt-8 rounded-full text-white font-bold shadow-lg hover:shadow-xl">
                    Want to know more ?
                </button>
              </div>
             </div> */}
             {/* fifth feature  */}
             {/* <div className="w-full bg-[#24252d] border border-purple-900 shadow-lg flex flex-col rounded-xl my-4 p-6 hover:scale-105 duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-purple-400"></div>
            <img
              className="w-16 h-16 mx-auto mt-2 rounded-full bg-gradient-to-r from-purple-600 to-purple-400 p-3"
              src={Five}
              alt="/"
            />
            <h2 className="text-2xl font-bold text-white text-center py-6">
              Ai Analytics
            </h2>
            <div className="text-center font-medium text-gray-400">
              <p className="py-3 mx-8 border-b border-gray-700 mt-8">
               Advanced ai powered investement tracking
              </p>
              <p className="py-3 mx-8 border-b border-gray-700">
                Ai driven portfolio insights
              </p>
            </div>
            <button className="bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-indigo-500 hover:to-purple-600 transition-all duration-300 mx-auto w-[220px] py-3 mt-8 rounded-full text-white font-bold shadow-lg hover:shadow-xl">
                    Want to know more ?
            </button>
          </div> */}
       </div>

    </div>
  )
}

export default FeatureSection