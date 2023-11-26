import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "./card.js";
import "../../styles/home.css";

export const Planets = () => {
	const { store } = useContext(Context);
	return (
	<div className="contenedorcardsplanets">
		
				{store.planets.map((item, index) => {
					return (
						<div
							key={index}
							className="divcard m-5">
								<Card name={item.name} population ={item.population} terrain={item.terrain} index={index}/>		
											
						</div>
					);
				})}
			
	</div>
);
}