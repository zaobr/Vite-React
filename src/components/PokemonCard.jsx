import PropTypes from "prop-types";

function PokemonCard({pokemon}){

    PokemonCard.propTypes = {
        pokemon: PropTypes.shape({
            imgSrc: PropTypes.string,
            name: PropTypes.string.isRequired
        }).isRequired
    }

    return(
        <figure>
            {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt={pokemon.name} /> : <p>?????</p>}
            <figcaption>{pokemon.name}</figcaption>
        </figure>
    )
}

export default PokemonCard
