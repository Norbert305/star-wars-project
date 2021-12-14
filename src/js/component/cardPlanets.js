import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export function CardPlanets(props) {
	const { store, actions } = useContext(Context);
	return (
		<div
			className="card"
			style={{
				minWidth: "18rem",
				maxWidth: "18rem",
				minHeight: "22rem"
			}}>
			<img
				className="card-img-top"
				src="https://static.wikia.nocookie.net/starwars/images/9/98/Taris_TOR.png"
				alt="Card image cap"
			/>
			<div className="card-body">
				<h4 className="card-title">{props.planet.name}</h4>
				<div>
					<p>
						<strong>Population:</strong>
						{" " + props.planet.population}
					</p>
					<p>
						<strong>Terrain:</strong>
						{" " + props.planet.terrain}
					</p>
					<p>
						<strong>Climate:</strong>
						{" " + props.planet.climate}
					</p>
				</div>
				<Link to={`detailsPlanet/${props.position}`}>
					<button className="btn btn-primary">Learn More</button>
				</Link>{" "}
				<button
					type="button"
					className="btn btn-secondary"
					//using onClick action to push props.planet.name into the navbar.js file
					onClick={() => actions.addFavorites(props.planet.name)}>
					<i className="fas fa-heart fa-lg" />
				</button>
			</div>
		</div>
	);
}
//Passing props in CardPlanets component using earlier mapping from starwars.js file
CardPlanets.propTypes = {
	planet: PropTypes.object,
	position: PropTypes.number
};
