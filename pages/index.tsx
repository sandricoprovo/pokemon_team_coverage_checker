import React, { useState } from 'react';

import { Pokemon } from '../src/types';
import SearchField from '../src/components/SearchField';

function HomePage(): JSX.Element {
	const [teamMembers, setTeamMembers] = useState([]);
	// TODOS:
	// - Add a method that updates team members & pass to Search Field

	const handleNewTeamMember = (pokemon: Pokemon) => console.log({ pokemon });

	return (
		<main style={{ border: '2px solid blue' }}>
			<h1>Hello World</h1>
			<div>
				<SearchField addTeamMember={handleNewTeamMember} />
			</div>
		</main>
	);
}

export default HomePage;
