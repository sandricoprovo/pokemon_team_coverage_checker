export interface PokeApiType {
	slot: number;
	type: { name: string; url: string };
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
