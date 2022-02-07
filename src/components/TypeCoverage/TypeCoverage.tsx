import React, { useEffect, useState } from 'react';

import { RosterTypeCoverage } from '../../types';
import TypePill from '../TypePill';

import {
    CheckCoverageBtn,
    Container,
    CoverageStats,
    CoverageList,
    CoverageListHeader,
} from './styled';

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
                <CoverageList>
                    <CoverageListHeader>
                        <h3>Covered Types</h3>
                        <p>Description...</p>
                    </CoverageListHeader>
                    {coveredTypes.length
                        ? coveredTypes.map((type) => {
                              const formattedType = { type: { name: type } };
                              return <TypePill typeData={formattedType} />;
                          })
                        : 'N/A'}
                </CoverageList>
                <CoverageList>
                    <CoverageListHeader>
                        <h3>Not Covered Types</h3>
                        <p>Description...</p>
                    </CoverageListHeader>
                    {notCoveredTypes.length
                        ? notCoveredTypes.map((type, index) => {
                              const formattedType = { type: { name: type } };
                              return (
                                  <TypePill
                                      key={`${type}_${index}`}
                                      typeData={formattedType}
                                  />
                              );
                          })
                        : 'N/A'}
                </CoverageList>
                <CoverageList>
                    <h3>Percent Covered</h3>
                    <p>{`${coveragePercent}%`}</p>
                </CoverageList>
            </CoverageStats>
        </Container>
    );
}

export default TypeCoverage;
