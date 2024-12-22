import { selector } from "recoil";
import { nextPokemonsState } from "../atoms/nextPokemons";

export const nextPokemonsUrlState = selector({
    key: "nextPokemonsUrlState",
    get: ({ get }) => get(nextPokemonsState),
})