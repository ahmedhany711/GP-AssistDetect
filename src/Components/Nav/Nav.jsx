import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

import logo from "../../photos/ui ux home/FinalLog-removebg-preview.png";

const Nav = ({}) => {
  const menu = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About Us", link: "/about" },
    { id: 2, name: "Services", link: "/services" },
    { id: 3, name: "Contact Us", link: "/contact" },
    { id: 4, name: "FAQ", link: "/faq" },
    { id: 5, name: "Profile", link: "/profile" },
    // { id: 6, name: "logout", link: "/" },
    { id: 7, name: "Survey", link: "/form" },
  ];

  const [activeLink, setActiveLink] = useState(menu[0].id);

  const handleLinkClick = (id) => {
    setActiveLink(id);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const isLogin = JSON.parse(localStorage.getItem("isLogin?")) || false;
    return isLogin;
  });

  useEffect(() => {
    localStorage.setItem("isLogin?", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  // Filter menu items based on authentication and user role
  let filteredMenu = menu.slice(0, 10); // Default to the first 4 links
  if (isLoggedIn === true) {
    filteredMenu = [
      { id: 1, name: "Home", link: "/patient" },
      { id: 2, name: "Survey", link: "/form" },
      { id: 3, name: "Blog", link: "/blog" },
      { id: 4, name: "FAQ", link: "/faq" },
      { id: 5, name: "Profile", link: "/profile" },
      // { id: 5, name: "Logout", link: "/" },
    ];
  } else {
    if (isLoggedIn === false) {
      filteredMenu = [
        { id: 1, name: "Home", link: "/" },
        { id: 2, name: "About Us", link: "/about" },
        { id: 3, name: "Services", link: "/services" },
        { id: 4, name: "Contact Us", link: "/contact" },
        { id: 5, name: "FAQ", link: "/faq" },
      ];
    }
  }
  console.log(isLoggedIn);

  const handleButtons = () => {
    if (isLoggedIn === true) {
      return (
        <div data-aos="zoom-in">
          <Link
            onClick={() => {
              setIsLoggedIn(false);

              window.location.href = "/";
            }}
            className=" bg-white text-nav px-4 py-2 rounded-md  no-underline text-xl hover:bg-transparent hover:border-2 hover:border-white hover:text-white"
          >
            Logout
          </Link>
        </div>
      );
    } else {
      if (isLoggedIn === false) {
        return (
          <div data-aos="zoom-in">
            <Link
              to="/signIn"
              className="bg-white text-nav px-4 py-2 rounded-md no-underline text-xl hover:bg-transparent hover:border-2 hover:border-white hover:text-white z-[100]"
            >
              Login
            </Link>
          </div>
        );
      }
    }
  };
  return (
    <>
      <div className="  bg-nav  backdrop-blur-[1px]  fixed top-0 left-0 right-0 z-[9999]  shadow-sm font-headingFont">
        <div className="flex flex-col  top-0 left-0 right-0 z-50 w-full ">
          {/*  Nav */}
          <div className=" w-full items-center  t text-2xl">
            <Container className="flex flex-col  md:flex-row justify-start lg:justify-around items-center  lg:py-1 gap-1 md:gap-5  ">
              {/* Logo  */}
              <div
                className="  w-[200px]  lg:w-[300px] text-white z-[1]"
                data-aos="zoom-in"
              >
                <Link to="/" className="flex items-center ">
                  <img
                    src={logo}
                    alt="logo"
                    className="w-full h-full uppercase bg-transparent"
                  />
                </Link>
              </div>
              {/* Links */}
              <div className="flex   py-4 -ml-20" data-aos="zoom-in">
                <ul className=" list-none flex  md:flex gap-[5px] md:gap-[1px]  items-end  mx-auto mb-0">
                  {filteredMenu.map((data) => {
                    return (
                      <li key={data.id}>
                        <Link
                          to={data.link}
                          onClick={() => handleLinkClick(data.id)}
                          className={`
                                                    ${
                                                      data.id === activeLink
                                                        ? "text-active  "
                                                        : "text-white hover:text-active"
                                                    }
                                                                                        
                                                    no-underline   px-3  text-lg  lg:text-2xl
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

              {handleButtons()}
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
