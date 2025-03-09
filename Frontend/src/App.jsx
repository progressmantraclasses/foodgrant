import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import FeaturesPage from "./Components/FeaturesPage";
import FoodWasteForm from "./Components/FoodWasteForm";
import FoodMarket from "./Components/FoodMarket";
import Ngos from "./Components/Ngos";

function App() {
  return (
    <div className="">
     
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/features' element={<FeaturesPage/>}/>
            <Route path='/forms' element={<FoodWasteForm/>}/>
            <Route path='/food' element={<FoodMarket/>}/>
            <Route path='/ngo' element={<Ngos/>}/>
        </Routes>
     
      </BrowserRouter>
    </div>
  );
}

export default App;
