import React, { useState, useEffect } from 'react';

import { Pokemon } from '../../types';
import { capitalizeFirstLetter } from '../../utils';

import { CardContainer } from './styled';

interface ResultCardProps {
	pokemon: Pokemon;
	addTeamMember: (payload: Pokemon) => void;
	clearSearch: () => void;
}

function ResultCard({ pokemon, addTeamMember, clearSearch }: ResultCardProps) {
	const [pokemonData, setPokemonData] = useState<Pokemon>({
		id: 0,
		name: '',
		sprite: '',
		types: [],
	});
	const [isVisible, setIsVisible] = useState(false);

	function removeOnClick() {
		clearSearch();
		setIsVisible(false);
		addTeamMember(pokemon);
	}

	useEffect(() => {
		if (!pokemon) return;
		setPokemonData(pokemon);
		setIsVisible(true);
	}, [pokemon]);

	return isVisible ? (
		<CardContainer onClick={removeOnClick} onKeyDown={removeOnClick} role="button" tabIndex={0}>
			{capitalizeFirstLetter([...pokemonData.name]) ?? 'Pokemon'}
		</CardContainer>
	) : null;
}

export default ResultCard;
