import React, { useState, useEffect, ChangeEvent } from 'react';

import { Pokemon } from '../types';

import ResultsRow from './ResultRow';

interface SearchFieldProps {
	addTeamMember: (payload: Pokemon) => void;
}

function SearchField({ addTeamMember }: SearchFieldProps) {
	// TODOS:
	// - Add state to track current field selection
	const [searchText, setSearchText] = useState('');
	const [results, setResults] = useState<any[] | []>([]);
	// - On add button click update parent state ( need passed in add method)
	// - Format data before sending to parent

	const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		// TODO: Add items to results array
		setSearchText(value);
	};

	const clearSearchField = () => setSearchText('');

	useEffect(() => {
		if (!searchText) return;

		setResults([0, 0, 0]);
	}, [searchText]);

	return (
		<div>
			<label htmlFor="pokemonSearch">
				Search Pokemon
				<input
					type="text"
					name="pokemonSearch"
					id="pokemonSearch"
					placeholder="Enter Pokémon name"
					value={searchText}
					onChange={handleSearchChange}
				/>
			</label>
			{searchText.length > 0 ? (
				<div>
					{results.map((result, index) => {
						// TODO: Add method to format pokemon api data
						console.log(result);

						return (
							<ResultsRow
								key={`${Math.random()}-${index}`}
								payload={{ name: 'Pokemon' }}
								addTeamMember={addTeamMember}
							/>
						);
					})}
				</div>
			) : null}
			<button type="button" onClick={clearSearchField}>
				Clear
			</button>
		</div>
	);
}

export default SearchField;
