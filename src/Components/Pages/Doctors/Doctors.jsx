import React from "react";
import img1 from "../../../photos/ui ux home/ahmed.jpg";
// import image10 from "../../../assets/images/10.jpg";
// import image11 from "../../../assets/images/11.jpg";
import Footer from "../../Footer/Footer";
import image3 from "../../../assets/images/3.jpg";
import image4 from "../../../assets/images/4.jpg";
import image5 from "../../../assets/images/5.jpg";
// import DoctorsCard from "../../Cards/DoctorsCard";
import MemberCard from "../../MemberCard/MemberCard";

const doctorsData = [
    {
        id: 1,
        img: image3,
        name: "Heba Ahmed",
        availableDays: "Sunday , Monday",
        availableTimeFrom: "6 pm",
        availableTimeTo: "10 pm",
        date: "10-5-2021",
        content: "Hello, it's a very good website.",
        email: "heba123@gmail.com",
        doctor: true,
    },
    {
        id: 2,
        img: img1,
        name: "Ahmed Hany",
        availableDays: "Sunday , Monday",
        availableTimeFrom: "6 pm",
        availableTimeTo: "10 pm",
        date: "11-7-2023",
        content: "Hello, it's a very good website.",
        email: "ahmed20011107@gmail.com",
        doctor: true,
    },
    {
        id: 3,
        img: image4,
        name: "Mohamed Amgad",
        availableDays: "Sunday , Monday",
        availableTimeFrom: "6 pm",
        availableTimeTo: "10 pm",
        date: "10-5-2021",
        content: "Hello, it's a very good website.",
        email: "m.amgad611@gmail.com",
        doctor: true,
    },
    {
        id: 4,
        img: image5,
        name: "Marwa Abdin",
        availableDays: "Sunday , Monday",
        availableTimeFrom: "6 pm",
        availableTimeTo: "10 pm",
        date: "11-7-2023",
        content: "Hello, it's a very good website.",
        email: "marwa_abdin123@gmail.com",
        doctor: true,
    },
    {
        id: 5,
        img: image4,
        name: "Abdelrahamn saad",
        availableDays: "Sunday , Monday",
        availableTimeFrom: "6 pm",
        availableTimeTo: "10 pm",
        date: "11-7-2023",
        content: "Hello, it's a very good website.",
        email: "abdo2007@gmail.com",
        doctor: true,
    }
];

export default function Doctors({showNav})
{
    return (
        <div className="bg-light">
            <div className="container min-h-screen   mt-10 py-20 ">
                <div className="flex flex-col justify-center items-center">
                    {/* <div className="">
                        <h1 className="text-center py-6 font-headingFont mt-4 text-nav">
                            Our Doctor's
                        </h1>
                    </div> */}

                    {/* Body with new layout*/}
                    {/* OUR TEAM */}
                    <section id="sec3" className="col-12 bg-light -mt-32 ">
                        {/* Title */}
                        <div className="title_sec3  col-12">
                            <span id="sec3_span " className="font-bold mt-5">
                                OUR DOCTOR'S TEAM
                            </span>
                            <h1 className="font-headingFont">Experienced Pyschologist</h1>
                        </div>
                        {/* Images */}
                        <div id="" className="grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-3">
                            {doctorsData.map((doctor) => (
                                <MemberCard
                                    key={doctor.id}
                                    id={doctor.id}
                                    img={doctor.img}
                                    name={doctor.name}
                                    availableDays={doctor.availableDays}
                                    availableTimeFrom={doctor.availableTimeFrom}
                                    availableTimeTo={doctor.availableTimeTo}
                                    date={doctor.date}
                                    content={doctor.content}
                                    email={doctor.email}
                                    doctor={doctor.doctor}
                                />
                            ))}


                            {/* <MemberCard img={image4} name="Ahmed Okasha" />
                            <MemberCard img={image5} name="Rania El Mahdy" /> */}
                        </div>
                    </section>
                    {/* old layout */}
                    {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  ">
                        {doctorsData.map((doctor) => (
                            <DoctorsCard
                                key={doctor.id}
                                id={doctor.id}
                                img={doctor.img}
                                name={doctor.name}
                                availableDays={doctor.availableDays}
                                availableTimeFrom={doctor.availableTimeFrom}
                                availableTimeTo={doctor.availableTimeTo}
                                date={doctor.date}
                                content={doctor.content}
                                email={doctor.email}
                                doctor={doctor.doctor}
                            />
                        ))}
                    </div> */}
                </div>
            </div>
            {showNav &&
            <Footer />
            }
        </div>
    );
}
