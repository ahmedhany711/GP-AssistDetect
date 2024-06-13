import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";

const EditProfilePage = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [birth, setBirth] = useState("");
<<<<<<< HEAD
  const [bio] = useState("");
=======
  const [bio, setBio] = useState("");
>>>>>>> 8e28f0b407a25b7122303b83c3a5f28aa3de6d59
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    if (
      !email ||
      !password ||
      !confirmPassword ||
      !fullName ||
      !birth ||
      !bio
    ) {
      setError("All fields are required.");
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    }

    // Update user profile with the provided information
<<<<<<< HEAD
    // const userProfile = {
    //   email,
    //   password,
    //   fullName,
    //   birth,
    //   bio,
    // };

=======
    const userProfile = {
      email,
      password,
      fullName,
      birth,
      bio,
    };

    // Here you would send the userProfile object to your server to update the profile

    // Redirect or perform any necessary actions after successful profile update
>>>>>>> 8e28f0b407a25b7122303b83c3a5f28aa3de6d59
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center pt-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl w-full space-y-8">
          <div>
            <h2 className="mt-6 text-left font-headingFont text-5xl font-extrabold text-paragraph">
              Edit Profile
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            {error && <p className="text-nav">{error}</p>}

            <div className="rounded-md  space-y-4">
              {/* First Row */}
              <div className="flex justify-between items-center">
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
                    autoComplete="name"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="appearance-none rounded-none relative block w-[450px] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                    placeholder="Full Name"
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
                    type="date"
                    required
                    value={birth}
                    onChange={(e) => setBirth(e.target.value)}
                    className="appearance-none rounded-none relative block w-[250px] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                  />
                </div>
              </div>

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
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              {/* Passwords Row */}
              <div className="flex justify-between ">
                <div>
                  <label
                    htmlFor="password"
                    className="text-nav  mb-2 text-2xl font-headingFont"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-[350px] appearance-none rounded-none relative block  px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="text-nav  mb-2 text-2xl font-headingFont"
                  >
                    Confirm Password
                  </label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type=" password"
                    autoComplete=" password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-[350px] appearance-none rounded-none relative block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
              </div>
              {/* Bio */}
              {/* <div>
              <label
                htmlFor="bio"
                className="text-nav  mb-2 text-2xl font-headingFont"
              >
                Bio
              </label>
              <textarea
                id="bio"
                name="bio"
                rows={3}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                placeholder="Bio"
              />
            </div> */}
            </div>

            <div className="flex gap-4 pt-3">
              <Link
                to={"/profile"}
                type="reset"
                className="group relative w-full flex justify-center  no-underline py-2 px-4 border border-transparent text-xl font-medium rounded-md text-nav ring-nav outline-none ring-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-nav hover:bg-nav hover:text-white"
              >
                Cancel
              </Link>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border-1 border-nav text-xl font-medium rounded-md text-white bg-nav hover:bg-white hover:text-nav  ring-2 ring-nav focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-nav"
              >
                Save
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
};

export default EditProfilePage;
