import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { IoNotifications } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../photos/ui ux home/FinalLog-removebg-preview.png";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


const Nav = () =>
{
  const menu = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About Us", link: "/about" },
    { id: 3, name: "Services", link: "/services" },
    { id: 4, name: "Contact Us", link: "/contact" },
    { id: 5, name: "FAQ", link: "/faq" },
    { id: 6, name: "Profile", link: "/profile" },
    { id: 7, name: "Survey", link: "/form" },
  ];

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const [activeLink, setActiveLink] = useState(menu[0].id);
  const handleLinkClick = (id) => setActiveLink(id);

  const [isLoggedIn, setIsLoggedIn] = useState(() =>
  {
    return JSON.parse(localStorage.getItem("isLogin?")) || false;
  });

  useEffect(() =>
  {
    localStorage.setItem("isLogin?", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  let filteredMenu = menu.slice(0, 10);
  if (isLoggedIn) {
    filteredMenu = [
      { id: 1, name: "Home", link: "/patient" },
      { id: 2, name: "Survey", link: "/form" },
      { id: 3, name: "Blog", link: "/blog" },
      { id: 4, name: "FAQ", link: "/faq" },
      { id: 5, name: "Doctors", link: "/doctors" },
      { id: 6, name: "Profile", link: "/profile" },
    ];
  } else {
    filteredMenu = [
      { id: 1, name: "Home", link: "/" },
      { id: 2, name: "About ", link: "/about" },
      { id: 3, name: "Services", link: "/services" },
      { id: 4, name: "Contact ", link: "/contact" },
      { id: 5, name: "Doctors", link: "/doctors" },
      { id: 6, name: "FAQ", link: "/faq" },
    ];
  }

  const handleButtons = () =>
  {
    if (isLoggedIn) {
      return (
        <div data-aos="zoom-in">
          <Link
            onClick={() =>
            {
              setIsLoggedIn(false);
              window.location.href = "/";
            }}
            className="bg-white text-nav text-sm px-3 py-2  md:px-6 md:py-2 rounded-md no-underline md:text-xl hover:bg-transparent hover:border-2 hover:border-white hover:text-white"
          >
            Logout
          </Link>
        </div>
      );
    } else {
      return (
        <div data-aos="zoom-in">
          <Link
            to="/choose"
            className="bg-white text-nav text-sm px-3 py-2  md:px-6 md:py-2 rounded-md no-underline md:text-xl hover:bg-transparent hover:border-2 hover:border-white hover:text-white"
          >
            Login
          </Link>
        </div>
      );
    }
  };

  return (
    <div className="bg-nav backdrop-blur-[1px] fixed top-0 left-0 right-0 z-[9999] shadow-sm font-headingFont">
      <div className="flex flex-col w-[100%] md:w-[80%] md:mx-auto">
        <div className="w-full text-2xl">
          <Container className="flex flex-row justify-between items-center py-2 gap-3">
            {/* Logo */}
            <div className="w-[150px] lg:w-[200px] text-white z-10" data-aos="zoom-in">
              <Link to="/" className="flex items-center">
                <img
                  src={logo}
                  alt="logo"
                  className="w-full h-full uppercase bg-transparent"
                />
              </Link>
            </div>

            {/* Hamburger Menu for Small Screens */}
            <div className="lg:hidden flex items-center ml-auto">
              <button onClick={toggleMenu}>
                {menuOpen ? <FaTimes className="text-white md:text-3xl text-2xl" /> : <FaBars className="text-white md:text-3xl text-2xl" />}
              </button>
            </div>

            {/* Links for Large Screens */}
            <div className="hidden lg:flex py-4" data-aos="zoom-in">
              <ul className="list-none flex gap-3 md:gap-5 items-center mb-0">
                {filteredMenu.map((data) => (
                  <li key={data.id}>
                    <Link
                      to={data.link}
                      onClick={() => handleLinkClick(data.id)}
                      className={`${data.id === activeLink
                        ? "text-active"
                        : "text-white hover:text-active"
                        } 
                       
                        no-underline px-3 text-[17px]  duration-300 hover:bg-white/10 inline-block`}
                    >
                      {data.name}
                    </Link>
                  </li>
                ))}
                {/* Manage DropDown for Doctors Nav */}
                <div className="relative">
                  <button
                    onClick={toggleDropdown}
                    className="text-white no-underline px-3 text-lg lg:text-xl duration-300 hover:text-active hover:bg-white/10 inline-block"
                  >
                    {dropdownOpen ? (<div className="flex items-center gap-1 ">
                      <span>Manage</span> <MdKeyboardArrowUp className="text-2xl" />
                    </div>) :
                      (<div className="flex items-center gap-1 ">
                        <span>Manage</span> <MdOutlineKeyboardArrowDown className="text-2xl" />
                      </div>)}
                  </button>
                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                      <a
                        href="managePosts"
                        className="no-underline block px-4 py-2 text-nav hover:bg-gray-100"
                      >
                        Posts
                      </a>
                      <a
                        href="ManageUsers"
                        className="no-underline block px-4 py-2 text-nav hover:bg-gray-100"
                      >
                        Users
                      </a>
                      <a
                        href="ManageAvailability"
                        className="no-underline block px-4 py-2 text-nav hover:bg-gray-100"
                      >
                        Availability
                      </a>
                      <a
                        href="ManageMeeting"
                        className="no-underline block px-4 py-2 text-nav hover:bg-gray-100"
                      >
                        Meetings
                      </a>
                    </div>
                  )}
                </div>
              </ul>
            </div>


            {/* Notification icon */}
            <div className="flex" onClick={() => (window.location.href = "/NotificationPage")}>
              <IoNotifications className="text-2xl md:text-3xl text-white hover:animate-wiggle cursor-pointer duration-300" />
            </div>
            
            {/* Login Button for Large Screens */}
            <div className="block">{handleButtons()}</div>
          </Container>

          {/* Links for Small Screens */}
          {menuOpen && (
            <div className="lg:hidden bg-nav py-4" data-aos="zoom-in">
              <ul className="list-none flex flex-col items-start mb-0 px-4">
                {filteredMenu.map((data) => (
                  <li key={data.id} className="w-full">
                    <Link
                      to={data.link}
                      onClick={() =>
                      {
                        handleLinkClick(data.id);
                        toggleMenu();
                      }}
                      className={`${data.id === activeLink
                        ? "text-active"
                        : "text-white hover:text-active"
                        } no-underline py-2 text-lg w-full duration-300 hover:bg-white/10 inline-block`}
                    >
                      {data.name}
                    </Link>
                  </li>
                ))}
                {/* Manage DropDown for Doctors Nav */}
                <li className="w-full relative">
                  <button
                    onClick={toggleDropdown}
                    className="text-white no-underline py-2 text-lg w-full duration-300 hover:bg-white/10 inline-block text-left"
                  >
                    {dropdownOpen ? (<div className="flex items-center gap-1 ">
                      <span>Manage</span> <MdKeyboardArrowUp className="text-2xl" />
                    </div>) : 
                      (<div className="flex items-center gap-1 ">
                        <span>Manage</span> <MdOutlineKeyboardArrowDown className="text-2xl" />
                      </div>)}
                    
                  </button>
                  {dropdownOpen && (
                    <div className="bg-white rounded-md shadow-lg z-50 my-2 pb-10">
                      <a
                        href="managePosts"
                        className="no-underline block px-4 py-2 text-nav hover:bg-gray-100"
                      >
                        Posts
                      </a>
                      <a
                        href="ManageUsers"
                        className="no-underline block px-4 py-2 text-nav hover:bg-gray-100"
                      >
                        Users
                      </a>
                      <a
                        href="ManageAvailability"
                        className="no-underline block px-4 py-2 text-nav hover:bg-gray-100"
                      >
                        Availability
                      </a>
                      <a
                        href="ManageMeeting"
                        className="no-underline block px-4 py-2 text-nav hover:bg-gray-100"
                      >
                        Meetings
                      </a>
                    </div>
                  )}
                </li>
              </ul>

                {/* Login inside menu for small screen and notification*/}
              {/* <div className="flex gap-1 items-end justify-end ">
                <div className="px-4">{handleButtons()}</div>
                <div className="px-4 " onClick={() => (window.location.href = "/NotificationPage")}>
                  <IoNotifications className="text-3xl text-white hover:animate-wiggle cursor-pointer duration-300" />
                </div>
              </div> */}

            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
