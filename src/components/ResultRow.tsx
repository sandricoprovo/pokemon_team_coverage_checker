import React from 'react';

import { Pokemon } from '../types';

interface ResultRowProps {
	payload: Pokemon;
	addTeamMember: (payload: Pokemon) => void;
}

function ResultRow({ payload, addTeamMember }: ResultRowProps) {
	// TODO: Destructure payload

	return (
		<button type="button" onClick={() => addTeamMember(payload)}>
			{payload.name ?? 'Pokemon'}
		</button>
	);
}

export default ResultRow;
