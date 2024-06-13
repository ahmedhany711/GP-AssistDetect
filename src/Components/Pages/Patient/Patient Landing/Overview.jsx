import React, { useState } from "react";
import image2 from "../../../../assets/images/Home-banner.jpg";
import { Link } from "react-router-dom";
import FAQPage from "../../FAQ/FAQ";
export default function Overview({ showFaq }) {
     const [isFaqVisible, setIsFaqVisible] = useState(showFaq);
  return (
    <div>
      <section id="" className="my-5 mx-5">
        <div
          data-aos="fade-up"
          data-offset={100}
          className=" grid grid-cols-2  gap-5 items-start"
        >
          {/* Text */}
          <div className="  ">
            {/* Title */}
            <h1 className="font-headingFont font-bold text-5xl mb-4">
              Overview
            </h1>

            {/* P Container */}
            <div className="text-paragraph text-lg">
              <p className="col-10">
                Depressive disorder (also known as depression) is a common
                mental disorder. It involves a depressed mood or loss of
                pleasure or interest in activities for long periods of time.
              </p>
              <p>
                Depression is different from regular mood changes and feelings
                about everyday life. It can affect all aspects of life,
                including relationships with family, friends and community. It
                can result from or lead to problems at school and at work.
              </p>
              <p>
                Depression can happen to anyone. People who have lived through
                abuse, severe losses or other stressful events are more likely
                to develop depression. Women are more likely to have depression
                than men.
              </p>
              <p>
                An estimated 3.8% of the population experience depression,
                including 5% of adults (4% among men and 6% among women), and
                5.7% of adults older than 60 years. Approximately 280 million
                people in the world have depression (1). Depression is about 50%
                more common among women than among men. Worldwide, more than 10%
                of pregnant women and women who have just given birth experience
                depression (2). More than 700 000 people die due to suicide
                every year. Suicide is the fourth leading cause of death in
                15–29-year-olds.
              </p>
              <p>
                Although there are known, effective treatments for mental
                disorders, more than 75% of people in low- and middle-income
                countries receive no treatment (3). Barriers to effective care
                include a lack of investment in mental health care, lack of
                trained health-care providers and social stigma associated with
                mental disorders.{" "}
              </p>
            </div>
          </div>
          {/* Image */}
          <div className="flex justify-end my-auto">
            <img
              src={image2}
              alt=""
              className=" rounded-3xl w-[80%] h-[450px]"
            />
          </div>
        </div>
        <div data-aos="fade-up" className="  mt-5 flex justify-start  ">
          <Link
            onClick={() => {
              setIsFaqVisible(!isFaqVisible);
            }}
            className="border-4 no-underline border-nav px-5 py-3 rounded-lg text-nav text-3xl font-headingFont  duration-300 hover:bg-nav hover:text-white mb-3"
          >
            {" "}
            {isFaqVisible ? "Read Less" : "Read More"}
          </Link>
        </div>
      </section>
      {isFaqVisible && <FAQPage showFooter={false} showBanner={false} />}
    </div>
  );
}
