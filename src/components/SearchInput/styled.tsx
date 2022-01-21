import styled from 'styled-components';

export const SearchContainer = styled.div`
	border: 2px solid green;
	position: relative;
`;

export const SearchLabel = styled.label`
	position: relative;
	border: 2px solid green;
	padding: 20%;

	display: flex;
	flex-direction: column;
`;

export const SearchInputField = styled.input``;
export const SearchClearBtn = styled.button``;

export const SearchResultContainer = styled.div`
	border: 2px solid blue;
	position: absolute;
	top: 64%;

	display: flex;
	flex-direction: column;
`;
