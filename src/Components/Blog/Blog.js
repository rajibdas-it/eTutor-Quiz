
import React from 'react';
import { Link } from 'react-router-dom';

const Blog = ({ blog }) => {
    // console.log(blog);
    const { id, question, img, descriptions, author_img, author_name, published_date
    } = blog

    return (
        <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 shadow-lg">
            <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
                <div className="mb-4">
                    <Link
                        to="/blogs"
                        aria-label="Article"
                        className="inline-block max-w-lg font-sans text-2xl font-bold leading-none tracking-tight text-blue-400 transition-colors duration-200 hover:text-deep-purple-accent-700 sm:text-3xl"
                    >
                        {question}
                    </Link>
                </div>
                <p className="text-base text-gray-700 md:text-lg text-justify">
                    {descriptions}
                </p>
            </div>
            <div className="mb-1 sm:text-center">
                <Link to="/blogs" aria-label="Author" className="inline-block mb-1">
                    <img
                        alt=""
                        src={author_img}
                        className="object-cover w-10 h-10 rounded-full shadow-sm"
                    />
                </Link>
                <div>
                    <Link
                        to="/blogs"
                        aria-label="Author"
                        className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
                    >
                        {author_name}
                    </Link>
                    <p className="text-sm font-medium leading-4 text-gray-600">Author</p>
                </div>
            </div>

        </div>
    );
};

export default Blog;