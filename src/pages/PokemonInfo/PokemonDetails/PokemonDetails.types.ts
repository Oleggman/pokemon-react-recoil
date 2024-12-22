type Sprite = {
    front_default: string;
};

type Type = {
    slot: string;
    type: {
        name: string;
    };
};

type Ability = {
    ability: {
        name: string;
    };
};

type Stat = {
    stat: {
        name: string;
    };
    base_stat: string;
};

export type Stats = {
    stats: Stat[];
    abilities: Ability[];
    types: Type[];
};

export type PokemonData = {
    name: string,
    sprites: Sprite,
    weight: number,
    height: number,
} & Stats;
