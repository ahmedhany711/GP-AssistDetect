import React from "react";
<<<<<<< HEAD
=======
import {
  FaArrowRight,
  FaBrain,
  FaHandshakeSimple,
  FaLightbulb,
} from "react-icons/fa6";
>>>>>>> 8e28f0b407a25b7122303b83c3a5f28aa3de6d59
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
import WhyChooseUs from "../../WhyChooseUs/WhyChooseUs";
import Services from "../Services";
import "./ServicesPage.scss";
import Testimonials from "../../Testimonials/Testimonials";

const ServicesPage = () => {
  return (
    <div className="mt-1" data-aos="zoom-in">
      {/* Image Banner */}
      <section id="service" className="service col-12 pt-2 pl-4 relative">
        {/* OverLay */}
        <div
          id="overlay"
          className="absolute top-0 left-0 w-full h-full bg-homeOverly opacity-60 px-8 py-16"
        ></div>
        {/* Text Details  */}
        <div data-aos="zoom-out" className="z-[10]">
          <h1 className="text-[74px] font-headingFont font-light  text-white -mt-4">
            Services
          </h1>
          <div className=" flex items-center justify-center text-white mt-0  font-light">
            <div>
              <Link
                className="no-underline text-white  text-[17px] mr-2 hover:text-active "
                to="/"
              >
                Home
              </Link>
            </div>
            <div className="">
              <p className="p-0 m-0 text-[17px]"> / Services</p>
            </div>
          </div>
        </div>
      </section>

      {/* WhyChooseUs */}
      <WhyChooseUs />

      {/* Our Services */}

      <Services />
      <div className="bg-light h-[130vh]">
        <Testimonials />
      </div>

      <Footer />
    </div>
  );
};

export default ServicesPage;
