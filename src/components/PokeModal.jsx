import { useEffect, useState } from "react";

export default function PokeModal(props){
	const [pokemon, setPokemon] = useState({});

	useEffect(() => {
		fetch(props.url)
		.then(response => response.json())
		.then(data => {
			setPokemon(data)
		});

	}, [props.url]);

	function capitalize(stringToCapitalize){
		return stringToCapitalize?.charAt(0)?.toUpperCase() + stringToCapitalize?.slice(1);
	}

	return(
    	<section className="pokemodal" onClick={props.onClose}>
			<main onClick={(event) => { event.stopPropagation(); }}>
				<header>
					<img src={pokemon?.sprites?.front_default} alt="" />
				</header>
				<h2>
					{capitalize(pokemon?.name)} <span>{pokemon?.id}</span>{" "}
				</h2>
				<h3>{pokemon?.types?.map(type => type?.type?.name)?.join(", ")}</h3>
				<h3>{pokemon?.height / 10} mts</h3>
				<h3>{pokemon?.weight / 10} kg</h3>
			</main>
		</section>
	);
}