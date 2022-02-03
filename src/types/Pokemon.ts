export interface PokeApiType {
	type: { name: string; url?: string };
	slot?: number;
}

export interface PokeApiPayload {
	name: string;
	types: PokeApiType[];
	sprites: { front_default: string };
	id: number;
}

export interface Pokemon {
	name: string;
	id: number;
	types: PokeApiType[];
	sprite: string;
}

export interface TypeEffectiveness {
	strongAgainst: string[];
	weakAgainst: string[];
}

export interface TypeChart {
	[key: string]: TypeEffectiveness;
	bug: TypeEffectiveness;
	dark: TypeEffectiveness;
	dragon: TypeEffectiveness;
	electric: TypeEffectiveness;
	fairy: TypeEffectiveness;
	fighting: TypeEffectiveness;
	fire: TypeEffectiveness;
	flying: TypeEffectiveness;
	ghost: TypeEffectiveness;
	grass: TypeEffectiveness;
	ground: TypeEffectiveness;
	ice: TypeEffectiveness;
	normal: TypeEffectiveness;
	poison: TypeEffectiveness;
	psychic: TypeEffectiveness;
	rock: TypeEffectiveness;
	steel: TypeEffectiveness;
	water: TypeEffectiveness;
}
