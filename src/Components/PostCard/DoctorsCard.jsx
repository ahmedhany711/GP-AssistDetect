import React, { useState } from "react";

export default function DoctorsCard(props)
{
    const [showModal, setShowModal] = useState(false);
    const [meetingTopic, setMeetingTopic] = useState("");

    const handleRequestMeeting = (e) =>
    {
        e.preventDefault();
        setShowModal(true);
    };

    const handleCloseModal = () =>
    {
        setShowModal(false);
        setMeetingTopic("");
    };

    const handleConfirm = () =>
    {
        console.log("Meeting Topic:", meetingTopic, "With Doctor ID:", props.id);
        handleCloseModal();
    };

    return (
        <div
            key={props.id}
            className="h-fit flex items-center bg-white rounded-2xl px-10 py-7 w-[800px] flex-wrap"
        >
            <div className="flex items-start justify-between w-full py-3">
                <div className="flex flex-col justify-start gap-4">
                    <h3 className="m-0 p-0 font-headingFont">{props.doctorName}</h3>
                    <p>Email :- {props.email}</p>
                    <p>
                        Available-Days :- <span className="ml-10">{props.availableDays}</span>
                    </p>
                    <div className="flex gap-10">
                        <p>From :- {props.availableTimeFrom}</p>
                        <p>To :- {props.availableTimeTo}</p>
                    </div>
                </div>
                <div className="">
                    <img
                        src={props.src}
                        alt="no image"
                        className="h-52 w-52 rounded-full"
                    />
                </div>
            </div>
            <div className="mx-auto">
                <a
                    href="#"
                    onClick={handleRequestMeeting}
                    className="bg-nav text-white px-4 py-2 rounded-md no-underline text-xl hover:bg-white hover:border-2 hover:border-nav hover:text-nav"
                >
                    Request Meeting
                </a>
            </div>

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md relative">
                        <span
                            className="absolute top-4 right-6 text-gray-500 hover:text-black cursor-pointer text-2xl"
                            onClick={handleCloseModal}
                        >
                            X
                        </span>
                        <h2 className="text-2xl font-bold mb-4">Request Meeting</h2>
                        <label htmlFor="meetingTopic" className="block text-sm font-medium text-gray-700">
                            Meeting Topic:
                        </label>
                        <input
                            type="text"
                            id="meetingTopic"
                            value={meetingTopic}
                            onChange={(e) => setMeetingTopic(e.target.value)}
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-nav focus:border-nav"
                        />
                        <div className="mt-4 flex justify-end">
                            <button
                                onClick={handleConfirm}
                                className="bg-nav text-white px-4 py-2 rounded-md hover:bg-nav-dark"
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
