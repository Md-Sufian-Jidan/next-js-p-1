import Link from 'next/link';
import React from 'react';

const BlogsPage = () => {
    const blogs = [
        {
            "slug": "introduction-to-react",
            "title": "Introduction to React",
            "description": "Learn the basics of React, a popular JavaScript library for building user interfaces, and understand its core concepts such as components, state, and props."
        },
        {
            "slug": "mastering-nodejs",
            "title": "Mastering Node.js",
            "description": "Delve into the world of Node.js and discover how to create scalable and efficient server-side applications using JavaScript."
        },
        {
            "slug": "css-grid-vs-flexbox",
            "title": "CSS Grid vs Flexbox: Which Should You Use?",
            "description": "Explore the differences between CSS Grid and Flexbox, and learn when to use each layout module to create responsive web designs."
        },
        {
            "slug": "understanding-mongodb",
            "title": "Understanding MongoDB",
            "description": "Get to know MongoDB, a NoSQL database, and learn how to perform CRUD operations, manage collections, and optimize queries."
        },
        {
            "slug": "building-restful-apis",
            "title": "Building RESTful APIs with Express.js",
            "description": "A comprehensive guide to building RESTful APIs using Express.js, covering routing, middleware, and connecting to databases."
        },
        {
            "slug": "nextjs-routing",
            "title": "An In-Depth Guide to Next.js Routing",
            "description": "Learn how to implement and manage routing in Next.js applications, including dynamic routes and nested routing strategies."
        }
    ];

    return (
        <div className='p-24'>
            <h2 className='text-3xl text-center text-rose-800'>Our Blogs</h2>
            <div>
                {
                    blogs?.map(blog => <div key={blog?.slug} className='border p-12 my-3' >
                        <h3>{blog?.slug}</h3>
                        {/* <p>{blog?.title}</p> */}
                        <p>{blog?.description}</p>
                        <div className='flex justify-end' >
                            <button className='p-2 rounded-full bg-gray-400' >
                                <Link href={`/blogs/${blog?.slug}`}>View Details</Link>
                            </button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default BlogsPage;