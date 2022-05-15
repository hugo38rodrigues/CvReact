import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

export default class Langages extends Component {
  state = {
    langages: [
      { id: 1, value: "Javascript", xp: 0.9 },
      { id: 2, value: "HTML5/CSS3", xp: 1 },
      { id: 3, value: "Python", xp: 0.5 },
      { id: 4, value: "C++", xp: 1 },
    ],
    framworks: [{ id: 1, value: "React", xp: 1 }],
  };
  render() {
    let { langages, framworks } = this.state;

    return (
      <div className="languagesFrameworks">
        <ProgressBar
          langages={langages}
          className="langagesDisplay"
          title="langages"
        />
        <ProgressBar
          title="framworks & bibliothèque"
          langages={framworks}
          className="framworksDisplay"
        />
      </div>
    );
  }
}
