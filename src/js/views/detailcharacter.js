import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/detailplanet.css";

export const DetailCharacter = () => {
	const { store } = useContext(Context);
    const {idcharacter} = useParams();
    const [datacharacter, setDatacharacter]=useState(null);
    
    useEffect(() => {
        console.log(store.characters)
        console.log (idcharacter)
        if (idcharacter !=null) {
          // Cargar los datos del contacto si se está editando
        const characterData = store.characters.find((item, index) => index == idcharacter);
         if(characterData){
            setDatacharacter(characterData)
         }
        }
      }, [idcharacter, store.characters]);
    
      if(!datacharacter){
        return <p>Loading...</p>;
      }

	return (
	<div className="contenedordetail col-md-10 mx-auto">
		<div className="contenedorimgdatos">
            <div className="imgdetail p-2 text-center fs-2 text text-secondary-emphasis"><p className="imgdet">800x600</p></div>
            <div className="contenedortexto p-2">
                <h1>{datacharacter.name}</h1>
                <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit</p>
            </div>
        </div>
        <div>
            <table className="tabledescrip mt-3">
                <thead>
                    <tr>
                    <th scope="col "><p className="text-danger">Name </p></th>
                    <th scope="col"><p className="text-danger">Birth <br></br>Year</p></th>
                    <th scope="col "><p className="text-danger">Gender</p></th>
                    <th scope="col"><p className="text-danger">Height</p></th>
                    <th scope="col "><p className="text-danger">Skin<br></br>Color</p></th>
                    <th scope="col "><p className="text-danger">Eye<br></br>Color</p></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td className="text-danger">{datacharacter.name}</td>
                    <td className="text-danger">{datacharacter.birth_year}</td>
                    <td className="text-danger">{datacharacter.gender}</td>
                    <td className="text-danger">{datacharacter.height}</td>
                    <td className="text-danger">{datacharacter.skin_color}</td>
                    <td className="text-danger">{datacharacter.eye_color}</td>
                    </tr>
                    </tbody>
            </table>
        </div>
	</div>
);
}