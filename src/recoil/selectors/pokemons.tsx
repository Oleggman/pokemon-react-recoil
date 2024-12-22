import { selector } from "recoil";
import { pokemonsState } from "../atoms/pokemons";

export const pokemonsListState = selector({
    key: "pokemonsListState",
    get: ({ get }) => get(pokemonsState),
});