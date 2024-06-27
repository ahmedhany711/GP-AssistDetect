import React from 'react'
import "./PostCard.scss";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function AvailabilityCard(props)
{
    return (
        <div className=" h-fit flex  flex-wrap items-center justify-start bg-white rounded-2xl px-10 py-7  w-full text-nav relative">
            <div className=" flex flex-row items-center justify-start gap-3">
                {/* Icons */}
                <div className='flex justify-end absolute md:top-3 right-5 bottom-3 duration-300 '>
                    <div className='flex  justify-end gap-2'>
                        <FaRegEdit className='text-3xl  cursor-pointer  lg:text-2xl hover:scale-125' onClick={() =>
                        {
                            props.onEdit(props.id);
                        }} />
                        <MdDelete className='text-3xl lg:text-2xl cursor-pointer hover:scale-125' onClick={() =>
                        {
                            props.onDelete(props.id);
                        }} />
                    </div>
                </div>
                <div className="flex flex-col justify-center gap-1 mb-10 md:mb-0">
                    {/* Day */}
                    <div className='mx-auto mb-4 flex border-b-2 border-nav md:border-0'>
                        <h3 className="mx-auto my-0 p-0 pb-2 font-headingFont text-3xl"> {props.day}</h3>

                    </div>
                    {/* Hours */}
                    <div className="flex flex-col md:flex-row md:justify-between gap-10 md:w-[500px] items-end mx-auto">
                        <h3 className="m-0 p-0 font-headingFont text-2xl text-gray-700">
                            From : <span className='text-3xl text-nav '>{props.from}</span>
                        </h3>

                        <h3 className="m-0 p-0 font-headingFont text-gray-700 text-2xl">
                            To: <span className='text-nav text-3xl'>{props.to}</span>
                        </h3>
                    </div>

                </div>
            </div>
        </div>
    );
}

