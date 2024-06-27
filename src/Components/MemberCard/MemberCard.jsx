import React, { useState } from "react";
import "./MemberCard.scss";
// get our fontawesome imports

import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";

import { FaFacebookF } from "react-icons/fa";

export default function MemberCard(props)
{
  const [showModal, setShowModal] = useState(false);
  const [meetingTopic, setMeetingTopic] = useState("");

  const handleRequestMeeting = (e) =>
  {
    e.preventDefault();
    setShowModal(true);
  };

  const handleCloseModal = () =>
  {
    setShowModal(false);
    setMeetingTopic("");
  };

  const handleConfirm = () =>
  {
    console.log("Meeting Topic:", meetingTopic, "With Doctor ID:", props.id);
    handleCloseModal();
  };
  return (
    <>
      <div className=" ">
        <div className="relative">
          <img src={props.img} alt="no" className="p-2 rounded-3xl h-[550px] w-[400px]" />

          <div className="absolute top-[50%] md:top-[52%] lg:top-[50%]  xl:top-[45%] 2xl:top-[50%] left-0 ml-2 bg-card z-[100] w-[80%] md:w-[85%] lg:w-[80%] h-[230px] md:h-[235px] lg:h-[235px] xl:h-[280px]  2xl:h-[230px] px-3 py-4 ">
            <div className=" col-10 flex flex-col justify-start items-start gap-1 pl-3 text-white relative">
              {/* Name */}
              <div>
                <h2 className="col-12  m-0 text-2xl ">{props.name}</h2>
                <p className="col-12 pb-0 mb-0 text-gray-200">Pyschologist</p>
                <p className="py-1 m-0"> {props.email}</p>
                <p className="py-1  m-0">
                  Days :- <span className="ml-4 ">{props.availableDays}</span>
                </p>
                <div className="flex gap-10 justify-between m-0 ">
                  <p>From :- {props.availableTimeFrom}</p>
                  <p>To :- {props.availableTimeTo}</p>
                </div>
                <div className="mx-auto ">
                  <a
                    href="#a"
                    onClick={handleRequestMeeting}
                    className="bg-transparent border-2 text-white px-3 py-2 rounded-md no-underline text-sm hover:bg-white hover:border-2 hover:border-nav hover:text-nav mx-auto"
                  >
                    Request Meeting
                  </a>
                </div>
              </div>
              {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                  <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md relative">
                    <span
                      className="absolute top-4 right-6 text-gray-500 hover:text-black cursor-pointer text-2xl"
                      onClick={handleCloseModal}
                    >
                      X
                    </span>
                    <h2 className="text-2xl font-bold mb-4">Request Meeting</h2>
                    <label htmlFor="meetingTopic" className="block text-sm font-medium text-gray-700">
                      Meeting Topic:
                    </label>
                    <input
                      type="text"
                      id="meetingTopic"
                      value={meetingTopic}
                      onChange={(e) => setMeetingTopic(e.target.value)}
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-nav focus:border-nav"
                    />
                    <div className="mt-4 flex justify-end">
                      <button
                        onClick={handleConfirm}
                        className="bg-nav text-white px-4 py-2 rounded-md hover:bg-nav-dark"
                      >
                        Confirm
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Social Links */}
              <div className="absolute bottom-0 -right-14">
                <div className="flex gap-2 flex-col  text-nav  justify-center items-center text-center group">
                  {/* Facebook */}
                  <div className="w-8 h-8 rounded-full bg-white text-3xl flex justify-center items-center hover:bg-transparent hover:text-white cursor-pointer group duration-300  group-hover:border-2  group-hover:border-white ">
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
                      className="text-nav group-hover:text-white"
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
                      className="text-nav group-hover:text-white"
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
                      className="text-nav group-hover:text-white"
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
