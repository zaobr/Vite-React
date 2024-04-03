function NavBar({handleClickDecrement, handleClickIncrement, pokemonIndex, pokemonList}){

    return(
        <>
        {pokemonIndex > 0 ? <button onClick={handleClickDecrement}>Précedent</button> : <button disabled>Précedent</button>}
        {pokemonIndex < pokemonList.length - 1 ? <button onClick={handleClickIncrement}>Suivant</button> : <button disabled>Suivant</button>}
        </>
    )
}

export default NavBar