import { Stats } from "../PokemonDetails/PokemonDetails.types";
import { DataList, DataListBox, DataListHeader, PokemonStatsDiv } from "./PokemonStats.styled";

export const PokemonStats = ({ types, abilities, stats }: Stats) => {
    return (
        <PokemonStatsDiv>
            <DataListBox>
                <DataListHeader>Types:</DataListHeader>
                <DataList>
                    {types.map((typeInfo) => (
                        <li key={typeInfo.slot}>{typeInfo.type.name}</li>
                    ))}
                </DataList>
            </DataListBox>

            <DataListBox>
                <DataListHeader>Abilities:</DataListHeader>
                <DataList>
                    {abilities.map((abilityInfo) => (
                        <li key={abilityInfo.ability.name}>
                            {abilityInfo.ability.name}
                        </li>
                    ))}
                </DataList>
            </DataListBox>

            <DataListBox>
                <DataListHeader>Base Stats:</DataListHeader>
                <DataList>
                    {stats.map((statInfo) => (
                        <li key={statInfo.stat.name}>
                            <strong>{statInfo.stat.name}:</strong> {statInfo.base_stat}
                        </li>
                    ))}
                </DataList>
            </DataListBox>
        </PokemonStatsDiv>
    );
}