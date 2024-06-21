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

function App() {
  // Animation
  useEffect(() => {
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
    <div id="body" className="font-contentFont">
      <Nav /> {/* <FAQPage/> */}{" "}
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="signIn" element={<SignUpAndLoginPage />} />{" "}
        <Route path="about" element={<AboutPage />} />{" "}
        <Route path="services" element={<ServicesPage />} />{" "}
        <Route path="team" element={<OurTeam showFooter={false} />} />{" "}
        <Route path="form" element={<FormPage />} />{" "}
        <Route path="patient" element={<Patient />} />{" "}
        <Route path="blog" element={<PostsPage showNav={true} />} />

        <Route path="doctors" element={<Doctors showNav={true} />} />
        <Route path="doctorsHome" element={<DoctorsHome  />} />
        <Route path="doctorProfile" element={<DoctorProfile />} />{" "}
        <Route path="editDoctorProfile" element={<DoctorEditProfile />} />

        <Route path="contact" element={<ContactUs />} />{" "}
        <Route path="profile" element={<Profile />} />
        <Route
          path="faq"
          element={<FAQPage showFooter={true} showBanner={true} />}
        />
        <Route path="editprofile" element={<EditProfilePage />} />
      </Routes>{" "}
    </div>
  );
}

export default App;
