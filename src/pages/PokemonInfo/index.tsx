import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { getPokemonById } from "../../api/pokemonApi";
import { PokemonDetails } from "./PokemonDetails";

const PokemonInfo = () => {
    const location = useLocation();
    const [pokemon, setPokemon] = useState(location.state?.pokemon);
    const { pokemonId } = useParams();

    useEffect(() => {
        const fetchPokemon = async () => {
            const fetchedPokemon = await getPokemonById(pokemonId as string);
            setPokemon(fetchedPokemon);
        }

        if (!location.state?.pokemon) {
            fetchPokemon();
        }
    }, [location.state?.pokemon, pokemonId]);

    if (!pokemon) return null;

    const { name, sprites, types, abilities, stats, weight, height } = pokemon;

    return (
        <PokemonDetails pokemon={{ name, sprites, types, abilities, stats, weight, height }} />
    );
};

export default PokemonInfo;