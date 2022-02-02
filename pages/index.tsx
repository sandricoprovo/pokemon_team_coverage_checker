import React, { useState } from 'react';

import { Pokemon } from '../src/types';
import { SearchField } from '../src/components/SearchField';
import { Roster, RosterSlot } from '../src/components/Roster';
import { removeDuplicates, STRENGTH_WEAKNESS_CHART } from '../src/utils';

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

	function getTypesCollection(): string[] {
		const typesCollection: string[] = [];

		if (!roster) return typesCollection;

		// Destructures a pokemon object to add types to typesCollection
		[...roster].forEach((pokemon) => {
			const { types } = pokemon;
			[...types].forEach((type) => {
				const {
					type: { name },
				} = type;
				typesCollection.push(name);
			});
		});

		// Removes duplicates from the typesCollection
		const cleanTypesCollection = removeDuplicates(typesCollection);
		return cleanTypesCollection;
	}

	function getRosterWeaknesses() {
		const rosterTypes = getTypesCollection();
		// TODOS:
		//	- create an array of weaknesses for each roster type using STRENGTH_WEAKNESS_CHART
		//  - remove duplicates from this array
		//  - this is the weakness of the roster
		// 		- Should this be a percentage & list?

		console.log({ rosterTypes, STRENGTH_WEAKNESS_CHART });
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
			<section style={{ padding: '2rem' }}>
				<button type="button" onClick={getRosterWeaknesses}>
					Get Weaknesses
				</button>
			</section>
		</main>
	);
}

export default HomePage;
