import React from "react";
import './OurTeam.scss'
import MemberCard from "../../MemberCard/MemberCard";
import image3 from "../../../assets/images/3.jpg";
import image4 from "../../../assets/images/4.jpg";
import image5 from "../../../assets/images/5.jpg";
<<<<<<< HEAD
=======
import image6 from "../../../assets/images/6.jpg";
>>>>>>> 8e28f0b407a25b7122303b83c3a5f28aa3de6d59
import image9 from "../../../assets/images/9.jpg";
import image10 from "../../../assets/images/10.jpg";
import image11 from "../../../assets/images/11.jpg";
import AboutBanner from "../../AboutBanner";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";

export default function DoctorsPage() {
  return (
    <div>
      {/* Image Banner */}
      <section
        data-aos='zoom-in' id='team' className="team col-12 pt-2 pl-4 relative">
        {/* OverLay */}
        <div id='overlay' className='absolute top-0 left-0 w-full h-full bg-homeOverly opacity-65 px-8 py-16'></div>
        {/* Text Details  */}

        <div
          data-aos='zoom-out'
          className="z-[10]">

          {/* Title */}
          <h1 className="text-[76px] font-headingFont
          font-medium  text-white -mt-4" >
            Our Team
          </h1>

          {/* Link */}
          <div className=" flex items-center justify-center text-white mt-0  font-light">
            <div>
              <Link className="no-underline text-white  text-[17px] mr-2 hover:text-active " to="/">
                Home
              </Link>
            </div>

            <div className="">
              <p className="p-0 m-0 text-[17px]"> /  Team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      < div className="main_section col-12 mt-0 " >
        {/* Title */}
        < div className="content col-12" >
          <span className="col-12 font-semibold">OUR TEAM</span>
          <h1 className="col-12 font-headingFont font-medium -mt-1 mb-5">Experienced Pyschologist</h1>
        </div >
        {/* Content */}
        < div id="" className="grid grid-cols-3 gap-x-1 gap-y-3 " >
          <MemberCard img={image3} name="Mona M. Amer" />
          <MemberCard img={image4} name="Ahmed Okasha" />
          <MemberCard img={image5} name="Rania El Mahdy" />
          <MemberCard img={image9} name="Hala Mamdouh" />
          <MemberCard img={image10} name="Nabil El-Quadi" />
          <MemberCard img={image11} name="Hala Mamdouh" />
        </div >

      </div >

      <AboutBanner />

      <Footer />
    </div >

  );
}
