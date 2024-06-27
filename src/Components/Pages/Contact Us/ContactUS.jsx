import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import "../../../";
import { FaLocationArrow } from "react-icons/fa";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";
const ContactUs = () =>
{
  return (
    <>
      <section
        data-aos="fade-up"
        className="sec1 h-[70vh] bg-cover bg-top flex flex-col lg:flex-row lg:items-center lg:justify-center text-white relative "
        id="Contact"
      >
        {/* OverLay */}
        <div
          id="overlay"
          className="absolute top-0 left-0 w-full h-full bg-homeOverly/50 opacity-65 px-8 py-16"
        ></div>
        {/* Text Details  */}
        <div className="z-[10]">
          <h1 className="text-[74px] font-headingFont font-light ml-2 ">
            Contact US
          </h1>
          <div className=" flex items-center justify-center text-white mt-0  font-light">
            <div>
              <Link
                className="no-underline text-white  text-[18px] mr-2 hover:text-active "
                to="/"
              >
                Home
              </Link>
            </div>
            <div className="">
              <p className="p-0 m-0 text-[18px]"> / Contact US</p>
            </div>
          </div>
        </div>
      </section>
      {/* Body */}
      <div className="mt-24 ">
        <div className="px-10   py-8">
          <div className="">


            {/* Body */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-10">

              {/* Contact Form */}
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="font-headingFont text-2xl font-semibold mb-4 text-nav">
                  Send us a Message
                </h2>
                <form>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-paragraph"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 p-2 block w-full border-1 border-nav rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-paragraph"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 p-2 block w-full border-1 border-nav rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-paragraph"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="mt-1 p-2 block w-full border-1 border-nav rounded-md focus:outline-none focus:ring-primary focus:border-primary "
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-nav text-white px-4 py-2 rounded-md hover:bg-nav/80 transition duration-300 font-headingFont"
                  >
                    Send Message
                  </button>
                </form>
              </div>


              {/* Contact Information */}
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="font-headingFont text-2xl font-semibold mb-4 text-nav">
                  Contact Information
                </h2>

                <div className="flex gap-3 items-center my-10 ">
                  <FaLocationArrow className="text-nav text-2xl p-0 m-0 " />
                  <p className="text-paragraph text-xl p-0 m-0  ">
                    {" "}
                    53 Main Street, Cairo , Egypt
                  </p>
                </div>
                <div className="flex gap-3 items-center mb-10 ">
                  <MdOutlineMail className="text-nav text-2xl p-0 m-0 " />
                  <p className="text-paragraph text-xl p-0 m-0  ">
                    AssistDetect@gmail.com
                  </p>
                </div>
                <div className="flex gap-3 items-center mb-10 ">
                  <FaPhone className="text-nav text-2xl p-0 m-0 " />
                  <p className="text-paragraph text-xl p-0 m-0  ">
                    +91 123 456 8799
                  </p>
                </div>
              </div>

            </div>
            {/* Title */}

            <div className="flex justify-center">
              <div className="flex  flex-col items-center">

                <h5 className="mb-8 text-paragraph">
                  We'd love to hear from you! If you have any questions,
                  feedback, or inquiries, please feel free to reach out to us.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
