import React from "react";
import Navbar from "./Component/Navbar";
import HeroSection from "./Component/HeroSection";
import PrevData from "./Component/PrevData";
import Programs from "./Component/Programs";
import Footer from "./Component/Footer";
import Testimonial from "./Component/Testimonial";
import CadeStudy from "./Component/CadeStudy";
import LearnFromBest from "./Component/Learn";
import Faq from "./Component/Faq";
import WhyChooseUs from "./Component/WhyChooseUs";
import PrevResult from "./Component/Result";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <PrevData />
      <PrevResult />
      <WhyChooseUs />
      <Programs />
      <CadeStudy />
      <Testimonial />
      <LearnFromBest />
      <Faq />
      <Footer />
    </div>
  );
};

export default App;
