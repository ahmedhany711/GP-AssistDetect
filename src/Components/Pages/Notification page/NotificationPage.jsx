import React, { useEffect } from 'react';
import Footer from '../../Footer/Footer';

export default function NotificationPage()
{
    const meetings = [
        {id:'', topic: '', status: '', link: '' },

    ];
    // const meetings = [
    //     { topic: 'Meeting with Team', status: 'Scheduled', link: '#' },
    //     { topic: 'Project Discussion', status: 'Ongoing', link: '#' },
    //     { topic: 'Client Call', status: 'Completed', link: '#' },
    // ];

    // const [fullName, setFullName] = useState("");
    // const [birth, setBirth] = useState("");
    // const [error, setError] = useState("");

    useEffect(() =>
    {
        const fetchResponseMeetings = async () =>
        {
            const token = localStorage.getItem("token");
            try {
                const response = await fetch(
                    "https://b7a2-102-40-210-151.ngrok-free.app/api/patient/response-meetings",
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            accept: "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                console.log("Response Meetings data:", response);

                if (response.ok) {
                    const data = await response.json();
                    console.log("Response Meetings data :-", data);
                    meetings.id = data.data.id;
                    meetings.topic = data.data.topic;
                    meetings.status = data.data.status;
                    meetings.link = data.data.join_url;


                    // setEmail(data.data.email);
                    // setFullName(data.data.name);
                    // setBirth(data.data.birth);
                    // setImage(data.data.profile_image);
                } else {
                    console.error("Failed to fetch Response Meetings data:", response.status);
                    // Handle error here
                }
            } catch (error) {
                console.error("Error:", error);
                // Handle error here
            }
        };

        fetchResponseMeetings();
    }, []);
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
            <Footer />
        </>
    );
}
