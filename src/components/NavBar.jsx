function NavBar({pokemonList, handleClick}){

    return(
        <>
        {pokemonList.map((pokemon, index) => (<button key={index} onClick={() => (handleClick(index))}>{pokemon.name}</button>))}
        </>
    )
}

export default NavBar