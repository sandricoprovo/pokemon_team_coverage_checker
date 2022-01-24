import React, { useState, useEffect, ChangeEvent } from 'react';

import { Pokemon, PokeApiPayload, HttpResponse } from '../../types';
import { useDebounce } from '../../hooks';
import { ResultCard } from '../ResultCard';

import {
	SearchContainer,
	SearchLabel,
	SearchInputField,
	SearchClearBtn,
	SearchResultContainer,
} from './styled';

interface SearchFieldProps {
	addTeamMember: (payload: Pokemon) => void;
}

function SearchField({ addTeamMember }: SearchFieldProps) {
	const [searchText, setSearchText] = useState('');
	const debouncedSearchTerm: string = useDebounce(searchText, 1000);
	const [results, setResults] = useState<Pokemon[]>([]);

	function handleSearchChange(event: ChangeEvent<HTMLInputElement>) {
		setSearchText(event.target.value);
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
		<SearchContainer>
			<SearchLabel htmlFor="pokemonSearch">
				Search Pokemon
				<SearchInputField
					type="text"
					name="pokemonSearch"
					id="pokemonSearch"
					placeholder="Enter Pokémon name"
					value={searchText}
					onChange={handleSearchChange}
				/>
				<SearchClearBtn type="button" onClick={() => clearSearchField()}>
					Clear
				</SearchClearBtn>
				{debouncedSearchTerm.length > 0 ? (
					<SearchResultContainer>
						{results.map((result, index) => (
							<ResultCard
								key={`${Math.random()}-${index}`}
								pokemon={result}
								addTeamMember={addTeamMember}
								clearSearch={clearSearchField}
							/>
						))}
					</SearchResultContainer>
				) : null}
			</SearchLabel>
		</SearchContainer>
	);
}

export default SearchField;
