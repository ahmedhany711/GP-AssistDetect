import React from "react";

export default function UsersCard(props)
{


    return (
        <div
            key={props.id}
            className="h-fit flex items-center bg-white rounded-2xl px-10 pb-7 shadow-md w-full flex-wrap"
        >
            <div className="flex items-center flex-col justify-between w-full py-3 gap-12">
             
                    <img
                        src={props.src}
                        alt="no imagee"
                        className="h-64 w-[100%] object-cover rounded-xl"
                    />
            
                <div className="flex flex-col justify-center items-center gap-2">
                    <h2 className="m-0 p-0 pb-4 font-headingFont">{props.username}</h2>
                    <p className="text-nav">Email :- <span className="pl-3 text-gray-700">{props.email}</span></p>
                    <p className="text-nav">Birthday :- <span className="pl-3 text-gray-700">{props.birthday}</span></p>

                </div>
            </div>



        </div>
    );
}
