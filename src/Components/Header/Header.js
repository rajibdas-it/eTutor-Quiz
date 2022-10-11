import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar } from "flowbite-react";

const Header = () => {

  return (
    <div className="shadow-lg">
      <Navbar
        fluid={true}
        rounded={true}

      >
        <Navbar.Brand>
          <Link to="/"><p className="ml-4 text-3xl font-bold">e<span className="text-blue-400">Tutor</span></p></Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/quiz">Quiz</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/statistics">Statistics</NavLink>
          </li>
        </Navbar.Collapse>
      </Navbar>
    </div>

  );
};

export default Header;
