import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeTemplate from "../components/Template/HomeTemplate";
import Home from "../pages/Home";

export default function AppRouter () {
  return (

    <BrowserRouter>
    <Routes>
      <Route element={<HomeTemplate/>}>
        <Route path="/" element={<Home/>}/>
          
        
      </Route>
    </Routes>
    </BrowserRouter>
  );
}