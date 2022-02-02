import React, { Component } from 'react';
import ProgressBar from "./ProgressBar";
export default class Langages extends Component {
    state={
        langages:[
            {id: 1, value:"Javascript", xp: 0.7},
            {id: 2, value:"HTML5/CSS3", xp: 0.7},
            {id: 3, value: "Python", xp: 0.5},   
            {id: 4, value: "C++", xp: 1}
        ],
        framworks:[
            {id: 1, value: "React",xp: 0.2}

        ]
    }
  render() {
      let{langages,framworks}=this.state;

    return(
        <div className='"languagesFrameworks'>
            <ProgressBar 
                langages={langages}
                className="langesDisplay"
                title="langages"
            />
            <ProgressBar 
                framworks={framworks}
                className="framworksDisplay"
                title="framworks"
            />

        </div>
    ) 
  }
}
