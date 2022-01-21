import React from 'react';

import { Pokemon } from '../types';

interface ResultRowProps {
	pokemon: Pokemon;
	addTeamMember: (payload: Pokemon) => void;
}

function ResultRow({ pokemon, addTeamMember }: ResultRowProps) {
	// TODO: Destructure payload

	return (
		<button type="button" onClick={() => addTeamMember(pokemon)}>
			{pokemon.name ?? 'Pokemon'}
		</button>
	);
}

export default ResultRow;
