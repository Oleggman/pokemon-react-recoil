import { useNavigate } from "react-router";
import { PokemonStats } from "../PokemonStats";
import { BackButton, PokemonImg, PokemonName, StatsDiv } from "./PokemonDetails.styled";
import { PokemonData } from "./PokemonDetails.types";
import { IoMdArrowRoundBack } from "react-icons/io";

interface PokemonDetailsProps {
    pokemon: PokemonData;
}

export const PokemonDetails = ({ pokemon }: PokemonDetailsProps) => {
    const { name, sprites, types, abilities, stats, weight, height } = pokemon;
    const navigate = useNavigate();

    const onBackClick = () => {
        navigate(-1);
    }
    
    return (
        <div>
            <BackButton onClick={onBackClick}><IoMdArrowRoundBack size={40} /></BackButton>
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