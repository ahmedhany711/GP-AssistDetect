import React from "react";
import logo from "../../photos/ui ux home/FinalLog-removebg-preview.png";
import { FaFacebookF, FaMobileAlt } from "react-icons/fa";
import { FaInstagram, FaLinkedin, FaLocationArrow } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div
      data-aos="zoom-out"
      data-aos-offset={-150}
      className="bg-nav pb-0  pt-28  pl-10  w-full min-h-[550px]"
    >
      <div className="container mx-auto max-w-[1450px] pl-12 pr-10">
        <div className="grid  grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-white items-start gap-10">
          {/* 1st column logo + Social  */}
          <div
            data-aos="zoom-out"
            className=" flex flex-col gap-4 items-start max-w-[400px] mt-0 pt-0 font-contentFont -ml-9"
          >
            {/* Logo + description + Social*/}
            <div className="mt-0 pt-0">
              <img
                src={logo}
                alt="logo"
                className="w-[350px] h-[150px] -mt-11"
              />
            </div>
            <div>
              <p className="text-[17px] pl-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                praesentium suscipit eum animi possimus.{" "}
              </p>
            </div>
            {/* Social */}
            <div>
              <div className="flex gap-2 pl-2 text-nav  justify-center items-center text-center">
                {/* Facebook */}
                <div className="w-12 h-12 rounded-full bg-white text-2xl flex justify-center items-center hover:bg-transparent hover:text-white cursor-pointer group">
                  <a
                    href="https://www.facebook.com/?locale=ar_AR"
                    target="self"
                    className="text-nav hover:text-white"
                    rel="noreferrer"
                  >
                    <FaFacebookF />
                  </a>
                </div>

                {/* Instagram */}
                <div className="w-12 h-12 rounded-full bg-white text-2xl flex justify-center items-center hover:bg-transparent hover:text-white cursor-pointer group">
                  <a
                    href="https://www.instagram.com/?hl=ar"
                    target="self"
                    className="text-nav hover:text-white"
                    rel="noreferrer"
                  >
                    <FaInstagram />
                  </a>
                </div>

                {/* Twitter */}
                <div className="w-12 h-12 rounded-full bg-white text-2xl flex justify-center items-center hover:bg-transparent hover:text-white cursor-pointer group ">
                  <a
                    href="https://twitter.com/?lang=ar"
                    target="self"
                    className="text-nav hover:text-white"
                    rel="noreferrer"
                  >
                    <FaTwitter />
                  </a>
                </div>

                {/* Linkedin */}
                <div className="w-12 h-12 rounded-full bg-white text-2xl flex justify-center items-center hover:bg-transparent hover:text-white cursor-pointer group">
                  <a
                    href="https://www.linkedin.com/"
                    target="self"
                    className="text-nav hover:text-white"
                    rel="noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 2nd column Quick Links  */}
          <div data-aos="fade-up" className="  font-contentFont ">
            <div className="max-w[300px]">
              {/* Title */}
              <div className="border-b-2 w-[270px]">
                <h3 className="font-headingFont pb-2">Quick Links</h3>
              </div>
              {/* List */}
              <div className="grid grid-cols-2">
                {/* Col 1 */}
                <div className=" flex flex-col gap-3 text-xl">
                  {/* Home */}
                  <div className=" flex  gap-2 items-center justify-start mt-4">
                    <FaChevronRight />
                    <a
                      href="/"
                      className="text-xl
                                            text-white no-underline my-1 font-semibold
                                            hover:text-active hover:translate-x-1 duration-300"
                    >
                      Home
                    </a>
                  </div>
                  {/* About */}
                  <div className=" flex  gap-2 items-center justify-start ">
                    <FaChevronRight />
                    <a
                      href="/about"
                      className="text-xl
                                            text-white no-underline my-1 font-semibold
                                            hover:text-active hover:translate-x-1 duration-300"
                    >
                      About Us
                    </a>
                  </div>
                  {/* Services */}
                  <div className=" flex  gap-2 items-center justify-start   ">
                    <FaChevronRight />
                    <a
                      href="/services"
                      className="text-xl
                                            text-white no-underline my-1 font-semibold
                                            hover:text-active hover:translate-x-1 duration-300"
                    >
                      {" "}
                      Services
                    </a>
                  </div>
                  {/* Team */}
                  <div className=" flex  gap-2 items-center justify-start  ">
                    <FaChevronRight />
                    <a
                      href="/team"
                      className="text-xl
                                            text-white no-underline  font-semibold
                                            hover:text-active hover:translate-x-1 duration-300"
                    >
                      {" "}
                      Team
                    </a>
                  </div>
                </div>
                {/* Col 2 */}
                <div className="flex flex-col gap-3 text-xl">
                  <div className=" flex  gap-2 items-center justify-start mt-4   ">
                    <FaChevronRight />
                    <a
                      href="/contact"
                      className="text-xl
                                            text-white no-underline my-1 font-semibold
                                            hover:text-active hover:translate-x-1 duration-300"
                    >
                      Contact Us
                    </a>
                  </div>
                  {/* Profile */}
                  <div className=" flex  gap-2 items-center justify-start   ">
                    <FaChevronRight />
                    <a
                      href="/profile"
                      className="text-xl
                                            text-white no-underline my-1 font-semibold
                                            hover:text-active hover:translate-x-1 duration-300"
                    >
                      Profile
                    </a>
                  </div>
                  {/* FAQ */}
                  <div className=" flex  gap-2 items-center justify-start   ">
                    <FaChevronRight />
                    <a
                      href="/faq"
                      className="text-xl
                                            text-white no-underline my-1 font-semibold
                                            hover:text-active hover:translate-x-1 duration-300"
                    >
                      FAQ
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3rd column  Services*/}
          <div data-aos="fade-up" className=" font-contentFont">
            <div className="max-w-[400px]">
              {/* Title */}
              <div className="border-b-2 w-[150px]">
                <h3 className="font-headingFont pb-2">Services</h3>
              </div>
              {/* List */}
              <div className=" flex flex-col gap-3 text-xl">
                <div className=" flex  gap-2 items-center justify-start  mt-4 ">
                  <FaChevronRight />
                  <a
                    href="/Individual"
                    className="text-xl
                                            text-white no-underline  font-semibold
                                            hover:text-active hover:translate-x-1 duration-300"
                  >
                    Depression detection
                  </a>
                </div>
                <div className=" flex  gap-2 items-center justify-start ">
                  <FaChevronRight />
                  <a
                    href="/Couple"
                    className="text-xl
                                            text-white no-underline my-1 font-semibold
                                            hover:text-active hover:translate-x-1 duration-300"
                  >
                    Suggesting associations to help{" "}
                  </a>
                </div>
                <div className=" flex  gap-2 items-center justify-start   ">
                  <FaChevronRight />
                  <a
                    href="/Family"
                    className="text-xl
                                            text-white no-underline my-1 font-semibold
                                            hover:text-active hover:translate-x-1 duration-300"
                  >
                    {" "}
                    Meet with Doctor
                  </a>
                </div>
                <div className=" flex  gap-2 items-center justify-start   ">
                  <FaChevronRight />
                  <a
                    href="/Career"
                    className="text-xl
                                            text-white no-underline my-1 font-semibold
                                            hover:text-active hover:translate-x-1 duration-300"
                  >
                    Career Counseling Us
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 4 column  Services*/}
          <div
            data-aos="fade-up"
            className="pl-3 flex justify-end font-contentFont"
          >
            <div className="max-w-[300px]">
              {/* Title */}
              <div className="border-b-2 w-[200px]">
                <h3 className="font-headingFont pb-2">Get In Touch</h3>
              </div>
              {/* Location */}
              <div className="flex flex-row gap-2 items-center  my-4">
                <FaLocationArrow className="text-4xl " />
                <h5 className="mt-2 font-bold text-xl ">Cairo , Egypt</h5>
              </div>

              {/* Phone Number */}
              <div className="flex flex-row gap-2 items-center -mt-4 ">
                <FaMobileAlt className="text-4xl " />
                <p className="pt-3 font-bold text-xl ">+91 123 456 8799</p>
              </div>

              {/* Email */}
              <div className="flex flex-row gap-2 items-center  my-3  text-wrap">
                <MdOutlineEmail className="text-4xl text-white" />
                <p className="pt-3 font-bold text-[16px] text-wrap max-w[50px] ">
                  Assistdetect@domainsite.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
