import Typewriter from "typewriter-effect"


const TypeWritingEffect = () => {
  return (
    <div>
        <Typewriter
          options={{
            strings:[
                "HIVE Blockchain based Smart Contracts",
                "Investment Prediction Engine",
                "AI powered Interactive Dashboard for Insights",                
            ],
            autoStart:true,
            loop:true,
            deleteSpeed:50
          }}
        />
        
    </div>
  )
}

export default TypeWritingEffect