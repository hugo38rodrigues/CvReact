import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
const AutresCompetences = () => {
  return (
    <div>
      <div className="otherSkills">
        <h3>Autre compéternces</h3>
        <div className="list">
          <ul>
            <li>
              <FontAwesomeIcon icon={faCheckSquare} />
              Teams
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckSquare} />
              Anglais
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckSquare} />
              Méthodes agiles
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckSquare} />
              Figma
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AutresCompetences;
