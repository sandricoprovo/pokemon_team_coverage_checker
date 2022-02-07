import styled from 'styled-components';

export const Container = styled.section`
    border: 2px solid orange;
    padding: 2rem;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
`;

export const CoverageStats = styled.div`
    border: 2px solid gold;
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    gap: 2rem;

    & > div:last-child {
        align-self: center;
    }
`;

export const CoverageList = styled.div`
    width: 300px;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

export const CoverageListHeader = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: flex-start;
    align-items: center;
`;
