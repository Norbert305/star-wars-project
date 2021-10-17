import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailsPlanet = props => {
	const { store, actions } = useContext(Context);
	let { theid } = useParams();
	const planet = store.placePlanets[theid];

	return (
		<div className="card mli-3 text-center" style={{ maxWidth: "940px" }}>
			<div className="row no-gutters">
				<div className="col-md-4">
					<img
						src="https://cdn.europosters.eu/image/750/posters/star-wars-the-mandalorian-dark-i81807.jpg"
						className="card-img"
						alt="..."
					/>
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title">{planet && planet.name}</h5>
						<ul className="hidden">
							<strong>
								<li className="card-text">Climate: {planet && planet.climate}</li>
								<li className="card-text">Diameter: {planet && planet.diameter}</li>
								<li className="card-text">Gravity: {planet && planet.gravity}</li>
								<li className="card-text">Orbital Period: {planet && planet.orbital_period}</li>
								<li className="card-text">Population: {planet && planet.population}</li>
								<li className="card-text">Rotation Period: {planet && planet.period}</li>
								<li className="card-text">Surface Water: {planet && planet.surface_water}</li>
								<li className="card-text">Terrain: {planet && planet.terrain}</li>
							</strong>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

DetailsPlanet.propTypes = {
	match: PropTypes.object
};
