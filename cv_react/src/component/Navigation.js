import React from "react";
import { NavLink } from "react-router-dom";


const Navigation = () => {
    return (
        <div className="sidebar">
           <div className="id">
               <div className="idContent">
                   <img src="./media/hugo.jpg" alt="profil-pic"></img>
                   <h3> Hugo Rodrigues</h3>
               </div>
           </div>
           <div className="navigation">
               <ul>
                   <NavLink exact to="/" activeClassName="navActive">
                       <i className="fas fa-home"></i>
                       <span>Acceuil</span>
                   </NavLink>
               </ul>
           </div>
            
        </div>
    );
}; 
export default Navigation;