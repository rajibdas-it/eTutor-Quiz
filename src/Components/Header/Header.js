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
          <NavLink to="/">Home</NavLink>
          <NavLink to="/quiz">Quiz</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/statistics">Statistics</NavLink>
        </Navbar.Collapse>
      </Navbar>
    </div>

  );
};

export default Header;
