import React from "react";
import "./PostCard.scss";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
export default function PostCardForDoctor(props)
{
    return (
        <div className=" h-fit flex  flex-wrap items-center justify-start bg-white rounded-2xl px-10 py-7  w-full relative">
            <div className=" flex flex-row items-center justify-start gap-4">
                {/* Icons */}
                <div className='flex justify-end absolute top-3 right-6'>
                    <div className='flex  justify-end gap-2'>
                        <FaRegEdit className='text-3xl lg:text-2xl text-nav cursor-pointer hover:scale-125' onClick={() =>
                        {
                            props.onEdit(props.id);
                        }} />
                        <MdDelete className='text-3xl lg:text-2xl cursor-pointer text-nav hover:scale-125' onClick={() =>
                        {
                            props.onDelete(props.id);
                        }} />
                    </div>
                </div>
                <img
                    src={props.src}
                    alt="no imge"
                    className="h-32 w-32 rounded-full "
                />
                {/* info */}
                <div className="flex flex-col justify-center gap-1">
                    <h3 className="m-0 p-0 font-headingFont text-wrap break-words overflow-hidden ">{props.publisherName}</h3>
                    {props.doctor ? null : (
                        <p className="text-sm m-0 p-0 text-paragraph">
                            {formatDate(props.date)}
                        </p>
                    )}
                </div>
            </div>

            {props.doctor ? (
                <div className=" mx-2 mt-12  pl-12 text-2xl max-w-full text-wrap break-words overflow-hidden">
                    {props.email}
                </div>
            ) : (
                <div className=" mx-2 mt-12  pl-12 text-2xl max-w-full text-wrap break-words overflow-hidden">
                    {props.content}
                </div>
            )}
        </div>
    );
}

const formatDate = (date) =>
{
    const options = { year: "numeric", month: "long", day: "numeric" };

    return new Date(date).toLocaleDateString("en-US", options);
};
