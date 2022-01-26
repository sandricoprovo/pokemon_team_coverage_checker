import React from 'react';

import { PokeApiType } from '../../types';
import { capitalizeFirstLetter } from '../../utils';

import { TypePillContainer } from './styled';

interface TypePillProps {
	typeData: PokeApiType;
}

export default function TypePill({ typeData }: TypePillProps) {
	const {
		type: { name: typeName },
	} = typeData;
	// TODO: Create a color to pill map so pills are properly colored based on type.

	return <TypePillContainer>{capitalizeFirstLetter([...typeName])}</TypePillContainer>;
}
