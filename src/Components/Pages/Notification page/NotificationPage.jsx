import React from 'react';
import Footer from '../../Footer/Footer';

export default function NotificationPage()
{
    const meetings = [
        { topic: 'Meeting with Team', status: 'Scheduled', link: '#' },
        { topic: 'Project Discussion', status: 'Ongoing', link: '#' },
        { topic: 'Client Call', status: 'Completed', link: '#' },
    ];

    return (
        <>
            <div className="mt-40 mb-44 container">
                <h1 className="text-2xl font-bold text-nav mb-4 font-headingFont">Notification Page</h1>
                <div className="max-w-5xl mx-auto">
                    <table className="min-w-[75%] mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                        <thead>
                            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th className="py-3 px-6 text-left font-headingFont text-lg">Topic</th>
                                <th className="py-3 px-6 text-left font-headingFont text-lg">Status</th>
                                <th className="py-3 px-6 text-center font-headingFont text-lg">Join Meeting</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm font-light">
                            {meetings.map((meeting, index) => (
                                <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6 text-left">{meeting.topic}</td>
                                    <td className="py-3 px-6 text-left">{meeting.status}</td>
                                    <td className="py-3 px-6 text-center">
                                        <a
                                            href={meeting.link}
                                            className="bg-nav no-underline text-white px-4 py-2 rounded-md hover:bg-white hover:text-nav hover:border-nav hover:border-2"
                                        >
                                            Join
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer/>
        </>
    );
}
