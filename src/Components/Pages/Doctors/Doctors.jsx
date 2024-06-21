import React from "react";
import img1 from "../../../photos/ui ux home/ahmed.jpg";
import image10 from "../../../assets/images/10.jpg";
import image11 from "../../../assets/images/11.jpg";
import Footer from "../../Footer/Footer";
import DoctorsCard from "../../PostCard/DoctorsCard";

export default function Doctors(showNav)
{
    return (
        <>
            <div className="mx-auto min-h-screen  bg-light mt-10 py-20 ">
                <div className="flex flex-col justify-center items-center">
                    <div className="">
                        <h1 className="text-center py-6 font-headingFont mt-4">
                            Our Doctor's
                        </h1>
                    </div>
                    {/* Body */}
                    <div className="grid grid-cols-1 gap-4 ">
                        <DoctorsCard
                            id={1}
                            src={image11}
                            doctorName="Heba Ahmed"
                            availableDays="Sunday - Monday"
                            availableTimeFrom="6 pm"
                            availableTimeTo=" 10 pm"
                            date="10-5-2021"
                            content="Hello, its very good website."
                            email="heba@gmail.com"
                            doctor={true}
                        />

                        <DoctorsCard
                            id={2}
                            src={img1}
                            doctorName="Ahmed Hany"
                            availableDays="Sunday - Monday"
                            availableTimeFrom="6 pm"
                            availableTimeTo=" 10 pm"
                            date="11-7-2023"
                            content="Hello, its very good website."
                            email="ahmed20011107@gmail.com"
                            doctor={true}
                        />
                        <DoctorsCard
                            id={3}
                            src={image11}
                            doctorName="Heba Ahmed"
                            availableDays="Sunday - Monday"
                            availableTimeFrom="6 pm"
                            availableTimeTo=" 10 pm"
                            date="10-5-2021"
                            content="Hello, its very good website."
                            email="heba@gmail.com"
                            doctor={true}
                        />

                        <DoctorsCard
                            id={4}
                            src={image10}
                            doctorName="Ahmed Hany"
                            availableDays="Sunday - Monday"
                            availableTimeFrom="6 pm"
                            availableTimeTo=" 10 pm"
                            date="11-7-2023"
                            content="Hello, its very good website."
                            email="ahmed20011107@gmail.com"
                            doctor={true}
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
