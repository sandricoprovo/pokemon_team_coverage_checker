import React, { useEffect, useState } from 'react';

import { RosterTypeCoverage } from '../../types';
import TypePill from '../TypePill';

import { CheckCoverageBtn, Container, CoverageStats } from './styled';

interface TypeCoverageProps {
    coverageData: RosterTypeCoverage;
    checkMethod: () => void;
}

function TypeCoverage({ coverageData, checkMethod }: TypeCoverageProps) {
    const [coveredTypes, setCoveredTypes] = useState<string[]>([]);
    const [notCoveredTypes, setNotCoveredTypes] = useState<string[]>([]);
    const [coveragePercent, setCoveragePercent] = useState<number>(0);

    useEffect(() => {
        if (!coverageData) return;
        const { covered, notCovered, percentage } = coverageData;

        setCoveredTypes(covered);
        setNotCoveredTypes(notCovered);
        setCoveragePercent(percentage);
    }, [coverageData]);

    return (
        <Container>
            <CheckCoverageBtn type="button" onClick={checkMethod}>
                Check Type Coverage
            </CheckCoverageBtn>
            <CoverageStats>
                <div>
                    <h3>Covered Types</h3>
                    <p>Description...</p>
                    {coveredTypes.length
                        ? coveredTypes.map((type) => {
                              const formattedType = { type: { name: type } };
                              return <TypePill typeData={formattedType} />;
                          })
                        : 'N/A'}
                </div>
                <div>
                    <h3>Not Covered Types</h3>
                    <p>Description...</p>
                    {notCoveredTypes.length
                        ? notCoveredTypes.map((type) => {
                              const formattedType = { type: { name: type } };
                              return <TypePill typeData={formattedType} />;
                          })
                        : 'N/A'}
                </div>
                <div>
                    <h3>Percent Covered</h3>
                    <p>{`${coveragePercent}%`}</p>
                </div>
            </CoverageStats>
        </Container>
    );
}

export default TypeCoverage;
