import React from 'react';
import { Link } from 'react-router-dom';
import '../App.scss'
const AboutBanner = () => {
    return (

        <div id="aboutBanner" className="h-[70vh] mt-28 bg-scroll duration-300" >
            <section id="sec7" className="col-12 max-h-full relative">
                {/* OverLay */}
                <div id='overlay' className='absolute top-0 left-0 w-full h-full bg-homeOverly opacity-50 px-8 py-16'></div>
                {/* Text  */}
                <div id='text' className="z-[10] lg:px-72">
                    {/* Title */}
                    <h1 className="col-12 font-headingFont  font-semibold mb-4 mx-auto">
                        Mental Health Support Anytime, Anywhere</h1>
                    {/* content */}
                    <p
                        className='text-[16px]  text-light   text-center mx-auto'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
                {/*  Button */}
                <div data-aos="zoom-in">
                    <Link to='/' className=" bg-white text-nav px-4 py-2 rounded-md  no-underline text-xl hover:bg-transparent hover:border-2 hover:border-white hover:text-white">
                        MAKE TEST Now
                    </Link>
                </div>
            </section>
        </div>


    );
}

export default AboutBanner;
