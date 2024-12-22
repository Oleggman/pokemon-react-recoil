import { useEffect, useState } from "react";
import { getAllPokemons, getPokemonByQuery } from "../../api/pokemonApi";
import { pokemonsState } from "../../recoil/atoms/pokemons";
import { LoadMoreButton } from "./components/LoadMoreButton";
import { PokemonList } from "./components/PokemonList";
import { useRecoilState } from "recoil";
import Notiflix from "notiflix";

const Home = () => {
    const [pokemons, setPokemons] = useRecoilState(pokemonsState);
    const [nextPokemons, setNextPokemons] = useState(null);

    useEffect(() => {
        if (pokemons.length > 0) return;

        const fetchPokemons = async () => {
            const allPokemons = await getAllPokemons();
            setPokemons(allPokemons?.data?.results);
            setNextPokemons(allPokemons?.data?.next);
        }
        fetchPokemons();
    }, [setPokemons]);
    
    const onLoadMore = async () => {
        if (!nextPokemons) return;

        try {
            const newPokemons = await getPokemonByQuery(nextPokemons);
            if (!newPokemons?.data?.results) throw new Error;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            setPokemons([...pokemons, ...newPokemons.data.results]);
            setNextPokemons(newPokemons?.data?.next);
        } catch {
            Notiflix.Notify.failure("Failed to load");
        }
    }

    return (
        <>
            <PokemonList pokemons={pokemons} />
            <LoadMoreButton onLoadMore={onLoadMore}/>
        </>
    );
};

export default Home;