import React from "react";

const Experiences = () => {
  return (
    <div className="experience">
      <h3> Experiences</h3>
      <div className="exp-1">
        <h4>Alternance assistant chef de projet / DevOps</h4>
        <h5>Tecknowmetrix, Voiron(38) Sept.2021-Sept.2022</h5>
        <ul>
          <li>Mise en place et amélioration continu de Jira au sein de TKM </li>
          <li>Former l'équipe R&D sur git pour l'utilisation de bitbucket</li>
          <li>Création d'un processus de cycle de vie d'un logiciel </li>
        </ul>
      </div>
      <div className="exp-2">
        <h4>Stagiaire en électronique embarquée</h4>
        <h5>Systel Electronique, Montchanin (71) Avr.2021 – Juin.2021 </h5>
        <p>
          Stage de fin d'étude en DUT, au poste de technicien en électronique
          dans le bureau R&D. Prototypage et conception d'une carte électronique
          pour la recharge par induction d'une télécommande pilotant des vannes.
        </p>
      </div>
    </div>
  );
};

export default Experiences;
