import React from "react";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav justify-content-between flex-grow-1">
          <li className="nav-item">
            <a className="text-white nav-link" href="#">
              Experience
            </a>
          </li>
          <li className="nav-item">
            <a className="text-white nav-link" href="#">
              Education
            </a>
          </li>
          <li className="nav-item">
            <a className="text-white nav-link" href="#">
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a className="text-white nav-link" href="#">
              Hobbies
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
