import { Ul } from "./PokemonList.styled";
import { Pokemon, PokemonCard } from "../PokemonCard";

type Pokemons = {
    name: string;
    url: string;
}[];

interface PokemonListProps {
    pokemons: Pokemons;
}

export const PokemonList = ({pokemons}: PokemonListProps ) => {
    if (!pokemons) return null;
    return (
        <Ul>
            {pokemons.map((pokemon: Pokemon) => <PokemonCard key={pokemon.name} pokemon={pokemon} />)}
        </Ul>
    );
}