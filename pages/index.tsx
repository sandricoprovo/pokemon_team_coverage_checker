import React, { useState } from 'react';

import { Pokemon } from '../src/types';
import SearchField from '../src/components/SearchInput/SearchField';
import { Roster, RosterSlot } from '../src/components/Roster';

function HomePage(): JSX.Element {
	const [teamMembers, setTeamMembers] = useState<Pokemon[]>([]);
	// TODO: Add method that can remove a team member

	function handleNewTeamMember(newTeamMember: Pokemon) {
		const updatedRoster = [...teamMembers];
		// Returns true if newTeamMember is a duplicate entry
		const isPokemonDuplicate = updatedRoster.some((teamMember) => {
			if (teamMember.id !== newTeamMember.id) return teamMember;
			return true;
		});

		// TODO: Handle showing duplicate or a full roster
		if (isPokemonDuplicate || teamMembers.length === 6) return;

		// BUGS: Adding a second pokemon is currently broken.
		updatedRoster.push(newTeamMember);
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
					? teamMembers.map((pokemon) => {
						const { id, name } = pokemon;
						return <RosterSlot key={`${id}_${name}`} pokemon={pokemon} />;
					})
					: null}
			</Roster>
		</main>
	);
}

export default HomePage;
