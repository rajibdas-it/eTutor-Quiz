import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const blogs = useLoaderData()
    return (
        <div className='w-[80%] mx-auto mt-10'>
            {/* <h1 className='text-center text-2xl font-bold text-blue-400'>React Router & Hooks Related Blogs</h1> */}
            <p className="mt-3 text-gray-500 text-center italic">
                As a student, you will find it helpful for better concentration and
                memory
            </p>
            <hr className='w-[60%] mt-3' />
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} />)
            }
            {/* </div> */}
        </div>
    );
};

export default Blogs;