import React from 'react';

import { Pokemon } from '../../types';
import { capitalizeFirstLetter } from '../../utils';

import { CardContainer } from './styled';

interface ResultCardProps {
	pokemon: Pokemon;
	addTeamMember: (payload: Pokemon) => void;
	clearSearch: () => void;
}

function ResultCard({ pokemon, addTeamMember, clearSearch }: ResultCardProps) {
	const { name } = pokemon;

	function removeOnClick() {
		clearSearch();
		addTeamMember(pokemon);
	}

	return (
		<CardContainer onClick={removeOnClick} onKeyDown={removeOnClick} role="button" tabIndex={0}>
			{capitalizeFirstLetter([...name]) ?? 'Pokemon'}
		</CardContainer>
	);
}

export default ResultCard;
