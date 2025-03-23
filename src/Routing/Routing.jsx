

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// import {Navbar} from "../components/Navbar/Navbar";
import AboutUs from "../pages/AboutUs"
import Buying from "../pages/Buying"
import Selling from "../pages/Selling"
import Home from "../pages/Home"
import Renting from "../pages/Renting";
import ContactUs from '../pages/ContactUs'
import Navbar from "../components/Navbar/Navbar";
function Router() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/buying" element={<Buying />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/selling" element={<Selling />} />
        <Route path="/Renting" element={<Renting />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="*" element={<h1>404 error not found</h1>}/>
      </Routes>
    </BrowserRouter>
  );

}

export default Router;
