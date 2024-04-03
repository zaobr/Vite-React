import { useState } from 'react';
import './App.css'
import PokemonCard from './components/PokemonCard'

function App() {
  const [pokemonIndex, SetPokemonIndex] = useState(0);
  
  const handleClickIncrement = () => {
    SetPokemonIndex(pokemonIndex +1)
  }

  const handleClickDecrement = () => {
    SetPokemonIndex(pokemonIndex -1)
  }

  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    }
];

  return (
    <>
      <div>
        <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
        {pokemonIndex > 0 ? <button onClick={handleClickDecrement}>Précedent</button> : <button disabled>Précedent</button>}
        {pokemonIndex < pokemonList.length - 1 ? <button onClick={handleClickIncrement}>Suivant</button> : <button disabled>Suivant</button>}
      </div>
    </>
  )
}

export default App
