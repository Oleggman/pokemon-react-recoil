import { useNavigate } from "react-router";
import { PokemonForm, Input, FormButton } from "./PokemonFinder.styled";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { getPokemonById } from "../../api/pokemonApi";
import Notiflix from "notiflix";

const PokemonFinder = () => {
    const [pokemonName, setPokemonName] = useState('');
    const navigate = useNavigate();

    const onSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        const inputPokemon = pokemonName.trim().toLowerCase();
        try {
            const pokemon = await getPokemonById(inputPokemon);
        
            if (pokemon) {
                navigate(`/pokemons/${inputPokemon}`, { state: { pokemon} });
            }
        } catch {
            Notiflix.Notify.failure(`Pokemon with name ${inputPokemon} not found!`)
        }
    }

    return (
        <PokemonForm>
            <Input
                type="text"
                placeholder="Enter pokemon name"
                value={pokemonName}
                onChange={(e) => setPokemonName(e.target.value)}
            />
            <FormButton onClick={onSubmit} type="submit"><FaSearch /></FormButton>
        </PokemonForm>
    );
};

export default PokemonFinder;