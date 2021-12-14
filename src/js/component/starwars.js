import React, { useEffect, useContext } from "react";
import { ReactDOM } from "react";
import { CardCharecters } from "./cardCharecters";
import { CardPlanets } from "./cardPlanets";
import { Context } from "../store/appContext";
//Making StarWarsData component to map CardCharacters and CardPlanets as well as passing props through the two components
export function StarWarsData() {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<div className="d-flex flex-row" style={{ width: "100%", overflow: "auto" }}>
				{store.placeCharacters.length > 0 ? (
					store.placeCharacters.map((charecter, index) => {
						//placeCharacters mapping is from the get Characters fetch. This makes it easier to receive the character data
						//from the star wars api
						return <CardCharecters key={index} charecter={charecter} position={index} />;
					})
				) : (
					<div className="col-2 mx-auto">
						<img className="w-100" src="https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif" />
					</div>
				)}
			</div>
			<h1>Planets</h1>
			<div className="d-flex flex-row" style={{ width: "100%", overflow: "auto" }}>
				{store.placePlanets.length > 0 ? (
					store.placePlanets.map((planet, index) => {
						//placeCharacters mapping is from the get Planets fetch from flux.js file. This makes it easier to receive the Planets data
						//from the star wars api
						return <CardPlanets key={index} planet={planet} position={index} />;
					})
				) : (
					<div className="col-2 mx-auto">
						<img className="w-100" src="https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif" />
					</div>
				)}
			</div>
		</div>
	);
}
