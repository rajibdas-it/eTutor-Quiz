import React from 'react';
import { Link } from 'react-router-dom';
import author_img from '../../Assets/rajib.jpeg'


const Blogs = () => {
    return (
        <div className='w-[80%] mx-auto mt-10'>
            <p className="mt-3 text-gray-500 text-center italic">
                As a student, you will find it helpful for better concentration and
                memory
            </p>
            <hr className="bg-black w-[85%] mx-auto mb-4" />

            <div>
                {/* Question-1 */}
                <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 shadow-lg">
                    <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
                        <div className="mb-4">
                            <Link
                                to="/blogs"
                                aria-label="Article"
                                className="inline-block max-w-lg font-sans text-2xl font-bold leading-none tracking-tight text-blue-400 transition-colors duration-200 hover:text-deep-purple-accent-700 sm:text-3xl"
                            >
                                What is the purpose of React Router?
                            </Link>
                        </div>
                        <p className="text-base text-gray-700 md:text-lg text-justify">
                            <span className='text-2xl font-bold italic'>React Router</span>  is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information. By preventing a page refresh, and using Router or Link, which is explained in more depth below, the flash of a white screen or blank page is prevented. This is one increasingly common way of having a more seamless user experience.

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
                                Rajib Das
                            </Link>
                            <p className="text-sm font-medium leading-4 text-gray-600">Author</p>
                        </div>
                    </div>

                </div>
                {/* Question-2  */}

                <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 shadow-lg">
                    <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
                        <div className="mb-4">
                            <Link
                                to="/blogs"
                                aria-label="Article"
                                className="inline-block max-w-lg font-sans text-2xl font-bold leading-none tracking-tight text-blue-400 transition-colors duration-200 hover:text-deep-purple-accent-700 sm:text-3xl"
                            >
                                How Does Context API Works?
                            </Link>
                        </div>
                        <p className="text-base text-gray-700 md:text-lg text-justify">
                            <span className='text-2xl font-bold italic'>React Context API</span> is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to prop drilling or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease. React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the store and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
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
                                Rajib Das
                            </Link>
                            <p className="text-sm font-medium leading-4 text-gray-600">Author</p>
                        </div>
                    </div>

                </div>
                {/* Question-3  */}
                <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 shadow-lg">
                    <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
                        <div className="mb-4">
                            <Link
                                to="/blogs"
                                aria-label="Article"
                                className="inline-block max-w-lg font-sans text-2xl font-bold leading-none tracking-tight text-blue-400 transition-colors duration-200 hover:text-deep-purple-accent-700 sm:text-3xl"
                            >
                                What is useRef?
                            </Link>
                        </div>
                        <p className="text-base text-gray-700 md:text-lg text-justify">
                            <span className='text-2xl font-bold italic'>useRef Hook</span> allows you to persist values between renders. useRef is like a “box” that can hold a mutable value in its current property. It can be used to store a mutable value that does not cause a re-render when updated. useRef creates a plain JavaScript object. It can be used to access a DOM element directly. When we need to send value or child component we can use forwardRef. useRef doesn't notify you when its content changes. Mutating the .current property doesn't cause a re-render.
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
                                Rajib Das
                            </Link>
                            <p className="text-sm font-medium leading-4 text-gray-600">Author</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Blogs;