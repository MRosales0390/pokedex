import { useEffect, useState } from 'react';
import PokemonCard from './components/PokemonCard';

function App() {
	const [pokemons, setPokemons] = useState([]);
	
	useEffect(() => {
		fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
		.then(response => response.json())
		.then(data => { 
			//console.log(data);
			setPokemons(data.results) 
		});
	}, []);

  return (
	<>
		<header className='header-logo'>
			<img 
				src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" 
				alt="pokeapi-logo"
			/>
		</header>
		<main className='pokemon-list'>
			{
				pokemons				
				.map(pokemon =>{
						return <PokemonCard 
							name={pokemon.name}
							url={pokemon.url}
						/>
					}
				)
			}
		</main>
	</>
  );
}

export default App;
