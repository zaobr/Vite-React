function NavBar({pokemonList, pokemonIndex, handleClick}){
    if(pokemonList[pokemonIndex].name == "pikachu"){
        window.alert("pika pikachu !!!")
    }


    return(
        <>
        {pokemonList.map((pokemon, index) => (<button key={index} onClick={() => (handleClick(index))}>{pokemon.name}</button>))}
        </>
    )
}

export default NavBar