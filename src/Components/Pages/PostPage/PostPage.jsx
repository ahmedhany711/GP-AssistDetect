import React from "react";
import PostCard from "../../PostCard/PostCard";
import image10 from "../../../assets/images/10.jpg";
import image11 from "../../../assets/images/11.jpg";
import PatientNav from "../../Nav/Patient/PatientNav";
import Footer from "../../Footer/Footer";

export default function PostsPage(showNav) {
  return (
    <>
      {showNav && <PatientNav />}
      <div className="mx-auto min-h-screen  bg-light mt-10 py-20 ">
        <div className="flex flex-col justify-center items-center">
          <div className="">
            <h1 className="text-center py-6 font-headingFont">Our Community</h1>
          </div>
          {/* Body */}
          <div className="grid grid-cols-1 gap-4 ">
            <PostCard
              src={image11}
              publisherName="Heba Ahmed"
              date="10-5-2021"
              content="Hello, its very good website."
            />

            <PostCard
              src={image10}
              publisherName="Ahmed Hany"
              date="11-7-2023"
              content="Hello, its very good website."
            />
            <PostCard
              src={image11}
              publisherName="Heba Ahmed"
              date="10-5-2021"
              content="Hello, its very good website."
            />

            <PostCard
              src={image10}
              publisherName="Ahmed Hany"
              date="11-7-2023"
              content="Hello, its very good website."
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
