import { useNavigate } from "react-router";
import { PokemonForm, Input, FormButton } from "./PokemonFinder.styled";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const PokemonFinder = () => {
    const [pokemonName, setPokemonName] = useState('');
    const navigate = useNavigate();

    const onSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        if (pokemonName.trim() !== '') {
            navigate(`/pokemons/${pokemonName.trim()}`);
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