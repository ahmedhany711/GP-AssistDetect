import React from "react";
import image3 from "../../assets/images/3.jpg";
import image4 from "../../assets/images/4.jpg";
import image5 from "../../assets/images/5.jpg";
import MemberCard from "../MemberCard/MemberCard";
import HowItWorks from "../HowItWorks/HowItWorks";
import Footer from "../Footer/Footer";

const OurTeam = ({ showFooter }) => {
  return (
    <div>
      {/* OUR TEAM */}
      <section id="sec3" className="col-12 bg-light ">
        {/* Title */}
        <div className="title_sec3  col-12">
          <span id="sec3_span " className="font-bold mt-5">
            OUR TEAM
          </span>
          <h1 className="font-headingFont">Experienced Pyschologist</h1>
        </div>
        {/* Images */}
        <div id="" className="grid grid-cols-3">
          <MemberCard img={image3} name="Mona M. Amer" />
          <MemberCard img={image4} name="Ahmed Okasha" />
          <MemberCard img={image5} name="Rania El Mahdy" />
        </div>
      </section>
      <HowItWorks />
      {showFooter && <Footer />};
    </div>
  );
};

export default OurTeam;
