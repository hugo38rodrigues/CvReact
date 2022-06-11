import React from "react";

const Experiences = () => {
  return (
    <div className="experience">
      <h3> Experiences</h3>
      <div className="exp-1">
        <h4>Alternance assistant chef de projet / DevOps</h4>
        <h5>Tecknowmetrix, Voiron(38) Sept.2021-Sept.2022</h5>
        <p>
          J'ai effectuer mon alternance au poste de d'assistant chef de projet /
          DevOps. En tant qu'assistant chef de projet j'ai mis en place un
          processus de cycle de vie d'un logiciel avec la refonte du processus
          de release de l'ntrerpise Tecknowmetrix. J'ai aussi formé l'équipe R&d
          à l'utilisation de Git et Bitbucket. En tant que DevOps, j'ai été en
          charge d'installer, de congigurer et de faire intéragir Jira,
          Confluence, Bitbucket et Slack entre eux.
        </p>
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
      <div className="formation">
        <h3>Certification Openclassrooms</h3>
        <div className="form-1">
          <h4>2022</h4>
          <p>Débutez avec React</p>
        </div>
        <div className="form-2">
          <h4>2021</h4>
          <p>Démarrez votre application python</p>
        </div>
        <div className="form-3">
          <h4>2021</h4>
          <p>Comprendre le web</p>
        </div>
        <div className="form-4">
          <h4>2021</h4>
          <p>Apprenez à programmer avec javaScript</p>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
