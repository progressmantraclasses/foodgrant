import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import FeaturesPage from "./Components/FeaturesPage";
import FoodWasteForm from "./Components/FoodWasteForm";
import FoodMarket from "./Components/FoodMarket";
import NgoListing from "./Components/NgoListing";
import Farmers from "./Components/Farmers";
import ContactUs from "./Components/ContactUs";
import AdminMessages from "./Components/AdminMessages";
import Retail from "./Components/Retail";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <div className="">
     
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/features' element={<FeaturesPage/>}/>
            <Route path='/forms' element={<FoodWasteForm/>}/>
            <Route path='/food' element={<FoodMarket/>}/>
            <Route path='/ngo' element={<NgoListing/>}/>
            <Route path='/farmers' element={<Farmers/>}/>
            <Route path='/contact' element={<ContactUs/>}/>    
            <Route path='/admin' element={<AdminMessages/>}/>    
            <Route path='/retail' element={<Retail/>}/>  
            <Route path='/dashboard' element={<Dashboard/>}/> 
          
        </Routes>
     
      </BrowserRouter>
    </div>
  );
}

export default App;
