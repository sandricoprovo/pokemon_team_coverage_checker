import React from 'react';

import { CheckCoverageBtn, Container } from './styled';

interface TypeCoverageProps {
	checkMethod: () => void;
}

function TypeCoverage({ checkMethod }: TypeCoverageProps) {
	return (
		<Container>
			<CheckCoverageBtn type="button" onClick={checkMethod}>
				Check Type Coverage
			</CheckCoverageBtn>
		</Container>
	);
}

export default TypeCoverage;
