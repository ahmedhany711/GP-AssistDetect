import React from "react";
import "./PostCard.scss";

export default function PostCard(props)
{
  return (
    <div className=" h-fit flex  flex-wrap items-center justify-start bg-white rounded-2xl px-10 py-7  w-fit">
      <div className=" flex flex-row items-center justify-start gap-4">
        <img
          src={props.src}
          alt="no imge"
          className="h-32 w-32 rounded-full "
        />
        {/* info */}
        <div className="flex flex-col justify-center gap-1">
          <h3 className="m-0 p-0 mb-1 font-headingFont">{props.publisherName}</h3>
          {props.doctor ? null : (
            <p className="text-sm m-0 p-0 text-paragraph pl-2">
              {formatDate(props.date)}
            </p>
          )}
        </div>
      </div>

      {props.doctor ? (
        <div className=" m-2 mt-12 col-12 pl-12 text-2xl">
          <p>{props.email}</p>
        </div>
      ) : (
        <div className=" mx-2 mt-12 col-12 pl-12 text-2xl">
          <p>{props.content}</p>
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
