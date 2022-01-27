import React from 'react';
import Image from 'next/image';

import TypePill from '../TypePill';
import { Pokemon } from '../../types';
import { capitalizeFirstLetter } from '../../utils';

import { RosterSlotContainer, TypesContainer } from './styled';

interface RosterSlotProps {
	pokemon: Pokemon;
}

function RosterSlot({ pokemon }: RosterSlotProps) {
	// TODO: Add an X (remove) icon in to right to remove pokemon.
	const { name, types, sprite: spriteUrl } = pokemon;

	return (
		<RosterSlotContainer>
			<Image
				src={spriteUrl}
				alt={`A small colored sprite of ${name}.`}
				width={150}
				height={150}
			/>
			<h1>{capitalizeFirstLetter([...name])}</h1>
			<TypesContainer>
				{types.map((typeData) => (
					<TypePill key={`${typeData.slot}_${typeData.type.name}`} typeData={typeData} />
				))}
			</TypesContainer>
		</RosterSlotContainer>
	);
}

export default RosterSlot;
