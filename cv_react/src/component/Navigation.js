import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faMountain } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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
            <NavLink exact to="/" activeclassname="navActive">
              <FontAwesomeIcon icon={faHome} />
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/Competence" activeclassname="navActive">
              <FontAwesomeIcon icon={faMountain} />
              <span>Compétences</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/Portfolio" activeclassname="navActive">
              <FontAwesomeIcon icon={faImage} />
              <span>Portfolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/Contact" activeclassname="navActive">
              <FontAwesomeIcon icon={faAddressBook} />
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="socialNetwork" activeclassname="navActive">
        <ul>
          <li>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/rodrigues-hugo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
        </ul>
        <div className="signature">
          <p>Hugo Rodrigues - 2022</p>
        </div>
      </div>
    </div>
  );
};
export default Navigation;
