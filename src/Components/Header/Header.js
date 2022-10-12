import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar } from "flowbite-react";

const Header = () => {
  return (
    <div className="shadow-lg">
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand>
          <Link to="/">
            <p className="ml-4 text-3xl font-bold">
              e<span className="text-blue-400">Tutor</span>
            </p>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <li>
            <NavLink to="/home" className={({ isActive }) => isActive ? 'text-blue-400 font-semibold' : 'text-black font-semibold'}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/topics" className={({ isActive }) => isActive ? 'text-blue-400 font-semibold' : 'text-black font-semibold'}>Topics</NavLink>
          </li>

          {/* <li>
            <NavLink to="/blog" className={({ isActive }) => isActive ? 'text-blue-400 font-semibold' : 'text-black font-semibold'}>Blog</NavLink>
          </li> */}
          <li>
            <NavLink to="/blogs" className={({ isActive }) => isActive ? 'text-blue-400 font-semibold' : 'text-black font-semibold'}>Blogs</NavLink>
          </li>
          <li className="mr-3">
            <NavLink to="/statistics" className={({ isActive }) => isActive ? 'text-blue-400 font-semibold md:mr-2' : 'text-black font-semibold md:mr-2'}>Statistics</NavLink>
          </li>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
