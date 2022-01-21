import React, { useState, useEffect, ChangeEvent } from 'react';

import { Pokemon } from '../types';
import { useDebounce } from '../hooks';

import ResultsRow from './ResultRow';

interface SearchFieldProps {
	addTeamMember: (payload: Pokemon) => void;
}

interface HttpResponse<T> extends Response {
	data?: T;
}

function SearchField({ addTeamMember }: SearchFieldProps) {
	// TODOS:
	// - Add state to track current field selection
	const [searchText, setSearchText] = useState('');
	const debouncedSearchTerm: string = useDebounce(searchText, 2000);
	const [results, setResults] = useState<any[] | []>([]);
	// - Format data before sending to parent

	function handleSearchChange(event: ChangeEvent<HTMLInputElement>) {
		const { value } = event.target;
		// TODO: DEbounce
		setSearchText(value);
	}

	function clearSearchField() {
		setSearchText('');
	}

	async function fetchSearchResults<T>(searchString: string): Promise<HttpResponse<T> | null> {
		try {
			const response: HttpResponse<T> = await fetch(
				`https://pokeapi.co/api/v2/pokemon/${searchString}`
			);
			response.data = (await response.json()) as T;
			return response;
		} catch (error) {
			console.log({ error });
			return null;
		}
	}

	function formatPayload(payload: unknown): Pokemon {
		return { name: '' };
	}

	useEffect(() => {
		if (!searchText) return;

		(async function () {
			const payload = await fetchSearchResults(debouncedSearchTerm);
			const formattedPayload = formatPayload(payload);
			console.log(formattedPayload);

			// TODO: Format data
			setResults([0, 0, 0]);
		})();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [debouncedSearchTerm]);

	return (
		<div style={{ position: 'relative', border: '2px solid green' }}>
			<label
				htmlFor="pokemonSearch"
				style={{
					position: 'relative',
					border: '2px solid green',
					display: 'flex',
					flexDirection: 'column',
					padding: '20%',
				}}
			>
				Search Pokemon
				<input
					type="text"
					name="pokemonSearch"
					id="pokemonSearch"
					placeholder="Enter Pokémon name"
					value={searchText}
					onChange={handleSearchChange}
				/>
				<button type="button" onClick={clearSearchField}>
					Clear
				</button>
				{searchText.length > 0 ? (
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							border: '2px solid blue',
							position: 'absolute',
							top: '64%',
							// left: '45%',
						}}
					>
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
			</label>
		</div>
	);
}

export default SearchField;
