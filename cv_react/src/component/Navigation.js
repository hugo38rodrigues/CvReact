import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img src="./hugo.png" alt="profil-pic"></img>
          <h3> Hugo Rodrigues</h3>
        </div>
      </div>
      <div className="navigation">
        <ul>
          <li>
            <NavLink exact to="/">
              <i className="fas fa-home"></i>
              <span>Acceuil</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/Competence">
              <i className="fas fa-mountain"></i>
              <span>Compétences</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/Portfolio">
              <i className="fas fa-images"></i>
              <span>Portfolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/Contact">
              <i className="fas fa-adress-book"></i>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="socialNetwork">
        <ul>
          <li>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>Github
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/rodrigues-hugo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>Linkedin
            </a>
          </li>
        </ul>
      </div>
      <div className="signature">
        <p>Hugo Rodrigues - 2022</p>
      </div>
    </div>
  );
};
export default Navigation;
