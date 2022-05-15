import React from "react";
import AutresCompetences from "../component/competences/AutresCompetences";
import Experiences from "../component/competences/Experiences";
import Langages from "../component/competences/Langages";
import Loisirs from "../component/competences/Loisirs";
import Navigation from "../component/Navigation";

const Competence = () => {
  return (
    <div className="competence">
      <Navigation />
      <div className="competencesContent">
        <Langages />
        <Experiences />
        <AutresCompetences />
        <Loisirs />
      </div>
    </div>
  );
};

export default Competence;
