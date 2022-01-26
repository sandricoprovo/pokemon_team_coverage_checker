import React from 'react';

import TypePill from '../TypePill';
import { Pokemon } from '../../types';

import { RosterSlotContainer } from './styled';

interface RosterSlotProps {
	pokemon: Pokemon;
}

function RosterSlot({ pokemon }: RosterSlotProps) {
	// TODO: Add an X (remove) icon in to right to remove pokemon.
	const { name, types } = pokemon;

	return (
		<RosterSlotContainer>
			{/* Sprite here via next image */}
			<h1>{name}</h1>
			{/* Types here are an array of blocks */}
			<div>
				{types.map((type) => (
					<TypePill typeData={type} />
				))}
			</div>
		</RosterSlotContainer>
	);
}

export default RosterSlot;
