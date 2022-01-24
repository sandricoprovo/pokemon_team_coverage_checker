import React from 'react';

import { RosterContainer } from './styled';

interface RosterProps {
	children: JSX.Element[] | string;
}

function Roster({ children }: RosterProps) {
	return <RosterContainer>{children}</RosterContainer>;
}

export default Roster;
