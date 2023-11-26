import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Planets } from "../component/planets";
import { Starships } from "../component/starships";
import { Characters } from "../component/characters";

import "../../styles/home.css";

export const Home = () => {
	const { store } = useContext(Context);
	return (
	<div className="contenedor  col-md-10 mx-auto">
		<h1 className="text-danger fw-bold my-3">Characters</h1>
			<Characters/>
		<h1 className="text-danger fw-bold my-3">Planets</h1>
			<Planets/>
		<h1 className="text-danger fw-bold my-3">Starships</h1>
			<Starships/>
	</div>
);
}