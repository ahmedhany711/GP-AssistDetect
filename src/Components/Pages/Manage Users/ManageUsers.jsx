import React from 'react'
import UsersCard from '../../Cards/UsersCard'
import img1 from "../../../photos/ui ux home/ahmed.jpg";
// import image10 from "../../../assets/images/10.jpg";
// import image11 from "../../../assets/images/11.jpg";
import Footer from "../../Footer/Footer";
export default function ManageUsers()
{
    return (

        <>
            <div className="mx-auto min-h-screen  bg-light mt-10 py-20 ">
                <div className="flex flex-col justify-center items-center">
                    <div className="">
                        <h1 className="text-center py-6 font-headingFont mt-4 text-nav text-5xl" >
                            Our User's
                        </h1>
                    </div>
                    {/* Body */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
                        <UsersCard
                            id={1}
                            src={img1}
                            username="Ahmed Hany"
                            birthday="07-11-2001"
                            email="ahmed20011107@gmail.com"

                        />

                        <UsersCard
                            id={2}
                            src={img1}
                            username="Ahmed Hany"
                            birthday="07-11-2001"
                            email="ahmed20011107@gmail.com"

                        />
                        <UsersCard
                            id={3}
                            src={img1}
                            username="Ahmed Hany"
                            birthday="07-11-2001"
                            email="ahmed20011107@gmail.com"
                        />

                        <UsersCard
                            id={4}
                            src={img1}
                            username="Ahmed Hany"
                            birthday="07-11-2001"
                            email="ahmed20011107@gmail.com"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}




