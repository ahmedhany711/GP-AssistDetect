import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import image10 from "../../../assets/images/10.jpg";
import image11 from "../../../assets/images/11.jpg";
import PostCardForDoctor from '../../Cards/PostCardForDoctor';

export default function ManagePosts()
{
    // Default posts
    const defaultPosts = [
        {
            id: 1,
            src: image11,
            publisherName: "Heba Ahmed",
            date: "10-5-2021",
            content: "Hello, its very good website."
        },
        {
            id: 2,
            src: image10,
            publisherName: "Ahmed Hany",
            date: "11-7-2023",
            content: "Hello, its very good website."
        }
    ];

    // Load posts from local storage and merge with default posts
    const [posts, setPosts] = useState(() =>
    {
        const storedPosts = localStorage.getItem('posts');
        return storedPosts ? JSON.parse(storedPosts) : defaultPosts;
    });

    const [newPost, setNewPost] = useState({
        id: null,
        src: '',
        publisherName: '',
        date: '',
        content: ''
    });
    const [isEditing, setIsEditing] = useState(false);
    const [create, setCreate] = useState(false);

    // Save posts to local storage whenever posts state changes
    useEffect(() =>
    {
        localStorage.setItem('posts', JSON.stringify(posts));
    }, [posts]);

    function addPost(e)
    {
        e.preventDefault();
        if (isEditing) {
            const updatedPosts = posts.map(post =>
                post.id === newPost.id ? newPost : post
            );
            setPosts(updatedPosts);
            setIsEditing(false);
        } else {
            const updatedPosts = [
                ...posts,
                { ...newPost, id: Date.now() }
            ];
            setPosts(updatedPosts);
        }

        setNewPost({ id: null, src: '', publisherName: '', date: '', content: '' });
        setCreate(false);
    }

    function editPost(id)
    {
        const postToEdit = posts.find(post => post.id === id);
        setNewPost(postToEdit);
        setCreate(true);
        setIsEditing(true);
        window.scrollTo(1, 1)
    }

    function deletePost(id)
    {
        const updatedPosts = posts.filter(post => post.id !== id);
        setPosts(updatedPosts);
        localStorage.setItem('posts', JSON.stringify(updatedPosts));
    }

    return (
        <div className='bg-light'>
            <div className="container mx-auto min-h-screen  mt-10 py-20">
                <div className="flex flex-col justify-center items-center">
              
                    <div className="">
                        {/* Buttons */}
                        <div
                            data-aos="fade-up"
                            data-aos-offset="-100"
                            className="flex justify-center gap-3 items-center pb-2 my-10"
                        >
                            {/* Create Post Button */}
                            <div>
                                <Link
                                    className="no-underline text-nav bg-white hover:bg-nav hover:text-white border-2 border-nav hover:border-4 hover:border-white px-12 py-3 rounded-md font-contentFont font-light transition duration-300 text-2xl"
                                    onClick={() => setCreate(!create)}
                                >
                                    Create Post
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Form to Add/Edit Post */}
                    {create && (
                        <form onSubmit={addPost} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="publisherName">
                                    Publisher Name
                                </label>
                                <input
                                    type="text"
                                    id="publisherName"
                                    value={newPost.publisherName}
                                    onChange={(e) => setNewPost({ ...newPost, publisherName: e.target.value })}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
                                    Date
                                </label>
                                <input
                                    type="date"
                                    id="date"
                                    value={newPost.date}
                                    onChange={(e) => setNewPost({ ...newPost, date: e.target.value })}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
                                    Content
                                </label>
                                <textarea
                                    id="content"
                                    value={newPost.content}
                                    onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                ></textarea>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="src">
                                    Image URL
                                </label>
                                <input
                                    type="text"
                                    id="src"
                                    value={newPost.src}
                                    onChange={(e) => setNewPost({ ...newPost, src: e.target.value })}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    type="submit"
                                    className="bg-white no-underline border-2 text-nav px-4 py-2 rounded-md border-nav hover:bg-nav hover:text-white hover:border-nav hover:border-2 duration-300"
                                    onClick={() =>
                                    {
                                        window.scrollTo({
                                            top: document.body.scrollHeight,
                                            behavior: 'smooth'
                                        });
                                    }}
                                >
                                    {isEditing ? "Update Post" : "Add Post"}
                                </button>
                                <button
                                    type="button"
                                    onClick={() =>
                                    {
                                        setCreate(false);
                                        setIsEditing(false);
                                        setNewPost({ id: null, src: '', publisherName: '', date: '', content: '' });
                                    }}
                                    className="bg-nav no-underline text-white px-4 py-2 rounded-md hover:bg-white hover:text-nav hover:border-nav hover:border-2 duration-300"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    )}
                    {/* Body */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-6">
                        {posts.map((post) => (
                            <PostCardForDoctor
                                key={post.id}
                                src={post.src}
                                publisherName={post.publisherName}
                                date={post.date}
                                content={post.content}
                                onEdit={() => editPost(post.id)}
                                onDelete={() => deletePost(post.id)}
                            />
                        ))}
                    </div>
                   
                </div>
            </div>
        </div>
    );
}
