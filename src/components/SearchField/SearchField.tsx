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
	// TODO: Handle showing an empty result card when no results are present.

	function handleSearchChange(event: ChangeEvent<HTMLInputElement>) {
		setSearchText(event.target.value);
	}

	function clearSearchField() {
		setSearchText('');
		setResults([]);
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
		if (!debouncedSearchTerm) return;

		async function fetchSearchResults(searchString: string): Promise<void> {
			try {
				const response: HttpResponse<PokeApiPayload> = await fetch(
					`https://pokeapi.co/api/v2/pokemon/${searchString}`
				);

				response.data = (await response.json()) as PokeApiPayload;
				const formattedPayload = formatPayload(response?.data);

				setResults([formattedPayload]);
			} catch (error) {
				// TODO: Handle error here
				console.log('Error on search fetch');
				// throw error;
			}
		}
		fetchSearchResults(debouncedSearchTerm);
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
				<SearchClearBtn type="button" onClick={clearSearchField}>
					Clear
				</SearchClearBtn>
			</SearchLabel>
			{debouncedSearchTerm && !!results.length ? (
				<SearchResultContainer>
					{results.map((result) => (
						<ResultCard
							key={`${result.name}-${result.id}`}
							pokemon={result}
							addTeamMember={addTeamMember}
							clearSearch={clearSearchField}
						/>
					))}
				</SearchResultContainer>
			) : null}
		</SearchContainer>
	);
}

export default SearchField;
