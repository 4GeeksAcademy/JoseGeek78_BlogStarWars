import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { CardNaves } from "./cardnaves.js";
import "../../styles/home.css";

export const Starships = () => {
	const { store } = useContext(Context);
	return (
	<div className="contenedorcardsplanets">
		
				{store.startships.map((item, index) => {
					return (
						<div
							key={index}
							className="divcard m-5">
								<CardNaves name={item.name} model ={item.model} manufacturer={item.manufacturer} index={index}/>		
											
						</div>
					);
				})}
			
	</div>
);
}