import { Accordion } from "flowbite-react";
import React from "react";

const Blog = () => {
  return (
    <div className=" w-[80%] mx-auto mt-10 text-center">
      <div>
        <h1 className="text-3xl lg:text-4xl font-bold text-blue-400">
          Frequently Asked Questions
        </h1>
        <p className="mt-3 text-gray-500">
          As a student, you will find it helpful for better concentration and
          memory
        </p>
      </div>
      <div className="mt-5">
        <Accordion alwaysOpen={true}>
          <Accordion.Panel>
            <Accordion.Title>
              <p className="text-blue-500">
                What is the purpose of React Router?
              </p>
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                <span className="text-gray-800 font-bold text-lg">
                  React Router
                </span>{" "}
                is a standard library for routing in React. It enables the
                navigation among views of various components in a React
                Application, allows changing the browser URL, and keeps the UI
                in sync with the URL. React Router, and dynamic, client-side
                routing, allows us to build a single-page web application with
                navigation without the page refreshing as the user navigates.
                React Router uses component structure to call components, which
                display the appropriate information. By preventing a page
                refresh, and using Router or Link, which is explained in more
                depth below, the flash of a white screen or blank page is
                prevented. This is one increasingly common way of having a more
                seamless user experience.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              <p className="text-blue-500">How Does Context API Works?</p>
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                The{" "}
                <span className="text-gray-800 font-bold text-lg">
                  React Context API
                </span>{" "}
                is a way for a React app to effectively produce global variables
                that can be passed around. This is the alternative to "prop
                drilling" or moving props from grandparent to child to parent,
                and so on. Context is also touted as an easier, lighter approach
                to state management using Redux. Context API is a (kind of) new
                feature added in version 16.3 of React that allows one to share
                state across the entire app (or part of it) lightly and with
                ease. React.createContext() is all you need. It returns a
                consumer and a provider. Provider is a component that as it's
                names suggests provides the state to its children. It will hold
                the "store" and be the parent of all the components that might
                need that store. Consumer as it so happens is a component that
                consumes and uses the state.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              <p className="text-blue-500">What is useRef?</p>
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                The{" "}
                <span className="text-gray-800 font-bold text-lg">useRef </span>
                useRef Hook allows you to persist values between renders. useRef
                is like a “box” that can hold a mutable value in its current
                property. It can be used to store a mutable value that does not
                cause a re-render when updated. useRef creates a plain
                JavaScript object. It can be used to access a DOM element
                directly. When we need to send value or child component we can
                use forwardRef. useRef doesn't notify you when its content
                changes. Mutating the .current property doesn't cause a
                re-render.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    </div>
  );
};

export default Blog;
