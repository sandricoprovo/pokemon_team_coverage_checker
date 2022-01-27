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

	// TODO: Catch 404 errors in fetch function
	async function fetchSearchResults<T>(searchString: string): Promise<HttpResponse<T>> {
		const response: HttpResponse<T> = await fetch(
			`https://pokeapi.co/api/v2/pokemon/${searchString}`
		).catch((error) => {
			throw error;
		});
		console.log(response.status);

		// Handles 404 from server
		if (response.status === 404) {
			throw new Error('API hit 404');
		}

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
			const payload = await fetchSearchResults<PokeApiPayload>(debouncedSearchTerm).catch(
				(error) => {
					throw error;
				}
			);
			if (!payload) return;

			// Sets formatted payload to state
			const formattedPayload = formatPayload(payload.data as PokeApiPayload);
			setResults([formattedPayload]);
		})().catch((error) => {
			throw error;
		});
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
			</SearchLabel>
			{debouncedSearchTerm.length > 0 ? (
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
