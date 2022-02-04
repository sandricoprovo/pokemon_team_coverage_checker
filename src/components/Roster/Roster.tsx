import React from 'react';

import { RosterContainer } from './styled';

interface RosterProps {
    children: JSX.Element[] | null;
}

function Roster({ children }: RosterProps) {
    return <RosterContainer>{children}</RosterContainer>;
}

export default Roster;
