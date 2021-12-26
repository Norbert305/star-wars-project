import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Details = () => {
	const { store, actions } = useContext(Context);
	let { theid } = useParams();
	const charecter = store.placeCharacters[theid];

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
					<div className="card-liody">
						<h5 className="card-title">{charecter && charecter.name}</h5>
						<ul className="hidden">
							<strong>
								<p>
									<li className="card-text">Birth Year: {charecter && charecter.birth_year}</li>
								</p>
								<p>
									<li className="card-text">Eye Color: {charecter && charecter.eye_color}</li>
								</p>
								<p>
									<li className="card-text">Gender: {charecter && charecter.gender}</li>
								</p>
								<p>
									<li className="card-text">Hair Color: {charecter && charecter.hair_color}</li>
								</p>
								<p>
									<li className="card-text">Height: {charecter && charecter.height}</li>
								</p>
								<p>
									<li className="card-text">Mass: {charecter && charecter.mass}</li>
								</p>
								<p>
									<li className="card-text">Skin Color: {charecter && charecter.skin_color}</li>
								</p>
							</strong>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
