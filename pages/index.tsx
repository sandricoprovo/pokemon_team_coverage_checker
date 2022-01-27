import React, { useState } from 'react';

import { Pokemon } from '../src/types';
import { SearchField } from '../src/components/SearchField';
import { Roster, RosterSlot } from '../src/components/Roster';

function HomePage(): JSX.Element {
	const [roster, setRoster] = useState<Pokemon[]>([]);

	function handleRosterAddition(newTeamMember: Pokemon) {
		const updatedRoster = [...roster];
		// Returns true if newTeamMember is a duplicate entry
		const isPokemonDuplicate = updatedRoster.some((teamMember) => {
			if (teamMember.id !== newTeamMember.id) return false;
			return true;
		});

		// TODO: Handle showing duplicate or a full roster
		if (isPokemonDuplicate || roster.length === 6) return;

		updatedRoster.push(newTeamMember);
		setRoster(updatedRoster);
	}

	function handleRosterRemoval(memberToRemove: Pokemon) {
		const updatedRoster = [...roster].filter((rosterMember) => {
			if (rosterMember.id !== memberToRemove.id) return rosterMember;
			return null;
		});

		setRoster(updatedRoster);
	}

	return (
		<main style={{ border: '2px solid blue', height: '100%' }}>
			<h1>Hello World</h1>
			<section>
				<SearchField addTeamMember={handleRosterAddition} />
			</section>
			<Roster>
				{roster.length > 0
					? roster.map((pokemon) => {
						const { id, name } = pokemon;
						return (
							<RosterSlot
								key={`${id}_${name}`}
								pokemon={pokemon}
								removeFromRoster={handleRosterRemoval}
							/>
						);
					})
					: null}
			</Roster>
		</main>
	);
}

export default HomePage;
