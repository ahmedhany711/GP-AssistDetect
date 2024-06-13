import React from "react";
import "../../../App.scss";
import { Route, Routes } from "react-router-dom";
import Hero from "../../Hero/Hero";
import Landing from "../../Landing/Landing";
import Footer from "../../Footer/Footer";
import WhoWeAre from "../../WhoWeAre/WhoWeAre";
import WhyChooseUs from "../../WhyChooseUs/WhyChooseUs";
import Services from "../../Services/Services";
import AboutBanner from "../../AboutBanner";
import HowItWorks from "../../HowItWorks/HowItWorks";
<<<<<<< HEAD
=======
import Nav from "../../Nav/Nav";
>>>>>>> 8e28f0b407a25b7122303b83c3a5f28aa3de6d59

const Home = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Hero />
            <Landing />
            <WhoWeAre showButton={true} />
            <div className="bg-light py-3 my-1">
              <WhyChooseUs />
            </div>
            <Services />

            <AboutBanner />
            <HowItWorks />
            <Footer />
          </>
        }
      ></Route>
    </Routes>
  );
};

export default Home;
