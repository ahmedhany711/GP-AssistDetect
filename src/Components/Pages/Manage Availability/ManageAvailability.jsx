import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AvailabilityCard from '../../Cards/AvailabilityCard';
import Footer from '../../Footer/Footer';

export default function ManageAvailability()
{
    const [availability, setAvailability] = useState(false);
    const [availabilityList, setAvailabilityList] = useState([
        { id: 1, day: "Monday ", from: "6 pm", to: "10 pm" },
        { id: 2, day: "Friday ", from: "4 pm", to: "11 pm" },
    ]);
    const [newAvailability, setNewAvailability] = useState({
        id: null,
        day: '',
        from: '',
        to: ''
    });

    const [isEditing, setIsEditing] = useState(false);

    function addAvailability(e)
    {
        e.preventDefault();
        if (isEditing) {
            const updatedList = availabilityList.map(item =>
                item.id === newAvailability.id ? newAvailability : item
            );
            setAvailabilityList(updatedList);
            setIsEditing(false);
        } else {
            const updatedAvailabilityList = [
                ...availabilityList,
                { ...newAvailability, id: Date.now() }
            ];
            setAvailabilityList(updatedAvailabilityList);
        }

        setNewAvailability({
            id: null,
            day: '',
            from: '',
            to: ''
        });
        setAvailability(false);
    }

    function editAvailability(id)
    {
        const availabilityToEdit = availabilityList.find(item => item.id === id);
        setNewAvailability(availabilityToEdit);
        setAvailability(true);
        setIsEditing(true);
    }

    function deleteAvailability(id)
    {
        const updatedList = availabilityList.filter(item => item.id !== id);
        setAvailabilityList(updatedList);
    }

    return (
        <>
            <div className='bg-light'>
                <div className=" container  min-h-screen  mt-10 py-20 px-10">
                    <div className="flex flex-col justify-center items-center">
                        {/* Body */}
                        <div className="grid grid-cols-1   gap-6 mt-12 mb-10">
                            {availabilityList.map((availability, index) => (
                                <AvailabilityCard
                                    key={index}
                                    day={availability.day}
                                    from={availability.from}
                                    to={availability.to}
                                    onEdit={() => editAvailability(availability.id)}
                                    onDelete={() => deleteAvailability(availability.id)}
                                />
                            ))}
                        </div>
                        <div className="">
                            {/* Buttons */}
                            <div
                                data-aos="fade-up"
                                data-aos-offset="-100"
                                className="flex justify-center gap-3 items-center pb-2 my-10"
                            >
                                {/* Create Availability Button */}
                                <div>
                                    <Link
                                        className="no-underline text-nav bg-white hover:bg-nav hover:text-white border-2 border-nav hover:border-4 hover:border-white px-12 py-3 rounded-md font-contentFont font-light transition duration-300 text-2xl"
                                        onClick={() => setAvailability(!availability)}
                                    >
                                        {isEditing ? "Edit Availability" : "Create Availability"}
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Form to Add/Edit Availability */}
                        {availability && (
                            <form onSubmit={addAvailability} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mb-10">
                                <div className="mb-4">
                                    <label className="block text-nav text-sm font-bold mb-2 " htmlFor="Day">
                                        Day
                                    </label>
                                    <input
                                        type="text"
                                        id="Day"
                                        value={newAvailability.day}
                                        onChange={(e) => setNewAvailability({ ...newAvailability, day: e.target.value })}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-nav text-sm font-bold mb-2" htmlFor="from">
                                        From
                                    </label>
                                    <input
                                        type="text"
                                        id="from"
                                        value={newAvailability.from}
                                        onChange={(e) => setNewAvailability({ ...newAvailability, from: e.target.value })}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-nav text-sm font-bold mb-2" htmlFor="to">
                                        To
                                    </label>
                                    <input
                                        type="text"
                                        id="to"
                                        value={newAvailability.to}
                                        onChange={(e) => setNewAvailability({ ...newAvailability, to: e.target.value })}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        required
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <button
                                        type="submit"
                                        className="no-underline text-nav bg-white hover:bg-nav hover:text-white border-2 border-nav hover:border-white px-4 py-2 rounded-md font-contentFont font-light  duration-300 "
                                    >
                                        {isEditing ? "Update Availability" : "Add Availability"}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() =>
                                        {
                                            setAvailability(false);
                                            setIsEditing(false);
                                            setNewAvailability({ id: null, day: '', from: '', to: '' });
                                        }}
                                        className="bg-nav text-white px-4 py-2 rounded-md hover:text-nav border-2 border-nav hover:bg-white font-contentFont font-light  duration-300 "
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        )}

                     
                    </div>
                </div>
            </div>
            <Footer/>
        </>

    );
}
