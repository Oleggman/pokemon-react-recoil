import placeholder from '../../../../assets/Poke_Ball.webp';
import { CardLink, CardFooter, CardImg } from './PokemonCard.styled';

export type Pokemon = {
    name: string,
    url: string,
};

interface PokemonCardProps {
    pokemon: Pokemon;
};

export const PokemonCard = ({ pokemon: {name} }: PokemonCardProps): JSX.Element => {
    return (
        <CardLink to={`/pokemons/${name}`}>
            <CardImg src={placeholder} alt="Pokemon photo" />
            <CardFooter>{name}</CardFooter>
        </CardLink>
    );
}