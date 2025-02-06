//
import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";

const App = () => {
  return (
    <div className="bg-[#000000] h-screen">
      {/* <div></div> */}
      <NavBar />
      <HeroSection />
    </div>
  );
};

export default App;
