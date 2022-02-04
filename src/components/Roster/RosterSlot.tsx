import React from 'react';
import Image from 'next/image';

import TypePill from '../TypePill';
import { Pokemon } from '../../types';
import { capitalizeFirstLetter } from '../../utils';

import {
    RosterSlotContainer,
    TypesContainer,
    Header,
    RemoveSlotBtn,
    ContentContainer,
    SpriteContainer,
} from './styled';

interface RosterSlotProps {
    pokemon: Pokemon;
    removeFromRoster: (value: Pokemon) => void;
}

function RosterSlot({ pokemon, removeFromRoster }: RosterSlotProps) {
    // TODO: Add an X (remove) icon in to right to remove pokemon.
    const { name, types, sprite: spriteUrl } = pokemon;

    return (
        <RosterSlotContainer>
            <RemoveSlotBtn onClick={() => removeFromRoster(pokemon)}>
                X
            </RemoveSlotBtn>
            <ContentContainer>
                <SpriteContainer>
                    <Image
                        src={spriteUrl}
                        alt={`A small colored sprite of ${name}.`}
                        width={100}
                        height={100}
                    />
                    <Header>{capitalizeFirstLetter([...name])}</Header>
                </SpriteContainer>
                <TypesContainer>
                    {types.map((typeData, index) => (
                        <TypePill
                            key={`${typeData.slot ?? index}_${
                                typeData.type.name
                            }`}
                            typeData={typeData}
                        />
                    ))}
                </TypesContainer>
            </ContentContainer>
        </RosterSlotContainer>
    );
}

export default RosterSlot;
