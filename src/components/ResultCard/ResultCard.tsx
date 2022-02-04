import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import { Pokemon } from '../../types';
import { capitalizeFirstLetter } from '../../utils';
import TypePill from '../TypePill';

import { CardContainer, ResultTypes } from './styled';

interface ResultCardProps {
    pokemon: Pokemon;
    addTeamMember: (payload: Pokemon) => void;
    clearSearch: () => void;
}

function ResultCard({ pokemon, addTeamMember, clearSearch }: ResultCardProps) {
    const [pokemonData, setPokemonData] = useState<Pokemon>({
        id: 0,
        name: '',
        sprite: '',
        types: [],
    });
    const [isVisible, setIsVisible] = useState(false);

    function removeOnClick() {
        clearSearch();
        setIsVisible(false);
        addTeamMember(pokemon);
    }

    useEffect(() => {
        if (!pokemon) return;
        setPokemonData(pokemon);
        setIsVisible(true);
    }, [pokemon]);

    return isVisible ? (
        <CardContainer
            onClick={removeOnClick}
            onKeyDown={removeOnClick}
            role="button"
            tabIndex={0}
        >
            <Image
                src={pokemonData.sprite}
                alt={`A small colored sprite of ${pokemonData.name}.`}
                width={88}
                height={88}
            />
            <h2>{capitalizeFirstLetter([...pokemonData.name]) ?? 'Pokemon'}</h2>
            <ResultTypes>
                {pokemonData.types.map((typeData, index) => (
                    <TypePill
                        key={`${typeData.slot ?? index}_${typeData.type.name}`}
                        typeData={typeData}
                    />
                ))}
            </ResultTypes>
        </CardContainer>
    ) : null;
}

export default ResultCard;
