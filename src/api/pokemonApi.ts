import axios from "axios";

export const getAllPokemons = async () => {
    return await axios.get('https://pokeapi.co/api/v2/pokemon');
}

export const getPokemonById = async (pokemonId: string | number) => {
    const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    return result?.data;
}

export const getPokemonByQuery = async (query: string) => {
    return await axios.get(query);
}
