import React, { useState, useEffect } from "react";
import PostCard from "../../Cards/PostCard";
import Footer from "../../Footer/Footer";
import image10 from "../../../assets/images/10.jpg";
import image11 from "../../../assets/images/11.jpg";

const postsData = [
  {
    src: image11,
    publisherName: "Heba Ahmed",
    date: "10-5-2021",
    content: "Hello, it's a very good website.",
  },
  {
    src: image10,
    publisherName: "Ahmed Hany",
    date: "11-7-2023",
    content: "Hello, it's a very good website.",
  },
  {
    src: image11,
    publisherName: "Heba Ahmed",
    date: "10-5-2021",
    content: "Hello, it's a very good website.",
  },
  {
    src: image10,
    publisherName: "Ahmed Hany",
    date: "11-7-2023",
    content: "Hello, it's a very good website.",
  },
];

export default function PostsPage()
{
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() =>
  {
    // Simulate data fetching
    setTimeout(() =>
    {
      setPosts(postsData);
      setLoading(false);
      setError(false)
    }, 1000);
  }, []);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (error) {
    return <div className="min-h-screen flex items-center justify-center">Error: {error.message}</div>;
  }

  return (
    <>
      <div className="mx-auto min-h-screen  bg-light mt-10 py-20 ">
        <div className="flex flex-col justify-center items-center mx-auto ">
          <div className="">
            <h1 className="text-center py-6 font-headingFont">Our Community</h1>
          </div>
          {/* Body */}
          <div className="grid grid-cols-1 lg:grid-cols-2  gap-6 px-10">
            {posts.map((post, index) => (
              <PostCard
                key={index}
                src={post.src}
                publisherName={post.publisherName}
                date={post.date}
                content={post.content}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
