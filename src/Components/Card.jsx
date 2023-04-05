import React from "react";
import { Link } from "react-router-dom";
import { ContextProvider, useContextGlobal } from './utils/global.context';



const Card = ({ name, username, id }) => {

  const {state} = useContextGlobal();

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card"  style={{color:state.theme.color}}>


         <img src="/images/doctor.jpg" alt="Doctor" />
         <h2><Link to={`/${id}`} style={{color:state.theme.color}}> {name} </Link></h2>
         <h3 >{username}</h3>
         <button onClick={addFav} className="favButton">Pepino</button>
    
    </div>
  );
};

export default Card;
