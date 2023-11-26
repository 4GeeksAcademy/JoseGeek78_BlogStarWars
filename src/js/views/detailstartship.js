import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/detailplanet.css";

export const DetailStartships = () => {
	const { store } = useContext(Context);
    const {idstartship} = useParams();
    const [datastarship, setDatastarship]=useState(null);
    
    useEffect(() => {
        console.log(store.startships)
        console.log (idstartship)
        if (idstartship !=null) {
          // Cargar los datos del contacto si se está editando
        const startshipData = store.startships.find((item, index) => index == idstartship);
         if(startshipData){
            setDatastarship(startshipData)
         }
        }
      }, [idstartship, store.startships]);
    
      if(!datastarship){
        return <p>Loading...</p>;
      }

	return (
	<div className="contenedordetail col-md-10 mx-auto">
		<div className="contenedorimgdatos">
            <div className="imgdetail p-2 text-center fs-2 text text-secondary-emphasis"><p className="imgdet">800x600</p></div>
            <div className="contenedortexto p-2">
                <h1>{datastarship.name}</h1>
                <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit</p>
            </div>
        </div>
        <div>
            <table className="tabledescrip mt-3">
                <thead>
                    <tr>
                    <th scope="col"><p className="text-danger">Name</p></th>
                    <th scope="col"><p className="text-danger">Model</p></th>
                    <th scope="col"><p className="text-danger">Starship<br></br>class</p></th>
                    <th scope="col"><p className="text-danger">Manufacturer</p></th>
                    <th scope="col"><p className="text-danger">Max atmosphering<br></br>Speed</p></th>
                    <th scope="col"><p className="text-danger">Cargo <br></br>Capacity</p></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td className="text-danger">{datastarship.name}</td>
                    <td className="text-danger">{datastarship.model}</td>
                    <td className="text-danger">{datastarship['starship-class']}</td>
                    <td className="text-danger">{datastarship.manufacturer}</td>
                    <td className="text-danger">{datastarship.max_atmosphering_speed}</td>
                    <td>{datastarship.cargo_capacity}</td>
                    </tr>
                    </tbody>
            </table>
        </div>
	</div>
);
}