import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { CharacterCard } from "../component/charachterCard";
import { PlanetCard } from "../component/planetCard";
import { Context } from "../store/appContext";
export const Home = () => {
	const{store,actions} =useContext(Context)
	
	console.log(store) 
	return(
	<div className="text-center mt-5 container">
		<h2>Characters</h2>
		<div 
		className="characterDiv" 		
		
		>
		<div 
		className="d-flex overflow-scroll">
		{store.characters.map((item,index)=>{
			return(
				<CharacterCard character={item} id={index}/>
				
			)
		})}
		</div>
		</div>
		
		<h2>Planets</h2>
		<div className="d-flex overflow-scroll">
		{store.planet.map((item,index)=>{
			return(
				<PlanetCard planet={item} id={index}/>
				
			)
		})}


		</div>
	</div>
	)
};