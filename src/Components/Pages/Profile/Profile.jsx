import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
import { useEffect } from "react";
// import img1 from "../../../photos/ui ux home/ahmed.jpg";

export default function Profile()
{
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  // const [image, setImage] = useState(img1);
  const [fullName, setFullName] = useState("");
  const [birth, setBirth] = useState("");
  const [error, setError] = useState("");

  useEffect(() =>
  {
    const fetchUserProfile = async () =>
    {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch(
          "https://b7a2-102-40-210-151.ngrok-free.app/api/patient/show-profile",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("User profile data:", response);

        if (response.ok) {
          const data = await response.json();
          console.log("User profile data:", data);

          // Update state with fetched user profile data
          setEmail(data.data.email);
          setFullName(data.data.name);
          setBirth(data.data.birth);
          setImage(data.data.profile_image); // If image is also returned from the endpoint
        } else {
          console.error("Failed to fetch user profile:", response.status);
          // Handle error here
        }
      } catch (error) {
        console.error("Error:", error);
        // Handle error here
      }
    };

    fetchUserProfile();
  }, []);

  const handleSubmit = async (e) =>
  {
    e.preventDefault();
    // Perform form validation
    if (!email || !fullName || !birth) {
      setError("All fields are required.");
      setTimeout(() =>
      {
        setError("");
      }, 2000);
      return;
    }

    // Update user profile with the provided information
    // const userProfile = {
    //   email,
    //   fullName,
    //   birth,
    //   image,
    // };


  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full space-y-8">
          {/* Heading */}
          <div className="flex justify-between items-start mt-3">
            <h2 className="mt-4  text-left font-headingFont text-5xl font-extrabold text-nav">
              Profile
            </h2>
            <div className="">
              <img src={image} alt="" className="w-28 h-28 rounded-full " />
            </div>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            {error && <p className="text-nav">{error}</p>}
            {/* Form body */}
            <div className="rounded-md shadow-sm space-y-4 bg-white">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="text-nav mb-2 text-2xl font-headingFont"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  readOnly
                  value={fullName}
                  // onChange={(e) => setFullName(e.target.value)}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-paragraph rounded-t-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                />
              </div>

              {/* email */}
              <div>
                <label
                  htmlFor="email"
                  className="text-nav  mb-2 text-2xl   font-headingFont"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  readOnly
                  value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-paragraph focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                />
              </div>

              {/* Birth */}
              <div>
                <label
                  htmlFor="birth"
                  className="text-nav  mb-2 text-2xl  font-headingFont"
                >
                  Date of Birth
                </label>
                <input
                  id="birth"
                  name="birth"
                  type="text"
                  readOnly
                  value={birth}
                  // onChange={(e) => setBirth(e.target.value)}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-paragraph focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-3">
              <Link
                to={"/editprofile"}
                type="submit"
                className="group relative w-full flex justify-center  no-underline py-2 px-4 border border-transparent text-xl font-medium rounded-md text-nav ring-nav outline-none ring-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-nav hover:bg-nav hover:text-white"
              >
                Edit Profile
              </Link>
              <button
                type="reset"
                className="group relative w-full flex justify-center py-2 px-4 border-1 border-nav text-xl font-medium rounded-md text-white bg-nav hover:bg-white hover:text-nav  ring-2 ring-nav focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-nav"
              >
                Delete Profile
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="-mt-5">
        <Footer />
      </div>
    </>
  );
}
