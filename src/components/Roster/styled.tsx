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
	max-width: 350px;
	padding: 1rem;

	flex: 1 1 350px;
	display: flex;
	gap: 1rem;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
`;

export const RemoveSlotBtn = styled.button`
	cursor: pointer;
	margin-left: auto;
`;

export const ContentContainer = styled.div`
	border: 2px solid grey;
	width: 100%;

	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const SpriteContainer = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

export const Header = styled.h1`
	margin: 0;
	font-size: 1.5rem;
`;

export const TypesContainer = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;
