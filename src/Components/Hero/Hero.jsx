<<<<<<< HEAD
import React from "react";
=======
import React, { useEffect } from "react";
>>>>>>> 8e28f0b407a25b7122303b83c3a5f28aa3de6d59
import "../../App";
import Swal from "sweetalert2";

import { Link } from "react-router-dom";
const Hero = () => {
  const isLogin = localStorage.getItem("isLogin");
  const isLoggedIn = JSON.parse(isLogin);
  return (
    <div id="gpBanner" data-aos="zoom-out" className="relative px-0 py-16">
      {/* OverLay */}
      <div
        id="overlay"
        className="absolute top-0 left-0 w-full h-full bg-homeOverly opacity-65 px-8 py-16"
      ></div>
      {/* Text area */}
      <div className="container mx-auto w-[1400px] pb-28">
        <div className="text-white absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col justify-center items-center gap-4 text-center">
            {/* Title */}
            <div
              data-aos="zoom-in"
              className=" font-headingFont text-8xl font-medium w-[1050px]"
            >
              Conquer depression with our guidance
            </div>
            {/* Content */}
            <div
              data-aos="fade-up"
              data-aos-offset="-100"
              className="font-contentFont text-sm max-w-[900px] mt-2"
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
              className="flex justify-center gap-3 items-center "
            >
              {/* 1st */}

              <div>
                <Link
                  className="no-underline 
                            text-white text-center bg-nav  
                             hover:bg-transparent hover:border-2 hover:border-white p-3  rounded-md text-xl font-contentFont font-light my-auto"
                  onClick={() => {
                    if (isLoggedIn === true) {
                      window.location.href = "/form";
                    } else {
                      Swal.fire({
                        title:
                          "<strong class='text-nav font-headingFont text-4xl'>Join Our Community! </strong >",
                        icon: "warning",
                        iconColor: "#a55950",
                        html: `<p class="font-contentFont text-paragraph">
      
                        You must     <strong class="text-nav px-1 text-2xl font-headingFont"> <a href="/signIn" class='no-underline text-nav hover:text-3xl'>Login</a></strong>  First</p>`,

                        showCloseButton: true,
                        showCancelButton: true,
                        focusConfirm: false,
                        cancelButtonColor: "#8b8b8b",
                        confirmButtonColor: "#a55950",
                        confirmButtonText: `
                      <a href='/signIn' class="p-1 text-white no-underline hover:text-xl duration-300">Login</a>`,
                        confirmButtonAriaLabel: "great!",
                        cancelButtonText: `Cancel`,
                        cancelButtonAriaLabel: "Cancel",
                      });
                      //   footer: '<a href="#">Why do I have this issue?</a>'
                      // window.location.href = "/signIn";
                    }
                    // isLogin === true
                    //   ? (window.location.href = "/form")
                    //   : (window.location.href = "/signIn");
                  }}
                >
                  CONSULTATION
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
                  className=" no-underline text-white bg-transparent hover:bg-white hover:text-navbarColor border-2 hover:border-0 border-white  p-3 rounded-md text-xl font-contentFont font-light"
                >
                  MAKE APPOINTMENT
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
