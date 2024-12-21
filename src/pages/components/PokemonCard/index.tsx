import placeholder from '../../../assets/Poke_Ball.webp';
import { Card, CardFooter, CardImg } from './PokemonCard.styled';

export type Pokemon = {
    name: string,
    url: string,
};

interface PokemonCardProps {
    pokemon: Pokemon;
};

export const PokemonCard = ({ pokemon }: PokemonCardProps): JSX.Element => {
    return (
        <Card>
            <CardImg src={placeholder} alt="Pokemon photo" />
            <CardFooter>{pokemon.name}</CardFooter>
        </Card>
    );
}