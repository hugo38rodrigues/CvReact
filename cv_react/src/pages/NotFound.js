import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
const NotFound = () => {
  return (
    <div className="notFound">
      <div className="notFoundContent">
        <h3> Désoler cette page n'existe pas</h3>
        <NavLink exact to="/">
          <FontAwesomeIcon icon={faHome} /> <span>Acceuil</span>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
