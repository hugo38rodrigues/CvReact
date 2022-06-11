import React from "react";
import Navigation from "../component/Navigation";
const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1> Hugo Rodrigues</h1>
          <h2>Développeur Front-end</h2>
          <div className="pdf">
            <a href="../asset/CV_entreprise.pdf" download>
              Télécharger le CV en pdf
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
