import styled from 'styled-components';

export const RosterContainer = styled.section`
	border: 2px solid pink;

	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	gap: 3rem;
`;

export const RosterSlotContainer = styled.div`
	border: 2px solid brown;
	min-width: 280px;
	max-width: 400px;
	padding: 1rem 0;

	flex: 1 1 350px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
`;

export const RemoveSlotBtn = styled.button`
	cursor: pointer;
`;

export const RosterSlotHeader = styled.h1`
	margin: 0;
`;

export const TypesContainer = styled.div`
	display: flex;
	gap: 1rem;
`;
