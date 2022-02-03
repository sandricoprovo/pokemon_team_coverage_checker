import React, { useState } from 'react';

import { Pokemon, RosterTypeCoverage } from '../src/types';
import SearchField from '../src/components/SearchField';
import { Roster, RosterSlot } from '../src/components/Roster';
import { removeDuplicates, STRENGTH_WEAKNESS_DATA, POKEMON_TYPES } from '../src/utils';
import TypeCoverage from '../src/components/TypeCoverage';

function HomePage(): JSX.Element {
	const [roster, setRoster] = useState<Pokemon[]>([]);
	const [rosterTypeCoverage, setRosterTypeCoverage] = useState<RosterTypeCoverage>({
		covered: [],
		notCovered: [],
		percentage: 0,
	});

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

	function getTypesCollection() {
		const typesCollection: { typesStrongAgainst: string[]; typesWeakAgainst: string[] } = {
			typesStrongAgainst: [],
			typesWeakAgainst: [],
		};

		if (!roster) return typesCollection;

		// Loops over each pokemon & their types to load the typesCollection object
		roster.forEach((pokemon) => {
			pokemon.types.forEach((typeData) => {
				const {
					type: { name: typeName },
				} = typeData;
				// Adds the pokemon's types to respective arrays
				typesCollection.typesStrongAgainst.push(
					...STRENGTH_WEAKNESS_DATA[typeName].strongAgainst
				);
				typesCollection.typesWeakAgainst.push(
					...STRENGTH_WEAKNESS_DATA[typeName].weakAgainst
				);
			});
		});

		// Removes duplicates from type arrays
		typesCollection.typesStrongAgainst = removeDuplicates(typesCollection.typesStrongAgainst);
		typesCollection.typesWeakAgainst = removeDuplicates(typesCollection.typesWeakAgainst);

		return typesCollection;
	}

	function checkTypeCoverage() {
		const { typesStrongAgainst, typesWeakAgainst } = getTypesCollection();
		// Creates arrays containing the covered & not covered types
		const coveredTypes = [...new Set([...typesStrongAgainst])];
		const notCoveredTypes = removeDuplicates(
			[...[...new Set([...typesWeakAgainst])], ...POKEMON_TYPES].filter((type) => {
				// Non included types aren't covered
				if (!coveredTypes.includes(type)) return type;
				return null;
			})
		);

		// Calculates the % of types where at least one roster member is super effective against.
		const coveragePercentage = parseFloat(
			((coveredTypes.length / POKEMON_TYPES.length) * 100).toFixed(2)
		);

		console.log(coveragePercentage);

		setRosterTypeCoverage({
			covered: coveredTypes,
			notCovered: notCoveredTypes,
			percentage: coveragePercentage,
		});
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
			<TypeCoverage coverageData={rosterTypeCoverage} checkMethod={checkTypeCoverage} />
		</main>
	);
}

export default HomePage;
