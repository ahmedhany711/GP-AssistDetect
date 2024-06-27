import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import "aos/dist/aos.js";
import Home from "./Components/Pages/Home/Home";
import Nav from "./Components/Nav/Nav";
import SignUpAndLoginPage from "./Components/Login_Signup/Login_Signup";
import AboutPage from "./Components/Pages/About/About";
import ServicesPage from "./Components/Services/ServicesPage/ServicesPage";
import OurTeam from "./Components/OurTeam/OurTeam";
import PostsPage from "./Components/Pages/PostPage/PostPage";
import FormPage from "./Components/Pages/FormPage/FormPage";
import Patient from "./Components/Pages/Patient/Patient";
import ContactUs from "./Components/Pages/Contact Us/ContactUS";
import EditProfilePage from "./Components/Pages/Profile/EditProfile";
import Profile from "./Components/Pages/Profile/Profile";
import FAQPage from "./Components/Pages/FAQ/FAQ";
import DoctorProfile from "./Components/Pages/Profile/DoctorProfile";
import DoctorEditProfile from "./Components/Pages/Profile/DoctorEditProfile";
import Doctors from "./Components/Pages/Doctors/Doctors";
import DoctorsHome from "./Components/Pages/Doctors/DoctorsHome";
import NotificationPage from "./Components/Pages/Notification page/NotificationPage";
import LoginSignupDoctor from "./Components/Login_Signup/Login_Signup_Doctor";
import Choose from "./Components/Login_Signup/choose";
import ManagePosts from "./Components/Pages/Manage Posts/ManagePosts";
import ManageAvailability from "./Components/Pages/Manage Availability/ManageAvailability";
import ManageUsers from "./Components/Pages/Manage Users/ManageUsers";
import ManageMeeting from "./Components/Pages/Manage Meeting/ManageMeeting";

function App()
{
  // Animation
  useEffect(() =>
  {
    Aos.init({
      startEvent: "load",
      offset: 100,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
    Aos.refresh();
  }, []);

  return (
    <div id="body" className="font-contentFont overflow-hidden">
      <Nav /> {/* <FAQPage/> */}{" "}
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="choose" element={<Choose />} />{" "}
        <Route path="signIn" element={<SignUpAndLoginPage />} />{" "}
        <Route path="doctorSigIn" element={<LoginSignupDoctor />} />
        <Route path="services" element={<ServicesPage />} />{" "}
        <Route path="team" element={<OurTeam showFooter={false} />} />{" "}
        <Route path="about" element={<AboutPage />} />{" "}
        <Route path="form" element={<FormPage />} />{" "} 
        <Route
          path="faq"
          element={<FAQPage showFooter={true} showBanner={true} />}
        />
        <Route path="patient" element={<Patient />} />{" "}
        <Route path="blog" element={<PostsPage showNav={true} />} />
        <Route path="doctors" element={<Doctors showNav={true} />} />
        <Route path="doctorsHome" element={<DoctorsHome />} />
        <Route path="doctorProfile" element={<DoctorProfile />} />{" "}
        <Route path="editprofile" element={<EditProfilePage />} />
        <Route path="editDoctorProfile" element={<DoctorEditProfile />} />
        <Route path="profile" element={<Profile />} />
        <Route path="NotificationPage" element={<NotificationPage />} />{" "}
        <Route path="contact" element={<ContactUs />} />{" "}
        <Route path="managePosts" element={<ManagePosts />} />
        <Route path="ManageUsers" element={<ManageUsers />} />
        <Route path="ManageAvailability" element={<ManageAvailability />} />
        <Route path="ManageMeeting" element={<ManageMeeting />} />

        
     

        

      </Routes>{" "}
    </div>
  );
}

export default App;
