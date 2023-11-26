import React, { Component } from "react";

export const CharacterCard = (props) => (
	<div> 
        <div className="card" style={{width: "18rem"}}>
  <img src={`https://starwars-visualguide.com/assets/img/characters/${props.id + 1}.jpg`}
                onError={(e) => {
                    e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
                }} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.character?.name}</h5>
    <p className="card-text">Height: {props.character?.height}</p>
    <p className="card-text">Mass: {props.character?.mass}</p>
    <p className="card-text">Hair Color: {props.character?.hair_color}</p>
    <p className="card-text">Skin Color: {props.character?.skin_color}</p>
    <p className="card-text">Birth Year: {props.character?.birth_year}</p>
    <p className="card-text">Eye Color: {props.character?.eye_color}</p>
    <p className="card-text">Gender: {props.character?.gender}</p>
    <p className="card-text">Home World: {props.character?.home_world}</p>
    <p className="card-text">Species: {props.character?.species}</p>





    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
);