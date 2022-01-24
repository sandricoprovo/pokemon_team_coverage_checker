import React from 'react';

import { Pokemon } from '../../types';

import { PokemonSlotContainer } from './styled';

interface PokemonSlotProps {
	pokemon: Pokemon;
}

function PokemonSlot({ pokemon }: PokemonSlotProps) {
	const { name } = pokemon;

	return (
		<PokemonSlotContainer>
			{/* Sprite here via next image */}
			<h1>{name}</h1>
			{/* Types here are an array of blocks */}
		</PokemonSlotContainer>
	);
}

export default PokemonSlot;
