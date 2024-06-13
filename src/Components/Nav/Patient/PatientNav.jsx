import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import logo from "../../../photos/ui ux home/FinalLog-removebg-preview.png";

const PatientNav = () => {
  const menu = [
    { id: 1, name: "Home", link: "/patient" },
    { id: 2, name: "Survey", link: "/form" },
    { id: 3, name: "Blog", link: "/blog" },
    { id: 4, name: "Profile", link: "/profile" },
  ];
  return (
    <>
      <div className="  bg-nav  backdrop-blur-[1px] font-contentFont fixed top-0 left-0 right-0 z-[9999]  shadow-sm ">
        <div className="flex flex-col  top-0 left-0 right-0 z-50 w-full ">
          {/* First Nav */}
          <div className="  items-center  w-full  ">
            <Container className="flex justify-between items-center    py-1 gap-5  ">
              {/* Logo  */}
              <div className="  w-[600px] text-white z-[1]" data-aos="zoom-in">
                <Link to="/" className="flex items-center ">
                  <img
                    src={logo}
                    alt="logo"
                    className="w-full h-full uppercase bg-transparent"
                  />
                </Link>
              </div>

              {/* Links */}
              <div className="flex w-full h-full  py-4  " data-aos="zoom-in">
                <ul className=" list-none flex  sm:flex gap-[5px] md:gap-[1px] items-end   ml-auto  mb-0">
                  {menu.map((data) => {
                    return (
                      <li key={data.id}>
                        <Link
                          to={data.link}
                          onClick={data.onClick}
                          className={`
                                                    ${
                                                      data.id === 1
                                                        ? "text-active  "
                                                        : "text-white hover:text-active"
                                                    }
                                                
                                                    no-underline   px-3   text-2xl
                                                    duration-300 hover:text-active
                                                    inline-block `}
                        >
                          {data.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              {/* Login Button */}

              <div data-aos="zoom-in">
                <Link
                  to="/"
                  onClick={() => {
                    localStorage.setItem("isLogin",false)
                  }}
                  className=" bg-white text-nav px-4 py-2 rounded-md  no-underline text-xl hover:bg-transparent hover:border-2 hover:border-white hover:text-white"
                >
                  Logout
                </Link>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientNav;
