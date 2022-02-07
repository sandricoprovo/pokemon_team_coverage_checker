import styled from 'styled-components';

const BaseButton = styled.button`
    border: none;
    cursor: pointer;
    padding: 0.5rem 3rem;
`;

export const PrimaryBtn = styled(BaseButton)`
    background-color: green;
`;

export const SecondaryBtn = styled(BaseButton)`
    background-color: blue;
`;
