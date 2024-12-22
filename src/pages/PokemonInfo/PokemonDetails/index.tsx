import { PokemonStats } from "../PokemonStats";
import { PokemonImg, PokemonName, StatsDiv } from "./PokemonDetails.styled";
import { PokemonData } from "./PokemonDetails.types";

interface PokemonDetailsProps {
    pokemon: PokemonData;
}

export const PokemonDetails = ({ pokemon }: PokemonDetailsProps) => {
    const { name, sprites, types, abilities, stats, weight, height } = pokemon;

    return (
        <div>
            {sprites?.front_default && (
                <PokemonImg src={sprites.front_default} alt={name} />
            )}

            <PokemonName>{name}</PokemonName>

            <StatsDiv>
                <p>Height: {height / 10} m</p>
                <p>Weight: {weight / 10} kg</p>
            </StatsDiv>

            <PokemonStats types={types} abilities={abilities} stats={stats} />
        </div>
    );
}