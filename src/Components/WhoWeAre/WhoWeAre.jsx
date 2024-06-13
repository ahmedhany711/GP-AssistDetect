import React from "react";
import image2 from "../../assets/images/2.jpg";
import { Link } from "react-router-dom";
import Box from "../Box/Box";

const WhoWeAre = ({ showButton }) => {
  return (
    <div>
      {/* WHo We Are? */}
      <section id="" className="my-5 mx-5">
        <div
          data-aos="fade-up"
          data-offset={300}
          className=" grid grid-cols-2  items-start"
        >
          {/* Text */}
          <div className="space-y-10  ">
            <h5 className="mb-4 text-xl font-semibold">ABOUT ASSISTDETECT</h5>
            {/* Title */}
            <h1 className="font-headingFont font-bold text-6xl mb-4">
              Who we are?
            </h1>

            {/* P Container */}
            <div className="text-paragraph text-xl">
              <p className="col-10">
                Welcome to our empowering online community dedicated to
                overcoming depression.
              </p>
              <p>
                Our webpage is a beacon of hope, offering valuable insights,
                resources, and support for individuals facing the challenges of
                depression.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                consectetur, minus, quibusdam possimus commodi hic iusto dolores
                odit nisi qui repellat eligendi, debitis corrupti obcaecati
                nobis tenetur voluptatem perferendis enim.
              </p>
              <p>
                From early detection tools and informative articles to a
                nurturing online community and professional gu idance, we are
                here to help you take the first step towards healing. Break the
                silence, find solace, and embark on a journey towards mental
                well-being with us. You are not alone.
              </p>
            </div>
          </div>
          {/* Image */}
          <div className="flex flex-col gap-3 justify-center mt-4 items-end">
            <div>
              <img
                src={image2}
                alt=""
                className=" rounded-xl h-[370px] w-[650px]"
              />
            </div>{" "}
            {/* Box */}
            <div data-aos="fade-up">
              <Box />
            </div>
          </div>
        </div>
        <div className=""></div>
        {/* Button */}
        {showButton && (
          <div
            data-aos="zoom-out"
            data-aos-offset={130}
            className="  flex justify-start  "
          >
            <Link
              to={"/about"}
              className="border-4 no-underline border-nav px-5 py-3 rounded-lg text-nav text-3xl font-headingFont  duration-300 hover:bg-nav hover:text-white mb-3"
            >
              {" "}
              Read More
            </Link>
          </div>
        )}
      </section>
    </div>
  );
};

export default WhoWeAre;
