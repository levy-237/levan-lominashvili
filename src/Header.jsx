import React from "react";
import { IconContext } from "react-icons";
import { BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
export default function Header() {
  return (
    <header>
      <Link className="name">Levan</Link>
      <div>
        <HashLink smooth to="#home">
          HOME
        </HashLink>
        <HashLink smooth to="#skills">
          TECH STACK
        </HashLink>
        <HashLink smooth to="#projects">
          PROJECTS
        </HashLink>
      </div>
      <Link
        className="header-link"
        target="_blank"
        to="https://www.linkedin.com/in/levan-lominashvili-92b770220/"
      >
        <IconContext.Provider value={{ size: "2.5rem", color: "#0077b5" }}>
          <BsLinkedin />
        </IconContext.Provider>
      </Link>
    </header>
  );
}
