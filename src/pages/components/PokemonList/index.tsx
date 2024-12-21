import { useRecoilState } from "recoil";
import { pokemonsState } from "../../../recoil/atoms/pokemons";
import { useEffect } from "react";
import { getAllPokemons } from "../../../api/pokemonApi";
import { Ul } from "./PokemonList.styled";
import { Pokemon, PokemonCard } from "../PokemonCard";

export const PokemonList = () => {
    const [pokemons, setPokemons] = useRecoilState(pokemonsState);

    useEffect(() => {
        const fetchPokemons = async () => {
            const allPokemons = await getAllPokemons();
            setPokemons(allPokemons?.data?.results);
        }
        fetchPokemons();
    }, [setPokemons]);

    if (!pokemons) return null;
    return (
        <Ul>
            {pokemons.map((pokemon: Pokemon) => <PokemonCard key={pokemon.name} pokemon={pokemon} />)}
        </Ul>
    );
}