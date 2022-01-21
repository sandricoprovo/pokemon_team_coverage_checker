import React, { useState } from 'react';

import { Pokemon } from '../src/types';
import SearchField from '../src/components/SearchInput/SearchField';
import { Slots, PokemonSlot } from '../src/components/PokemonSlots';

function HomePage(): JSX.Element {
	const [teamMembers, setTeamMembers] = useState([]);
	// TODOS:
	// - Add a method that updates team members & pass to Search Field

	const handleNewTeamMember = (pokemon: Pokemon) => console.log({ pokemon });

	return (
		<main style={{ border: '2px solid blue', height: '100%' }}>
			<h1>Hello World</h1>
			<section>
				<SearchField addTeamMember={handleNewTeamMember} />
			</section>
			<Slots>
				{teamMembers.length > 0
					? teamMembers.map((pokemon) => <PokemonSlot />)
					: 'Your team is empty!'}
			</Slots>
		</main>
	);
}

export default HomePage;
