import React, { useState } from 'react';

import SearchField from '../src/components/SearchField';

function HomePage(): JSX.Element {
	const [fieldInputs, setFieldInputs] = useState<string[]>([]);
	// TODOS:
	// - Add state to track team members
	// - Add a method that updates team members & pass to Search Field
	// - Team member should know it's form field
	// - On removal

	return (
		<main style={{ border: '2px solid blue' }}>
			<h1>Hello World</h1>
			<div>
				<SearchField addTeamMember={() => console.log('Adding...')} />
			</div>
		</main>
	);
}

export default HomePage;
