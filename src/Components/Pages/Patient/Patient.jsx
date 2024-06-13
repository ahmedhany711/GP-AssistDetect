import React from "react";
<<<<<<< HEAD
=======
import PatientNav from "../../Nav/Patient/PatientNav";
>>>>>>> 8e28f0b407a25b7122303b83c3a5f28aa3de6d59
import PatientHero from "../../Hero/PatientHero";
import Footer from "../../Footer/Footer";
import Services from "../../Services/Services";
import WhyChooseUs from "../../WhyChooseUs/WhyChooseUs";
import HowItWorks from "../../HowItWorks/HowItWorks";
import PatientLanding from "./Patient Landing/PatientLanding";
import Overview from "./Patient Landing/Overview";
import Testimonials from "../../Testimonials/Testimonials";

export default function Patient(showNav) {
  return (
    <div>
      {/* {showNav && <PatientNav />} */}
      <PatientHero />
      <PatientLanding />
      <Overview showFaq={false} />
      <Services />
      <div className="bg-light py-6">
        <WhyChooseUs />
      </div>
      <HowItWorks />
      <Testimonials />
      <Footer />
    </div>
  );
}
