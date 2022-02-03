import { POKEMON_TYPES, STRENGTH_WEAKNESS_DATA } from './pokemonCharts';

export function capitalizeFirstLetter(value: string[]) {
	return value.map((letter, index) => {
		if (index !== 0) return letter;
		return letter.toUpperCase();
	});
}

export function removeDuplicates<T>(collection: T[]) {
	return [...new Set(collection)];
}

export { POKEMON_TYPES, STRENGTH_WEAKNESS_DATA };
