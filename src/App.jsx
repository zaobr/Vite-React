import './App.css'
import PokemonCard from './components/PokemonCard'

function App() {
  const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "mew",
      }
];

  return (
    <>
      <div>
        <PokemonCard pokemon={pokemonList[1]}/>
      </div>
    </>
  )
}

export default App
