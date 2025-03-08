import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import FeaturesPage from "./Components/FeaturesPage";
import FoodWasteForm from "./Components/FoodWasteForm";

function App() {
  return (
    <div className="">
     
      <BrowserRouter>
      FoodWasteForm
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/features' element={<FeaturesPage/>}/>
            <Route path='/forms' element={<FoodWasteForm/>}/>
        </Routes>
     
      </BrowserRouter>
    </div>
  );
}

export default App;
