import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { StarWarsData } from "../component/starwars";

export const Home = () => (
	<div className="text-center mt-5">
		<div className="text-center mt-5">
			<h1 id="sw">Characters</h1>
			<StarWarsData />
		</div>
	</div>
);
