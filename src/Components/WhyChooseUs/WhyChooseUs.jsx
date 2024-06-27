import React from "react";
import Progress from "../Progress/Progress";
import image6 from "../../assets/images/6.jpg";

const WhyChooseUs = () =>
{
  return (
    <div>
      <section className="my-10 py-10">
        {/* Body */}
        <div id="" className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center ">
      
          {/* 1 Text */}
          <div data-aos="fade-up" dat-aos-offset={300} className="pl-6 mx-10 mb-10 lg:mx-auto lg:order-2">
            {/* Title */}
            <div className="space-y-5">
              <span className="col-12  text-[17px] ">WHY CHOOSE US</span>

              <h3 className="font-headingFont text-4xl lg:text-6xl font-bold lg:font-medium">
                Commited to Your Mental Well Being
              </h3>

              <div className="space-y-4">
                <Progress

                  animateOnRender="true"
                  name="Confidentiality"
                  precentage="95%"
                  Progress_precentage={95}
                />
                <Progress
                  animateOnRender="true"
                  name="Consumer Satisfaction"
                  precentage="98%"
                  Progress_precentage={98}
                />
                <Progress
                  animateOnRender="true"
                  name="Theraphy"
                  precentage="98%"
                  Progress_precentage={98}
                />
                <Progress
                  animateOnRender="true"
                  name="Counseling"
                  precentage="90%"
                  Progress_precentage={90}
                />
              </div>
            </div>
          </div>
          {/* 2 Image */}
          <div data-aos="zoom-in" className="me-3 ms-1 lg:order-1">
            <img src={image6} alt="error" className=" rounded-xl " />
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
