import React from 'react';

interface SearchFieldProps {
	addTeamMember: () => void;
}

function SearchField({ addTeamMember }: SearchFieldProps) {
	// TODOS:
	// - Add state to track current field selection
	// - On add button click update parent state ( need passed in add method)
	// - Format data before sending to parent

	const handleAddTeamMember = () => addTeamMember();

	return (
		<div>
			<label htmlFor="pokemonSearch">
				Search Pokemon
				<input
					type="text"
					name="pokemonSearch"
					id="pokemonSearch"
					placeholder="Enter Pokémon name"
				/>
			</label>
			<button type="button" onClick={handleAddTeamMember}>
				+
			</button>
			<button type="button" onClick={() => console.log('Clearing search field...')}>
				X
			</button>
		</div>
	);
}

export default SearchField;
