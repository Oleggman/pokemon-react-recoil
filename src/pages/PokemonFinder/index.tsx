import { useNavigate } from "react-router";
import { PokemonForm, Input, FormButton } from "./PokemonFinder.styled";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { getPokemonById } from "../../api/pokemonApi";
import Notiflix from "notiflix";
import { Loader } from "../common/components/Loader";

const PokemonFinder = () => {
    const [pokemonName, setPokemonName] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const onSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        const inputPokemon = pokemonName.trim().toLowerCase();
        setIsLoading(true);

        try {
            const pokemon = await getPokemonById(inputPokemon);
        
            if (pokemon) {
                navigate(`/pokemons/${inputPokemon}`, { state: { pokemon} });
            }
        } catch {
            Notiflix.Notify.failure(`Pokemon with name ${inputPokemon} not found!`)
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <PokemonForm onSubmit={onSubmit}>
                <Input
                    type="text"
                    placeholder="Enter pokemon name"
                    value={pokemonName}
                    onChange={(e) => setPokemonName(e.target.value)}
                />
                <FormButton type="submit"><FaSearch /></FormButton>
            </PokemonForm>

            {isLoading && <Loader />}
        </>
    );
};

export default PokemonFinder;