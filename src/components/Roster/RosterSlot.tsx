import React from 'react';

import { Pokemon } from '../../types';

import { RosterSlotContainer } from './styled';

interface RosterSlotProps {
	pokemon: Pokemon;
}

function RosterSlot({ pokemon }: RosterSlotProps) {
	// TODO: Add an X (remove) icon in to right to remove pokemon.
	const { name } = pokemon;

	return (
		<RosterSlotContainer>
			{/* Sprite here via next image */}
			<h1>{name}</h1>
			{/* Types here are an array of blocks */}
		</RosterSlotContainer>
	);
}

export default RosterSlot;
