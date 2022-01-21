import React, { useState, useEffect, ChangeEvent } from 'react';

import { Pokemon, PokeApiPayload } from '../types';
import { useDebounce } from '../hooks';

import ResultsRow from './ResultRow';

const MOCK_POKEMON = { name: 'Mew', id: 151, sprite: 'image', types: ['psychic'] };

interface SearchFieldProps {
	addTeamMember: (payload: Pokemon) => void;
}

interface HttpResponse<T> extends Response {
	data?: T;
}

function SearchField({ addTeamMember }: SearchFieldProps) {
	const [searchText, setSearchText] = useState('');
	const debouncedSearchTerm: string = useDebounce(searchText, 1000);
	const [results, setResults] = useState<Pokemon[]>([]);

	function handleSearchChange(event: ChangeEvent<HTMLInputElement>) {
		const { value } = event.target;
		// TODO: DEbounce
		setSearchText(value);
	}

	function clearSearchField() {
		setSearchText('');
	}

	async function fetchSearchResults<T>(searchString: string): Promise<HttpResponse<T>> {
		const response: HttpResponse<T> = await fetch(
			`https://pokeapi.co/api/v2/pokemon/${searchString}`
		);
		response.data = (await response.json()) as T;
		return response;
	}

	function formatPayload(payload: PokeApiPayload): Pokemon {
		const { id, name, sprites, types } = payload;
		return {
			name: name ?? '',
			id: id ?? 1,
			sprite: sprites.front_default ?? '',
			types: types.map((type) => type) ?? [],
		};
	}

	useEffect(() => {
		if (!searchText) return;

		(async function () {
			const payload = await fetchSearchResults<PokeApiPayload>(debouncedSearchTerm);
			if (!payload) return;

			// Sets formatted payload to state
			const formattedPayload = formatPayload(payload.data as PokeApiPayload);
			setResults([formattedPayload]);
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
				{debouncedSearchTerm.length > 0 ? (
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
						{results.map((result, index) => (
							<ResultsRow
								key={`${Math.random()}-${index}`}
								pokemon={result}
								addTeamMember={addTeamMember}
							/>
						))}
					</div>
				) : null}
			</label>
		</div>
	);
}

export default SearchField;
