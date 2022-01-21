import React from 'react';

import { SlotsContainer } from './styled';

interface SlotsProps {
	children: JSX.Element[] | string;
}

function Slots({ children }: SlotsProps) {
	return <SlotsContainer>{children}</SlotsContainer>;
}

export default Slots;
