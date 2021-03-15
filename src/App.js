/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./Navbar";
import Masthead from "./Masthead";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import FolioModels from "./FolioModels";

const App = () => {
 return (
     <div>
     <Navbar/>
    <Masthead/>
     <Portfolio/>
     <About/>
     <Contact/>
     <Footer/>
     <FolioModels/> 
     </div>
 )
};

export default App;