import React from "react";
import "../../App";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const PatientHero = () => {
  return (
    <div id="gpBanner" data-aos="zoom-out" className="relative px-4 py-16">
      {/* OverLay */}
      <div
        id="overlay"
        className="absolute top-0 left-0 w-full h-full bg-homeOverly opacity-65 px-8 py-16"
      ></div>
      {/* Text area */}
      <div className="container mx-auto  w-full px-4 md:px-8 lg:px-16 xl:px-20 pb-28">
        <div className="text-white absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
          <div className="flex flex-col justify-center items-center gap-4 text-center px-4 md:px-8 lg:px-16">
            {/* Title */}
            <div
              data-aos="zoom-in"
              className="font-headingFont text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold lg:font-medium w-full max-w-[1050px]"
            >
              Conquer depression with our guidance
            </div>
            {/* Content */}
            <div
              data-aos="fade-up"
              data-aos-offset="-100"
              className="font-contentFont text-xs sm:text-sm md:text-base max-w-[900px] mt-2"
            >
              <p data-aos="fade-up" data-aos-offset="-100">
                Explore, overcome, and thrive with our platform. Connect with
                psychologists, receive expert advice, and join a supportive
                community. Access resourceful content for a brighter, healthier
                future.
              </p>
            </div>
            {/* Buttons */}
            <div
              data-aos="fade-up"
              data-aos-offset="-100"
              className="flex flex-col sm:flex-row justify-center gap-10 sm:gap-3 items-center"
            >
              {/* 1st */}
              <div>
                <Link
                  to={"/form"}
                  className=" no-underline text-white bg-transparent hover:bg-white hover:text-navbarColor border-2 hover:border-0 border-white   py-3 px-5 rounded-md text-lg xl:text-xl font-contentFont font-light"
                >
                  DETECT
                </Link>
              </div>

              {/* 2nd */}
              <div>
                <Link
                  onClick={() => {
                    Swal.fire({
                      title:
                        "<strong class='text-nav font-headingFont text-4xl'>Not Available Yet! </strong >",
                      icon: "info",
                      iconColor: "#a55950",
                      html: `<p class="font-contentFont text-paragraph">
      
                        It Will be Available Very <strong>Soon</strong></p>`,

                      showCloseButton: true,

                      focusConfirm: false,

                      confirmButtonColor: "#a55950",
                      confirmButtonText: `
                      <p class="p-1 m-0 text-white no-underline hover:text-2xl  text-xlduration-300">Sorry ! </p>`,
                      confirmButtonAriaLabel: "Sorry !",
                    });
                  }}
                  className=" no-underline text-white bg-transparent hover:bg-white hover:text-navbarColor border-2 hover:border-0 border-white   py-3 px-5 rounded-md text-lg xl:text-xl font-contentFont font-light"
                >
                  MEET
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientHero;
