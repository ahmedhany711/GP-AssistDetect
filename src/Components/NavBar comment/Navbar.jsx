import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import logo from '../../photos/logo.png'
import { IoSearchSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import DarkMode from "./Darkmode";
<<<<<<< HEAD
import {  NavDropdown } from "react-bootstrap";
=======
import { DropdownMenu, NavDropdown } from "react-bootstrap";
>>>>>>> 8e28f0b407a25b7122303b83c3a5f28aa3de6d59
import { MdAccountCircle } from "react-icons/md";

// const menu = [{ id: 1, name: "Home", link: "/", }, { id: 2, name: "All Products", link: "/allProducts", }, { id: 3, name: "Kids Wear", link: "/", }, { id: 4, name: "Mens Wear", link: "/trending-products", }, { id: 5, name: " Electronics ", link: "/electronics", }]
const menu = [{ id: 1, name: "Home", link: "/", },
{ id: 2, name: "All Products", link: "/allProducts", },
{ id: 3, name: "Men's Clothing", link: "/MensClothing", },
{ id: 4, name: "Woman's Clothing", link: "/WomansClothing", },
{ id: 5, name: "Electronics", link: "/electronics", },
{ id: 6, name: "Jewelery", link: "/jewelery", },]

const dropDownMenu = [{ id: 1, name: "Trending Products", link: "/trending-products", },
{ id: 2, name: "Top Rated", link: "/top-rated", },
{ id: 3, name: "Best Selling", link: "/best-selling", },]

const secondDropDownMenu = [{ id: 1, name: "Men's Clothing", link: "/MensClothing", },
{ id: 2, name: "Woman's Clothing", link: "/WomansClothing", },
{ id: 3, name: "Electronics", link: "/electronics", },
{ id: 4, name: "Jewelery", link: "/jewelery", },
{ id: 5, name: "Kids Wear", link: "/Kids Wear", },]

function NAV({ handleOrderPopup }) {
    return (
        <>
            <div className=" shadow-md bg-white dark:bg-gray-900   dark:text-white duration-300 relative z-20 ">
                <div className="flex flex-col dark:fixed  top-0 left-0 right-0 z-50 w-full ">

                    {/* First Nav */}
                    <div className="bg-primary/50 py-2 dark:bg-gray-900   w-full sm:py-1 " >
                        <Container className="flex justify-around items-center  dark:text-white  my-2 gap-5 ">

                            {/* Logo + Link */}
                            <div className="dark:text-white">
                                <Link to="/" className="font-bold text-black flex gap-3  mr-5 no-underline items-center text-2xl dark:text-white sm:text-3xl">
                                    <img src={logo} alt="logo" className="w-10 h-10 uppercase" />
                                    Shopsy
                                </Link>
                            </div>
                            {/* Search bar + Order button  + Dark Mode switcher */}

                            {/* Search bar */}
                            <div className="flex  justify-between items-center gap-5">

                                <div className="group relative hidden  sm:block ">
                                    <input type="text" placeholder="search" className="w-[200px] sm:[200px] rounded-full px-3 py-1 group-hover:w-[300px] transition-all duration-500 border border-gray-300 focus:outline-none focus:border-2 focus:border-primary "></input>
                                    <IoSearchSharp className="absolute top-1/2 -translate-y-1/2 right-3  text-gray-400 group-hover:text-primary" />
                                </div>

                                {/* Cart button */}
                                <Link
                                    to='/cartt'
                                    className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full  transition-all duration-300  flex  mx-4 items-center group"
                                >
                                    <FaShoppingCart className="text-white text-xl cursor-pointer drop-shadow-md mx-1 group-hover:mx-2 group-hover:my-1"
                                    />
                                </Link>

                                {/* <button
                                className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full  transition-all duration-300  flex  ml-2 items-center group"
                                onClick={() => handleOrderPopup()}
                            >

                                <span className="text-white font-bold text-md hidden  transition-all duration-300  group-hover:block "> Order </span>

                                <FaShoppingCart className="text-white text-xl cursor-pointer drop-shadow-md mx-1 group-hover:ml-3" />
                            </button> */}


                                {/* Login & SignUp */}

                                <Link
                                    to='/signIn'
                                    className=" text-white  rounded-full   duration-300  flex mr-5 -ml-10  items-center group"
                                >
                                    <MdAccountCircle className="text-white text-3xl cursor-pointer drop-shadow-md   group-hover:my-1"
                                    />
                                </Link>

                                {/* Dark Mode  button */}
                                <DarkMode />
                            </div>
                        </Container >
                    </div >

                    {/* Second  Navbar */}
                    <div className="flex w-full h-fit   bg-white shadow-md pt-3 pr-8 dark:bg-gradient-to-r from-primary to-secondary dark:text-white"
                        data-aos="zoom-in"
                    >
                        <div className="container">
                            <ul className=" list-none flex flex-row sm:flex gap-[5px] md:gap-[18px] mx-auto items-center justify-center dark:text-white">
                                {menu.map((data) => {
                                    return (
                                        <li key={data.id} className={`
                                            ${data.id >= 3 & data.id <= 6 ? "hidden lg:inline-block   " : "inline-block -ml-2 "}`} >
                                            <Link to={data.link} className={`
                                            no-underline text-black   font-semibold px-3 lg:px-0 lg:text-sm text-xl
                                        duration-300 hover:text-primary
                                        inline-block dark:text-white`}
                                            >
                                                {data.name}
                                            </Link>
                                        </li>
                                    )
                                })}

                                {/* Drop Down Menu */}
                                <li className="mx-2 duration-300 hover:text-primary  font-semibold">
                                    <NavDropdown title="Trending Items" id="basic-nav-dropdown" className={`duration-300  hover:text-primary dark:text-white  `}
                                    >
                                        <NavDropdown.Header
                                            className="duration-300  -my-2 rounded-md  shadow-md  dark:bg-gray-900 dark:text-white "
                                            style={{ inset: "20px auto auto 0px !important" }}
                                        >

                                            {dropDownMenu.map((data, index) => {
                                                return (
                                                    index <= 1 ?
                                                        <>
                                                            <Link to={data.link} className="duration-300  text-black no-underline hover:text-primary 
                                                        hover:bg-inherit  dark:text-white
                                                        dark:bg-gray-900
                                                        dark:hover:text-primary">
                                                                {data.name}
                                                            </Link>

                                                            <NavDropdown.Divider className="h-[2px]
                                                        dark:bg-white dark:text-white" />
                                                        </>
                                                        : <>
                                                            <Link
                                                                to={data.link}
                                                                className="
                                                                text-black no-underline duration-300  hover:text-primary
                                                        hover:bg-inherit 
                                                            dark:text-white
                                                    dark:hover:text-primary"
                                                            >
                                                                {data.name}
                                                            </Link>
                                                        </>

                                                )
                                            })}

                                        </NavDropdown.Header>
                                    </NavDropdown>

                                </li>

                                {/* 2nd Drop Down Menu */}

                                <li className="mx-2 duration-300 hover:text-primary  font-semibold">
                                    <NavDropdown title="Categories" id="basic-nav-dropdown" className={`duration-300  hover:text-primary dark:text-white  `}
                                    >
                                        <NavDropdown.Header
                                            className="duration-300  -my-2 rounded-md  shadow-md  dark:bg-secondary dark:text-white "
                                            style={{ inset: "20px auto auto 0px !important" }}
                                        >

                                            {secondDropDownMenu.map((data, index) => {
                                                return (
                                                    index <= 3 ?
                                                        <>
                                                            <Link to={data.link} className="duration-300  text-black no-underline hover:text-primary 
                                                        hover:bg-inherit  dark:text-white
                                                        dark:bg-secondary
                                                        dark:hover:text-primary">
                                                                {data.name}
                                                            </Link>

                                                            <NavDropdown.Divider className="h-[2px]
                                                        dark:bg-white dark:text-white" />
                                                        </>
                                                        : <>
                                                            <Link
                                                                to={data.link}
                                                                className="
                                                                text-black no-underline duration-300  hover:text-primary
                                                        hover:bg-inherit 
                                                            dark:text-white
                                                    dark:hover:text-primary"
                                                            >
                                                                {data.name}
                                                            </Link>
                                                        </>

                                                )
                                            })}

                                        </NavDropdown.Header>
                                    </NavDropdown>

                                </li>
                            </ul>

                        </div>
                    </div >
                </div>

            </div >
        </>
    );

}

export default NAV;