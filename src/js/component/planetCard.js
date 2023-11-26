import React, { Component } from "react";

export const PlanetCard = (props) => (
  <div>
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={`https://starwars-visualguide.com/assets/img/planets/${
          props.id + 1
        }.jpg`}
        onError={(e) => {
          e.target.src =
            "https://starwars-visualguide.com/assets/img/placeholder.jpg";
        }}
        className="card-img-top"
        alt="..."
      />

      <div className="card-body">
        <h5 className="card-title">{props.planet?.name}</h5>
        <p className="card-text">
          Rotation Period: {props.planet?.rotation_period}
        </p>
        <p className="card-text">
          Orbital Period: {props.planet?.orbital_period}
        </p>
        <p className="card-text">Diameter: {props.planet?.diameter}</p>
        <p className="card-text">Climate: {props.planet?.climate}</p>
        <p className="card-text">Gravity: {props.planet?.gravity}</p>
        <p className="card-text">Terrain: {props.planet?.terrain}</p>
        <p className="card-text">
          Surface Water: {props.planet?.surface_water}
        </p>
        <p className="card-text">Population: {props.planet?.population}</p>

        <a href="#" className="btn btn-primary">
          Ver más
        </a>
      </div>
    </div>
  </div>
);
