import React, { useState } from 'react';

import { Pokemon } from '../src/types';
import SearchField from '../src/components/SearchInput/SearchField';
import { Slots, PokemonSlot } from '../src/components/PokemonSlots';

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
			<Slots>
				{teamMembers.length > 0
					? teamMembers.map((pokemon) => <PokemonSlot pokemon={pokemon} />)
					: 'Your team is empty!'}
			</Slots>
		</main>
	);
}

export default HomePage;
