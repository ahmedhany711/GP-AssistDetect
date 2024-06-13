import React from "react";
<<<<<<< HEAD

=======
import { useDispatch, useSelector } from "react-redux";
>>>>>>> 8e28f0b407a25b7122303b83c3a5f28aa3de6d59
import Slider from "react-slick";
import "../../../src/App.scss";
import image3 from "../../assets/images/3.jpg";
import image4 from "../../assets/images/4.jpg";
import image5 from "../../assets/images/5.jpg";
import image7 from "../../assets/images/7.jpg";

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="sec6" className="mb-32  pb-20">
      <div className="content col-12">
        {/* Title  Section*/}
        <span className="col-12  text-xl">TESTIMONIALS</span>

        <h1 className="col-12 font-headingFont font-medium">
          What They Say About Us
        </h1>
      </div>
      {/* Body Section */}
      <div className="col-12 overflow-hidden ">
        <Slider {...settings} className="z-10 mb-10">
          {/* 1 SLider */}
          <div data-aos="zoom-in" className="py-12">
            <div className="flex flex-col gap-1 bg-white  rounded-2xl shadow-md mx-3 px-4  pt-1 pb-2  text-gray-900 mt-2   relative h-[370px]">
              {/* Text */}
              <div>
                {/* Content */}
                <p className="text-sm  m-0 ">
                  <span className="text-nav font-bold text-2xl mr-2 "> "</span>I
                  stumbled upon this website while searching for answers about
                  my mental health struggles, and it's been a complete
                  game-changer. The online assessments helped me identify
                  underlying issues I wasn't aware of, and the personalized
                  recommendations guided me towards effective solutions. I
                  finally feel like I'm on the path to understanding and
                  managing my psychological well-being.
                  <span className="text-nav text-2xl  font-bold "> "</span>
                </p>
              </div>

              {/* Info */}
              <div className="flex flex-col mt-auto">
                <div className="flex gap-3 items-center my-1 justify-between">
                  <div className="flex gap-3 items-center my-4">
                    {/* image */}
                    <div className=" ">
                      <img
                        src={image3}
                        alt=""
                        className="w-24 h-24 rounded-full"
                      />
                    </div>
                    {/* Name +job */}
                    <div className="flex flex-col justify-end ">
                      {/* Name */}
                      <h1 className="font-heading text-[20px] font-bold text-left mt-3">
                        Sarah Johnson
                      </h1>
                      {/* Job */}
                      <p className="font-heading  text-paragraph text-[14px] font-bold text-left ">
                        Software Engineer
                      </p>
                    </div>
                  </div>
                  {/* Quotes */}
                  <div className="  mb-auto -mt-2">
                    <p className="text-8xl  font-headingFont text-nav">,,</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2 SLider */}
          <div data-aos="zoom-in" className="py-12">
            <div className="flex flex-col gap-1 bg-white  rounded-2xl shadow-md mx-3 px-4  pt-1 pb-2  text-gray-900 mt-2   relative h-[370px]">
              {/* Text */}
              <div>
                {/* Content */}
                <p className="text-sm  m-0 ">
                  <span className="text-nav font-bold text-2xl mr-2 "> "</span>
                  This website takes a holistic approach to mental health,
                  addressing not just the symptoms but also the underlying
                  causes of psychological disorders. Through a combination of
                  therapy techniques, self-care practices, and lifestyle
                  adjustments, I've experienced profound changes in my mental
                  well-being. I'm grateful for the comprehensive support offered
                  here.
                  <span className="text-nav text-2xl  font-bold "> "</span>
                </p>
              </div>

              {/* Info */}
              <div className="flex flex-col mt-auto">
                <div className="flex gap-3 items-center my-1 justify-between">
                  <div className="flex gap-3 items-center my-4">
                    {/* image */}
                    <div className=" ">
                      <img
                        src={image4}
                        alt=""
                        className="w-24 h-24 rounded-full bg-cover"
                      />
                    </div>
                    {/* Name +job */}
                    <div className="flex flex-col justify-end ">
                      {/* Name */}
                      <h1 className="font-headingFont text-[20px] font-bold text-left mt-3">
                        Hossam AbdelRahman
                      </h1>
                      {/* Job */}
                      <p className="  text-paragraph text-[14px] font-bold text-left ">
                        Financial Analyst
                      </p>
                    </div>
                  </div>
                  {/* Quotes */}
                  <div className="  mb-auto -mt-2">
                    <p className="text-8xl  font-headingFont text-nav">,,</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3  SLider*/}
          <div data-aos="zoom-in" className="py-12">
            <div className="flex flex-col gap-1 bg-white  rounded-2xl shadow-md mx-3 px-4  pt-1 pb-2  text-gray-900 mt-2   relative h-[370px]">
              {/* Text */}
              <div>
                {/* Content */}
                <p className="text-sm  m-0 ">
                  <span className="text-nav font-bold text-2xl mr-2 "> "</span>
                  Navigating the complexities of mental health can feel
                  isolating, but this website provides a safe space for
                  self-discovery and growth. The self-assessment tools helped me
                  gain insight into my thought patterns and behaviors,
                  empowering me to make positive changes. Being part of a
                  community that understands and accepts me has been incredibly
                  validating.
                  <span className="text-nav text-2xl  font-bold "> "</span>
                </p>
              </div>

              {/* Info */}
              <div className="flex flex-col mt-auto">
                <div className="flex gap-3 items-center my-1 justify-between ">
                  <div className="flex gap-3 items-center my-4">
                    {/* image */}
                    <div className=" ">
                      <img
                        src={image5}
                        alt=""
                        className="w-24 h-24 rounded-full"
                      />
                    </div>
                    {/* Name +job */}
                    <div className="flex flex-col justify-end ">
                      {/* Name */}
                      <h1 className="font-heading text-[20px] font-bold text-left mt-3">
                        Salma Ahmed
                      </h1>
                      {/* Job */}
                      <p className="font-heading  text-paragraph text-[14px] font-bold text-left ">
                        Sales Representative
                      </p>
                    </div>
                  </div>
                  {/* Quotes */}
                  <div className="  mb-auto -mt-2">
                    <p className="text-8xl  font-headingFont text-nav">,,</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4  SLider*/}
          <div data-aos="zoom-in" className="py-12">
            <div className="flex flex-col gap-1 bg-white  rounded-2xl shadow-md mx-3 px-4  pt-1 pb-2  text-gray-900 mt-2   relative h-[370px]">
              {/* Text */}
              <div>
                {/* Content */}
                <p className="text-sm  m-0 ">
                  <span className="text-nav font-bold text-2xl mr-2 "> "</span>A
                  beacon of hope in challenging times: This platform came into
                  my life when I was at my lowest point, and it's been a guiding
                  light ever since. The compassionate support and wealth of
                  resources have been instrumental in my journey towards
                  recovery. I'm grateful to have found such a caring community
                  that champions mental well-being.
                  <span className="text-nav text-2xl  font-bold "> "</span>
                </p>
              </div>

              {/* Info */}
              <div className="flex flex-col mt-auto">
                <div className="flex gap-3 items-center my-1 justify-between">
                  <div className="flex gap-3 items-center my-4">
                    {/* image */}
                    <div className=" ">
                      <img
                        src={image7}
                        alt=""
                        className="w-24 h-24 rounded-full"
                      />
                    </div>
                    {/* Name +job */}
                    <div className="flex flex-col justify-end ">
                      {/* Name */}
                      <h1 className="font-heading text-[20px] font-bold text-left mt-3">
                        Tarek Ibrahim
                      </h1>
                      {/* Job */}
                      <p className="font-heading  text-paragraph text-[14px] font-bold text-left ">
                        Marketing Manager
                      </p>
                    </div>
                  </div>
                  {/* Quotes */}
                  <div className="  mb-auto -mt-2">
                    <p className="text-8xl  font-headingFont text-nav">,,</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
