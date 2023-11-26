import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { BsHeart } from "react-icons/bs";

export const CardCharacters = (props) => {
    const { store, actions } = useContext(Context);

    function clickhearts(name) {
        if (!store.hearts.includes(name)) {
            const updatedHearts = [...store.hearts, name];
            actions.setfavorites(updatedHearts);
        }
    }
    
   
	return (
		<div className="cardcharacter card" >
            <div className = "imagenCard text-center fs-3"><p className="imgcard text-secondary-emphasis">400x200</p></div>
            <div className="card-bodycharacter">
                <div className="px-3">
                <h5 className="card-title fw-bold py-2">{props.name}</h5>
                <p>Gender: {props.gender}</p>
                <p>Hair Color: {props.hair_color}</p>
                <p>Eye-Color: {props.eye_color}</p>
                </div>
                <div className="d-flex justify-content-between p-3">
                    <Link to={`/detailcharacter/${props.index}`}>
                        <button className="Blearn "><p className="text-primary mt-1">Learn more!</p></button>
                    </Link>
                    <button className="Bheart" onClick={()=>{clickhearts(props.name)} }><BsHeart/></button>
                </div>
            </div>
          
        </div>
	);
};