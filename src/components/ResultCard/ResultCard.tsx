import React from 'react';

import { Pokemon } from '../../types';

import { CardContainer } from './styled';

interface ResultCardProps {
	pokemon: Pokemon;
	addTeamMember: (payload: Pokemon) => void;
}

function ResultCard({ pokemon, addTeamMember }: ResultCardProps) {
	// TODO: Destructure payload
	const { id, name, sprite, types } = pokemon;

	return (
		<CardContainer
			onClick={() => addTeamMember(pokemon)}
			onKeyDown={() => addTeamMember(pokemon)}
			role="button"
			tabIndex={0}
		>
			{name ?? 'Pokemon'}
		</CardContainer>
	);
}

export default ResultCard;
