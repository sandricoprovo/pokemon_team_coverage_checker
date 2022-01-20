import React, { ReactNode } from 'react';
import styled from 'styled-components';

const AppContainer = styled.div`
	border: 4px solid red;
`;

interface LayoutProps {
	children: ReactNode;
}

function Layout({ children }: LayoutProps): JSX.Element {
	return <AppContainer>{children}</AppContainer>;
}

export default Layout;
