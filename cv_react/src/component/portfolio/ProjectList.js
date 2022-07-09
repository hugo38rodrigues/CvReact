import React, { Component } from "react";
import { portfolioData } from "../../data/portfolioDatas";
import Project from "./Project";

export default class ProjectList extends Component {
  state = {
    project: portfolioData,
    radios: [
      { id: 1, value: "React" },
      { id: 2, value: "CSS" },
      { id: 3, value: "PHP" },
      { id: 4, value: "JAVA" },
    ],
    selectedRadio: "React",
  };
  handleRadio = (event) => {
    let radio = event.tagert.value;
    this.setState({ selectedRadio: radio });
    console.log(event.target.value);
  };
  render() {
    let { project, radios, selectedRadio } = this.state;
    return (
      <div className="portfolioContent">
        <ul className="radioDisplay">
          {radios.map((radio) => {
            return (
              <li key={radio.id}>
                <input
                  type="radio"
                  name="radio"
                  checked={radio.value === selectedRadio}
                  value={radio.value}
                  id={radio.value}
                  onChange={this.handleRadio}
                />
                <label htmlFor={radio.value}>{radio.value}</label>
              </li>
            );
          })}
        </ul>
        <div className="projects">
          {project
            .filter((item) => item.languages.includes(selectedRadio))
            .map((item) => {
              return <Project item={item} key={item.id} />;
            })}
        </div>
      </div>
    );
  }
}
