import React from 'react';

import TypePill from '../TypePill';
import { Pokemon } from '../../types';
import { capitalizeFirstLetter } from '../../utils';

import { RosterSlotContainer, TypesContainer } from './styled';

interface RosterSlotProps {
	pokemon: Pokemon;
}

function RosterSlot({ pokemon }: RosterSlotProps) {
	// TODO: Add an X (remove) icon in to right to remove pokemon.
	const { name, types } = pokemon;

	return (
		<RosterSlotContainer>
			{/* Sprite here via next image */}
			<h1>{capitalizeFirstLetter([...name])}</h1>
			{/* Types here are an array of blocks */}
			<TypesContainer>
				{types.map((typeData) => (
					<TypePill key={`${typeData.slot}_${typeData.type.name}`} typeData={typeData} />
				))}
			</TypesContainer>
		</RosterSlotContainer>
	);
}

export default RosterSlot;
