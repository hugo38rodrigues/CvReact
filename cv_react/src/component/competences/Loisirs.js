import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { faBaseball } from "@fortawesome/free-solid-svg-icons";

const Loisirs = () => {
  return (
    <div className="hobbies">
      <h3>Intérets</h3>
      <ul className="hobby">
        <li>
          <FontAwesomeIcon icon={faDesktop} /> Informatique
        </li>
        <li>
          <FontAwesomeIcon icon={faFire} />
          Pompier
        </li>
        <li>
          <FontAwesomeIcon icon={faBaseball} /> Handball
        </li>
      </ul>
    </div>
  );
};

export default Loisirs;
