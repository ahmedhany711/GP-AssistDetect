import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
import img1 from "../../../photos/ui ux home/ahmed.jpg";
const EditProfilePage = ({ onLogin }) =>
{
  const currentPassword = "123456789";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState(img1);
  const [birth, setBirth] = useState("");
  const [changePassword, setChangePassword] = useState(false);
  const [bio] = useState("");

  // const [bio, setBio] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = (e) =>
  {
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
      setTimeout(() =>
      {
        setError("");
      }, 2000);
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setTimeout(() =>
      {
        setError("");
      }, 2000);
      return;
    }

    // Update user profile with the provided information

    // const userProfile = {
    //   email,
    //   password,
    //   fullName,
    //   birth,
    //   bio,
    // };
  };
  const handleImageChange = (e) =>
  {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) =>
      {
        setImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center pt-5 px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-3xl w-full space-y-8">
          {/* Heading (Image) */}
          <div className="flex justify-between items-start mt-20">
            <h2 className="mt-4  text-left font-headingFont text-5xl font-extrabold text-paragraph">
              Edit Profile
            </h2>
            <div
              className="cursor-pointer"
              onClick={() => document.getElementById("imageInput").click()}
            >
              <img src={image} alt="" className="w-28 h-28 rounded-full " />
            </div>
          </div>

          {/* Body  */}
          <form className="mt-8 space-y-6 " onSubmit={handleSubmit}>
            <input
              type="file"
              id="imageInput"
              style={{ display: "none" }}
              onChange={handleImageChange}
              accept="image/*"
            />
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
              {/* Email */}
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
              {/* Change Password or Not ? */}
              <div className="flex justify-end">
                <button
                  onClick={() =>
                  {
                    setChangePassword(!changePassword)
                  }}
                  className=" text-nav px-4 py-2 rounded-md no-underline text-sm   hover:scale-x-110"
                >
                  {changePassword ? "Canel Change Password" :"Change Password ?"} 
                </button>
              </div>
            
              {/* if click on change password */}
              {changePassword && (
                <>
                  {/* Current password */}
                  <div className="flex justify-between ">
                    <div>
                      <label
                        htmlFor="CurrentPassword"
                        className="text-nav  mb-2 text-2xl font-headingFont"
                      >
                        CurrentPassword
                      </label>
                      <input
                        id="CurrentPassword"
                        name="CurrentPassword"
                        type="text"
                        autoComplete="password"
                        required
                        value={currentPassword}
                        readOnly
                        // onChange={(e) => setPassword(e.target.value)}
                        className="w-[350px] appearance-none rounded-none relative block  px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                        placeholder="Email address"
                      />
                    </div>
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
                    {/* Confirm Password */}
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
                </>
              )}

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
