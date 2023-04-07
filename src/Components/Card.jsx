import React from "react";
import { Link } from "react-router-dom";
import { ContextProvider, useContextGlobal } from './utils/global.context';
import { useState } from "react";


const Card = ({ name, username, id }) => {

  const {state} = useContextGlobal();
 

  const addFav = () => {
    let existe = false 
    let Favoritos = state.favs
    Favoritos.forEach(e => {
        if (e.id === id) {
            existe = true
            let index = Favoritos.indexOf(e)
            Favoritos.splice(index,1)
        }
    }) 
    if (existe === false) {
        Favoritos.push({ 
            "name":name,
            "username":username,
            "id":id
        })
        localStorage.setItem("favs", JSON.stringify(Favoritos))
        alert("El odontologo se ha agregado correctamente")
    } else {
        localStorage.setItem("favs", JSON.stringify(Favoritos))
        alert("Odontologo eliminado de favoritos")
    }
    state.favs(Favoritos)
}


  return (
    <div className="card"  style={{color:state.theme.color}}>
         <img src="/images/doctor.jpg" alt="Doctor" />
         <h2><Link to={`/${id}`} style={{color:state.theme.color}}> {name} </Link></h2>
         <h3 >{username}</h3>
         <button onClick={addFav} className="favButton">	ADD ⭐</button>
    
    </div>
  );
};

export default Card;
