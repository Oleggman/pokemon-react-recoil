import { useEffect } from "react";
import { useRecoilState } from "recoil";
import Notiflix from "notiflix";
import { getAllPokemons, getPokemonByQuery } from "../../api/pokemonApi";
import { pokemonsState } from "../../recoil/atoms/pokemons";
import { nextPokemonsState } from "../../recoil/atoms/nextPokemons";
import { LoadMoreButton } from "./components/LoadMoreButton";
import { PokemonList } from "./components/PokemonList";

const Home = () => {
    const [pokemons, setPokemons] = useRecoilState(pokemonsState);
    const [nextPokemons, setNextPokemons] = useRecoilState(nextPokemonsState);

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
            {pokemons?.length && <LoadMoreButton onLoadMore={onLoadMore}/>}
        </>
    );
};

export default Home;