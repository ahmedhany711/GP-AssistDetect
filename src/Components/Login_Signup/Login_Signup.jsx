import React, { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaCalendarAlt, FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const SignUpAndLoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");

  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  localStorage.setItem("isLogin", isLoggedIn);

  const [birth, setBirth] = useState("");

  const handleError = () => {
    let errorMessage = "";

    // Perform form validation
    if (!email || !password || !fullName) {
      errorMessage = "All fields are required.";
    } else if (password.length < 8) {
      errorMessage = "Please Enter at Least  8 Character in Password    ";
    }

    // Set the error message
    setError(errorMessage);

    // Clear the error message after 2 seconds
    if (errorMessage) {
      setTimeout(() => {
        setError("");
      }, 5000);
      return;
    }
  };
  const handleSignupError = () => {
    let errorMessage = "";

    // Perform form validation
    if (!email || !password) {
      errorMessage = "All fields are required.";
    } else if (password.length < 8) {
      errorMessage = "Enter at Least  8 Character";
    } else if (password !== confirmPassword) {
      errorMessage = "Passwords Do Not Match";
    }

    // Set the error message
    setError(errorMessage);

    // Clear the error message after 2 seconds
    if (errorMessage) {
      setTimeout(() => {
        setError("");
      }, 5000);
      return;
    }
  };
  //  19|mH3L1c6wCCNWTgg2IfJyuY5PIfoxL3lry70nr6rpd0e042c8
  const handleLogin = async (e) => {
    e.preventDefault();
    handleError();
    try {
      const response = await fetch(
        "https://gp-production-ead6.up.railway.app/api/patient/signin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      console.log("Response Headers:", response.headers);

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful:", data);
        localStorage.setItem("token", data.data.token);
        setIsLoggedIn(true);
        localStorage.setItem("isLogin", isLoggedIn);

        setTimeout(() => {
          // Perform page navigation here
          window.location.href = "/patient";
        }, 1000);

        if (onLogin) {
          onLogin(email, password);
        }
      } else {
        console.error("Login failed:", response.status);
        // Handle login failure here
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle error here
    }
    // setIsLoggedIn(true);
    // window.location.href = "/patient";
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    handleSignupError();
    try {
      const response = await fetch(
        "https://gp-production-ead6.up.railway.app/api/patient/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: fullName,
            email: email,
            password: password,
            password_confirmation: confirmPassword,
            birth: birth,
          }),
        }
      );
      console.log("Response Headers:", response.headers);
      const data = await response.json();
      if (response.ok) {
        console.log("Sign-up successful:", data);
        localStorage.setItem("token", data.data.token);
        setIsLoggedIn(true);
        localStorage.setItem("isLogin", isLoggedIn);

        window.location.href = "/patient";
        // Invoke the onLogin callback if provided
        if (onLogin) {
          onLogin(email, password);
        }
      } else {
        console.error("Sign-up failed:", data.message);
        // Handle sign-up failure here
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle error here
    }
  };
  return (
    <>
      <div className="h-screen flex items-start justify-center pt-56 px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up" className="max-w-xl w-full space-y-8">
          {/* Header */}
          <div>
            <h2 className="font-headingFont mt-6 text-center text-5xl font-extrabold text-nav ">
              {isSignUp ? "Sign Up" : "Log In"}
            </h2>
          </div>

          {/* Form Body */}
          <form
            className="mt-8 space-y-6"
            onSubmit={isSignUp ? handleSignUp : handleLogin}
          >
            {error && <p className="text-nav text-lg">{error}</p>}

            <div className="rounded-md shadow-sm space-y-1">
              {/* Full name */}
              {isSignUp && (
                <div className="relative flex items-center">
                  <label htmlFor="full-name" className="sr-only">
                    Full Name
                  </label>
                  <input
                    id="full-name"
                    name="full-name"
                    type="text"
                    autoComplete="name"
                    required
                    className="appearance-none rounded-none relative block w-full px-8 py-2 pl-10 border border-nav placeholder-nav text-gray-900 rounded-t-md focus:outline-none focus:ring-nav focus:border-nav focus:z-10 sm:text-sm target:bg-white"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaPen className="text-nav" />
                  </div>
                </div>
              )}

              {/* Email */}
              <div className="relative flex items-center">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-8 py-2 pl-10 border border-nav placeholder-nav text-gray-900 rounded-t-md focus:outline-none focus:ring-nav focus:border-nav focus:z-10 sm:text-sm target:bg-white"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MdOutlineMail className="text-nav" />
                </div>
              </div>

              {/* Password */}
              <div className="relative flex items-center">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-8 py-2 pl-10 border border-nav placeholder-nav text-gray-900 rounded-t-md focus:outline-none focus:ring-nav focus:border-nav focus:z-10 sm:text-sm target:bg-white"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <RiLockPasswordLine className="text-nav" />
                </div>
              </div>

              {/* Confirm Password */}
              {isSignUp && (
                <div className="relative flex items-center">
                  <label htmlFor="confirmPassword" className="sr-only">
                    Confirm Password
                  </label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-8 py-2 pl-10 border border-nav placeholder-nav text-gray-900 rounded-t-md focus:outline-none focus:ring-nav focus:border-nav focus:z-10 sm:text-sm target:bg-white"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <RiLockPasswordLine className="text-nav" />
                  </div>
                </div>
              )}

              {/* Birth field */}
              {isSignUp && (
                <div className="relative flex items-center">
                  <label htmlFor="birth" className="sr-only">
                    Date of Birth
                  </label>
                  <input
                    id="birth"
                    name="birth"
                    type="text"
                    autoComplete="bday"
                    required
                    className="appearance-none rounded-none relative block w-full px-8 py-2 pl-10 border border-nav placeholder-nav text-gray-900 rounded-t-md focus:outline-none focus:ring-nav focus:border-nav focus:z-10 sm:text-sm target:bg-white"
                    placeholder="Date of Birth (DD-MM-YYYY)"
                    value={birth}
                    onChange={(e) => setBirth(e.target.value)}
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaCalendarAlt className="text-nav" />
                  </div>
                </div>
              )}
            </div>

            {/* Button */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 rounded-md shadow-sm text-xl font-semibold text-white bg-nav hover:bg-nav/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-nav"
              >
                {isSignUp ? "Sign Up" : "Log In"}
              </button>
            </div>

            {/* Forget password */}
            <div>
              {!isSignUp && (
                <div className="text-nav text-xl dark:text-primary/90">
                  Forget Password ?
                  <Link className="ml-1 text-nav/80 no-underline text-[17px] hover:text-nav hover:px-1 ">
                    {" "}
                    Click Here!
                  </Link>
                </div>
              )}
            </div>

            {/* have an account */}
            <div className="text-center">
              <button
                type="button"
                className="text-lg text-nav"
                onClick={() => setIsSignUp(!isSignUp)}
              >
                {isSignUp ? (
                  <p>
                    Already have an account ?{" "}
                    <span className=" pl-2 hover:pl-3 text-nav/80 hover:text-nav">
                      Log In{" "}
                    </span>
                  </p>
                ) : (
                  <p>
                    Don't have an account?{" "}
                    <span className=" pl-2 hover:pl-3 text-nav/80 hover:text-nav">
                      Sign Up
                    </span>
                  </p>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUpAndLoginPage;
