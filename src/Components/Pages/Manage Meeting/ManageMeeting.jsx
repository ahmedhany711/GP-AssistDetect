import React, { useState } from 'react';
import Footer from '../../Footer/Footer';

export default function ManageMeeting()
{
    const [meetings, setMeetings] = useState([
        { topic: 'Meeting with Team', patientID: 1, Accepted: true, status: '' },
        { topic: 'Project Discussion', patientID: 2, Accepted: true, status: '' },
        { topic: 'Client Call', patientID: 3, Accepted: true, status: '' },
    ]);

    const handleAccept = (index) =>
    {
        const updatedMeetings = [...meetings];
        updatedMeetings[index].Accepted = true;
        updatedMeetings[index].status = "Accepted";
        setMeetings(updatedMeetings);
    };

    const handleReject = (index) =>
    {
        const updatedMeetings = [...meetings];
        updatedMeetings[index].Accepted = false;
        updatedMeetings[index].status = "Rejected";
        setMeetings(updatedMeetings);
    };

    return (
        <div className='bg-light' >
            <div className="py-44 container">
                <h1 className="text-3xl font-bold text-nav mb-4 font-headingFont">Meetings List</h1>
                <div className="max-w-5xl md:mx-auto">
                    <table className="min-w-[75%] mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                        <thead>
                            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th className="py-3 px-6 text-left font-headingFont text-lg">Topic</th>
                                <th className="py-3 px-6 text-left font-headingFont text-lg">Patient ID</th>
                                <th className="py-3 px-6 text-left font-headingFont text-lg">Accept</th>
                                <th className="py-3 px-6 text-left font-headingFont text-lg">Reject</th>
                                <th className="py-3 px-6 text-left font-headingFont text-lg">Status</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm font-light">
                            {meetings.map((meeting, index) => (
                                <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6 text-left">{meeting.topic}</td>
                                    <td className="py-3 px-6 text-left">{meeting.patientID}</td>
                                    <td className="py-3 px-6 text-left">
                                        <button
                                            className="bg-white no-underline border-2 text-nav px-4 py-2 rounded-md border-nav hover:bg-nav hover:text-white hover:border-nav hover:border-2 duration-300"
                                            onClick={() => handleAccept(index)}
                                        >
                                            Accept
                                        </button>
                                    </td>
                                    <td className="py-3 px-6 text-left">
                                        <button
                                            className="bg-nav no-underline text-white px-4 py-2 rounded-md hover:bg-white hover:text-nav hover:border-nav hover:border-2 duration-300"
                                            onClick={() => handleReject(index)}
                                        >
                                            Reject
                                        </button>
                                    </td>
                                    <td className="py-3 px-6 text-left">{meeting.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='mt-12'>
                <Footer />
            </div>
        </div>
    );
}
