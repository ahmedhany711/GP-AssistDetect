import React from "react";
import Progress from "../Progress/Progress";
import image6 from "../../assets/images/6.jpg";

const WhyChooseUs = () => {
  return (
    <div>
      <section className="my-10 py-10">
        {/* Body */}
        <div id="" className="flex gap-4 justify-center ">
          <div data-aos="zoom-in" className="me-3 ms-1 ">
            <img src={image6} className=" rounded-xl " />
          </div>

          <div data-aos="fade-up" dat-aos-offset={300} className="pl-6 mx-auto">
            {/* Title */}
            <div className="space-y-5">
              <span className="col-12  text-[17px] ">WHY CHOOSE US</span>

              <h3 className="font-headingFont text-6xl font-medium">
                Commited to Your Mental Well Being
              </h3>

              <div>
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
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
