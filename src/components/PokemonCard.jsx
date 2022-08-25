import { useEffect, useState } from "react";

//function PokemonCard(){
export default function PokemonCard(props){
    //const [pokemon, setPokemon] = useState({ sprites: { front_default: "" } });
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        fetch(props.url)
        .then(response => response.json())
        .then(json => setPokemon(json))
    }, [])

    return(
        <article className='pokemon-card'>
            <header>
                <img 
                    src={pokemon?.sprites?.front_default} 
                    alt="Pokemon card"
                />
            </header>
            <footer>
                <p>{props.name}</p>
            </footer>
        </article>
    );
}

//export default PokemonCard;