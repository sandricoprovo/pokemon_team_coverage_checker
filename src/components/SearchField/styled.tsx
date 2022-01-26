import styled from 'styled-components';

export const SearchContainer = styled.div`
	border: 2px solid green;
	position: relative;
	padding: 4rem;

	display: flex;
	flex-direction; column;
	justify-content: center;
	align-items: flex-start;
`;

export const SearchLabel = styled.label`
	position: relative;
	border: 2px solid magenta;
	min-width: 300px;
	padding: 1rem;

	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;
	gap: 1rem;
`;

export const SearchInputField = styled.input`
	flex: 1 2 150px;
	max-width: 500px;
	padding: 0.5rem 0.25rem;
`;
export const SearchClearBtn = styled.button`
	padding: 0.5rem 3rem;
	border: none;
`;

export const SearchResultContainer = styled.div`
	width: 300px;
	position: absolute;
	left: 0;
	right: 0;
	margin: auto;
	top: 80%;

	display: flex;
	flex-direction: column;
`;
