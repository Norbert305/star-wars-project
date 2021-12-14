import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export function CardCharecters(props) {
	const { store, actions } = useContext(Context);
	return (
		<div
			className="card"
			style={{
				minWidth: "18rem",
				maxWidth: "18rem",
				minHeight: "22rem"
			}}>
			<img className="" src="https://cdn.wallpapersafari.com/72/5/k4Ge6b.jpg" />
			<div className="card-body">
				<h4 className="card-title">{props.charecter.name}</h4>
				<div>
					<p>
						<strong>Gender:</strong>
						{" " + props.charecter.gender}
					</p>
					<p>
						<strong>Height:</strong>
						{" " + props.charecter.height}
					</p>
					<p>
						<strong>HairColor:</strong>
						{" " + props.charecter.hair_color}
					</p>
				</div>
				<Link to={`details/${props.position}`}>
					<button className="btn btn-primary">Learn More</button>
				</Link>{" "}
				<button
					type="button"
					className="btn btn-secondary"
					//using onClick action to push props.character.name into the navbar.js file
					onClick={() => actions.addFavorites(props.charecter.name)}>
					<i className="fas fa-heart fa-lg" />
				</button>
			</div>
		</div>
	);
}
//Passing props in CardCharacters component using earlier mapping from starwars.js file
CardCharecters.propTypes = {
	charecter: PropTypes.object,
	position: PropTypes.number
};
