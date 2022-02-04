import styled from 'styled-components';

// TODO: Add mediaQuery to make card vertical on smaller screens
export const CardContainer = styled.div`
    border: 2px solid purple;
    background-color: white;
    width: 80%;
    min-width: 300px;
    height: 80px;
    z-index: 10;
    cursor: pointer;
    padding: 3rem 0rem;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export const ResultTypes = styled.div`
    display: flex;
    gap: 1rem;
`;
