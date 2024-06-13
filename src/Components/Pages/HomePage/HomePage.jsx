<<<<<<< HEAD

import "./HomePage.scss";
=======
import { useEffect } from "react";
import "./HomePage.scss";
import axios from "axios";
import Swal from "sweetalert2";
import { WOW } from "wowjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import MemberCard from "../../components/MemberCard/MemberCard";
>>>>>>> 8e28f0b407a25b7122303b83c3a5f28aa3de6d59
import image2 from "../../assets/images/2.jpg";
import { Link } from "react-router-dom";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { faHandshake } from "@fortawesome/free-regular-svg-icons";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { faBrain } from "@fortawesome/free-solid-svg-icons";

function HomePage() {
  return (
    <div className="col-12" id="HomePage">

      <section id="sec2" className="col-12">
        <h1 className="col-12">Who we are?</h1>
        <div id="Right_LeftDIVS" className="col-12">
          <div className="leftDiv col-lg-6  col-md-12  col-12">
            <p className="col-10">
              Welcome to our empowering online community dedicated to overcoming
              depression. Our webpage is a beacon of hope, offering valuable
              insights, resources, and support for individuals facing the
              challenges of depression. From early detection tools and
              informative articles to a nurturing online community and
              professional gu idance, we are here to help you take the first
              step towards healing. Break the silence, find solace, and embark
              on a journey towards mental well-being with us. You are not alone.
            </p>

            <Link to="/About" ><button>READ MORE</button></Link>
          </div>

          <div className="rightDiv col-lg-5  col-md-12  col-12">
<<<<<<< HEAD
            <img src={image2}  alt=""/>
=======
            <img src={image2} />
>>>>>>> 8e28f0b407a25b7122303b83c3a5f28aa3de6d59
          </div>
        </div>
      </section>
      {/* section2 end */}


      {/* section5 start */}
      <section id="sec5" className="col-12">
        <div className="content col-12">
          <span className="col-12">OUR SERVICES</span>
          <h1 className="col-12">Your Mental Health Is Our Priority</h1>
        </div>

        <div id="serviceCards" className="col-12">
          <ServiceCard
            icon={faBrain}
            title="Depression detection"
            description="Detect and address depression early with our webpage's tools and resources,
            promoting mental health awareness and proactive well-being."
          />

          <ServiceCard
            icon={faLightbulb}
            title="Suggesting associations to help"
            description="Discover depression support on our webpage through resources,
            community connections, and assistance for a journey towards well-being."
          />

          <ServiceCard
            icon={faHandshake}
            title="meet with doctor"
            description="Find depression support on our webpage: informative content,
            community connection, and confidential Zoom meetings with professionals."
          />
        </div>
      </section>
      {/* section5 end */}



      {/* section7 start */}

      <section id="sec7" className="col-12">
        <h1 className="col-12">Mental Health Support Anytime, Anywhere</h1>
        <button className="">MAKE TEST Now</button>
      </section>
      {/* section7 end */}


    </div>
  );
}
export default HomePage;
