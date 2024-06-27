import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import SignUpAndLoginPage from './Login_Signup';
import LoginSignupDoctor from './Login_Signup_Doctor';

export default function Choose()
{
    const [patient, setPatient] = useState(false);

    return (
        <div className='mt-40'>
            {/* Buttons */}
            <div
                data-aos="fade-up"
                data-aos-offset="-100"
                className="flex justify-center gap-3 items-center py-2 "
            >
                {/* 1st */}

                <div>
                    <Link
                        className="no-underline text-nav bg-white hover:bg-nav hover:text-white border-2 border-nav hover:border-4 hover:border-white px-4 py-3 rounded-md text-xl font-contentFont font-light transition duration-300"
                        onClick={() =>
                        {
                            setPatient(true)
                        }
                        }
                    >
                        As Patient
                    </Link>
                </div>

                {/* 2nd */}
                <div>
                    <Link
                        onClick={() =>
                        {
                            setPatient(false)
                        }}
                        className="no-underline text-nav bg-white hover:bg-nav hover:text-white border-2 border-nav hover:border-4 hover:border-white px-4 py-3 rounded-md text-xl font-contentFont font-light transition duration-300"
                    >
                        As Doctor
                    </Link>
                </div>
            </div>
            <div className='-my-40 -mb-60 '>
                {patient ? (<SignUpAndLoginPage />) : (<LoginSignupDoctor />)}
            </div>
        </div>
    )
}
