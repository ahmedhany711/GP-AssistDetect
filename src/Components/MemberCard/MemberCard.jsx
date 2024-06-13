import React from "react";
import "./MemberCard.scss";
// get our fontawesome imports

import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";

import { FaFacebookF } from "react-icons/fa";

export default function MemberCard(props) {
  return (
    <>
      <div className=" ">
        <div className="relative">
          <img src={props.img} alt="no" className="p-2 rounded-3xl" />

          <div className="absolute top-[60%] left-0 ml-2 bg-card z-[100] w-[80%] h-[140px] p-3">
            <div className=" col-10 flex flex-col justify-start items-start gap-1 pl-3 text-white">
              {/* Name */}
              <div>
                <h2 className="col-12  m-0 text-2xl ">{props.name}</h2>
              </div>
              {/* Description */}
              <div>
                <p className="col-12">Pyschologist</p>
              </div>

              {/* Social Links */}
              <div>
                <div className="flex gap-2  text-nav  justify-center items-center text-center group">
                  {/* Facebook */}
                  <div className="w-8 h-8 rounded-full bg-white text-3xl flex justify-center items-center hover:bg-transparent hover:text-white cursor-pointer group duration-300  group-hover:border-2  hover:border-white">
                    <a
                      href="https://www.facebook.com/?locale=ar_AR"
                      target="self"
                      className="text-nav group-hover:text-white "
                      rel="noreferrer"
                    >
                      <FaFacebookF className="text-[17px]" />
                    </a>
                  </div>

                  {/* Instagram */}
                  <div className="w-8 h-8 rounded-full bg-white text-3xl flex justify-center items-center hover:bg-transparent hover:text-white cursor-pointer group duration-300  group-hover:border-2  hover:border-white">
                    <a
                      href="https://www.instagram.com/?hl=ar"
                      target="self"
                      className="text-nav hover:text-white"
                      rel="noreferrer"
                    >
                      <FaInstagram className="text-[17px]" />
                    </a>
                  </div>

                  {/* Twitter */}
                  <div className="w-8 h-8 rounded-full bg-white text-3xl flex justify-center items-center hover:bg-transparent hover:text-white cursor-pointer group duration-300  group-hover:border-2  hover:border-white ">
                    <a
                      href="https://twitter.com/?lang=ar"
                      target="self"
                      className="text-nav hover:text-white"
                      rel="noreferrer"
                    >
                      <FaTwitter className="text-[17px]" />
                    </a>
                  </div>

                  {/* Linkedin */}
                  <div className="w-8 h-8 rounded-full bg-white text-3xl flex justify-center items-center hover:bg-transparent hover:text-white cursor-pointer group duration-300  group-hover:border-2  hover:border-white">
                    <a
                      href="https://www.linkedin.com/"
                      target="self"
                      className="text-nav hover:text-white"
                      rel="noreferrer"
                    >
                      <FaLinkedin className="text-[17px]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
