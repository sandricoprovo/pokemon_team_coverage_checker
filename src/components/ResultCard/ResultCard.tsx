import React from 'react';

import { Pokemon } from '../../types';

import { CardContainer } from './styled';

interface ResultCardProps {
	pokemon: Pokemon;
	addTeamMember: (payload: Pokemon) => void;
}

function ResultCard({ pokemon, addTeamMember }: ResultCardProps) {
	const { name } = pokemon;
	// TODO: Add handle click that clears the result card when result is clicked

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
