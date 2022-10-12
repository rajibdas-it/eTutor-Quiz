import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const blogs = useLoaderData()
    return (
        <div className='w-[80%] mx-auto mt-10'>
            <p className="mt-3 text-gray-500 text-center italic">
                As a student, you will find it helpful for better concentration and
                memory
            </p>
            <hr className="bg-black w-[85%] mx-auto mb-4" />
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} />)
            }

        </div>
    );
};

export default Blogs;