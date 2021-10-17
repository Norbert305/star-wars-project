import React, { useEffect, useContext } from "react";
import { ReactDOM } from "react";
import { CardCharecters } from "./cardCharecters";
import { CardPlanets } from "./cardPlanets";
import { Context } from "../store/appContext";

export function StarWarsData() {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<div className="d-flex flex-row" style={{ width: "100%", overflow: "auto" }}>
				{store.placeCharacters.length > 0 ? (
					store.placeCharacters.map((charecter, index) => {
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
