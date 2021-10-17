import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<i className="fab fa-jedi-order fa-3x" />
				</span>
			</Link>
			<DropdownButton id="dropdown-basic-button" title="favorites dropdown">
				{store.favorites.map((value, index) => {
					return (
						<Dropdown.Item key={index}>
							<button
								type="button"
								className="btn btn-secondary btn-sm"
								onClick={() => actions.deleteFavorites(value)}>
								{value + " "}
								<i className="fas fa-trash fa-sm" />
							</button>
						</Dropdown.Item>
					);
				})}
			</DropdownButton>
		</nav>
	);
};

<div className="dropdown">
	<span>
		<img src="https://www.vectordiary.com/wp-content/uploads/2021/03/star-wars-logo-font.jpg" id="image" />
	</span>
	<div className="dropdown-content">
		<p>Hello World!</p>
	</div>
</div>;

<Dropdown.Item href="#/action-1">Action</Dropdown.Item>,
	<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>,
	<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>;
