import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/detailplanet.css";

export const DetailPlanet = () => {
	const { store } = useContext(Context);
    const {idplanet} = useParams();
    const [dataplanet, setDataplanet]=useState(null);
    
    useEffect(() => {
        console.log(store.planets)
        console.log (idplanet)
        if (idplanet !=null) {
          // Cargar los datos del contacto si se está editando
        const planetData = store.planets.find((item, index) => index == idplanet);
         if(planetData){
            setDataplanet(planetData)
         }
        }
      }, [idplanet, store.planets]);
    
      if(!dataplanet){
        return <p>Loading...</p>;
      }

	return (
	<div className="contenedordetail col-md-10 mx-auto">
		<div className="contenedorimgdatos">
            <div className="imgdetail p-2 text-center fs-2 text text-secondary-emphasis"><p className="imgdet">800x600</p></div>
            <div className="contenedortexto p-2">
                <h1>{dataplanet.name}</h1>
                <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit</p>
            </div>
        </div>
        <div>
            <table className="tabledescrip mt-3">
                <thead>
                    <tr>
                    <th scope="col"><p className="text-danger">Name</p></th>
                    <th scope="col text-danger"><p className="text-danger">Climate</p></th>
                    <th scope="col text-danger"><p className="text-danger">Population</p></th>
                    <th scope="col text-danger"><p className="text-danger">Orbital <br></br>Period</p></th>
                    <th scope="col text-danger"><p className="text-danger">Rotation<br></br>Period</p></th>
                    <th scope="col text-danger"><p className="text-danger">Diameter</p></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td className="text-danger">{dataplanet.name}</td>
                    <td className="text-danger">{dataplanet.climate}</td>
                    <td className="text-danger">{dataplanet.population}</td>
                    <td className="text-danger">{dataplanet.orbital_period}</td>
                    <td className="text-danger">{dataplanet.rotation_period}</td>
                    <td className="text-danger">{dataplanet.diameter}</td>
                    </tr>
                    </tbody>
            </table>
        </div>
	</div>
);
}