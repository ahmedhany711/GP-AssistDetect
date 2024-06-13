import React from "react";
import "./AboutPage.scss";
import { Link } from "react-router-dom";
<<<<<<< HEAD
=======
import image3 from "../../../assets/images/3.jpg";
import image4 from "../../../assets/images/4.jpg";
import image5 from "../../../assets/images/5.jpg";
import image6 from "../../../assets/images/6.jpg";
import image7 from "../../../assets/images/7.jpg";
import account from "../../../assets/images/12.png";
import MemberCard from "../../../Components/MemberCard/MemberCard";
import Progress from "../../../Components/Progress/Progress";
import MyCarousel from "../../../Components/MyCarsouel/MyCarsouel";
import { FaLightbulb } from "react-icons/fa6";
import { FaHandshakeSimple } from "react-icons/fa6";
import { FaBrain } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
>>>>>>> 8e28f0b407a25b7122303b83c3a5f28aa3de6d59
import WhoWeAre from "../../WhoWeAre/WhoWeAre";
import OurTeam from "../../OurTeam/OurTeam";
import WhyChooseUs from "../../WhyChooseUs/WhyChooseUs";
import Services from "../../Services/Services";
import Testimonials from "../../Testimonials/Testimonials";
import AboutBanner from "../../AboutBanner";
import Footer from "../../Footer/Footer";

export default function AboutPage() {
  return (
    <div className="col-12 " id="AboutPage">
      {/* Image Banner */}
      <div className="mt-14 pb-4">
        <section data-aos="zoom-out" className="sec1 col-12 pt-2 pl-4 relative">
          {/* OverLay */}
          <div
            id="overlay"
            className="absolute top-0 left-0 w-full h-full bg-homeOverly/30 opacity-65 px-8 py-16"
          ></div>
          {/* Text Details  */}
          <div className="z-[10]">
            <h1 className="text-[74px] font-headingFont font-light ml-2 ">
              About Us
            </h1>
            <div className=" flex items-center justify-center text-white mt-0  font-light">
              <div>
                <Link
                  className="no-underline text-white  text-[18px] mr-2 hover:text-active "
                  to="/"
                >
                  Home
                </Link>
              </div>
              <div className="">
                <p className="p-0 m-0 text-[18px]"> / About Us</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* OUR TEAM */}
      <div className="py-4">
        <WhoWeAre />
      </div>

      {/* OUR TEAM */}
      <OurTeam />

      {/* Why Choose US */}
      <WhyChooseUs />

      {/* Services */}
      <Services />

      {/* TESTIMONIALS  */}
      <Testimonials />

      {/* About Banner */}
      <AboutBanner />

      {/* Footer */}
      <Footer />
    </div>
  );
}
