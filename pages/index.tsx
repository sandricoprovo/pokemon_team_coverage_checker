import React, { useState } from 'react';

import { Pokemon } from '../src/types';
import SearchField from '../src/components/SearchInput/SearchField';
import { Roster, RosterSlot } from '../src/components/Roster';

function HomePage(): JSX.Element {
	const [teamMembers, setTeamMembers] = useState<Pokemon[]>([]);
	// TODOS:
	// - Add a method that updates team members & pass to Search Field

	function handleNewTeamMember(pokemon: Pokemon) {
		console.log('Adding new team member...');
		const updatedRoster = [...teamMembers, pokemon];

		// TODO: Check for duplicate entries

		setTeamMembers(updatedRoster);
	}

	return (
		<main style={{ border: '2px solid blue', height: '100%' }}>
			<h1>Hello World</h1>
			<section>
				<SearchField addTeamMember={handleNewTeamMember} />
			</section>
			<Roster>
				{teamMembers.length > 0
					? teamMembers.map((pokemon) => <RosterSlot pokemon={pokemon} />)
					: 'Your roster is currently empty!'}
			</Roster>
		</main>
	);
}

export default HomePage;
