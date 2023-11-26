import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { CardCharacters} from "./cardcharacters";
import "../../styles/home.css";

export const Characters = () => {
	const { store } = useContext(Context);
	return (
	<div className="contenedorcardscharacter">
		
				{store.characters.map((item, index) => {
					return (
						<div
							key={index}
							className="divcard m-5">
								<CardCharacters name={item.name} gender ={item.gender} hair_color={item.hair_color} eye_color={item.eye_color} index={index}/>		
											
						</div>
					);
				})}
			
	</div>
);
}