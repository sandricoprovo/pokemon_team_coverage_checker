import React from 'react';

import { PrimaryBtn } from './styled';

interface PrimaryBtnProps {
    text: string;
    type?: 'button' | 'submit' | 'reset' | undefined;
    clickHandler?: () => void;
}

function PrimaryButton({ text, type, clickHandler }: PrimaryBtnProps) {
    return (
        <PrimaryBtn type={type ?? 'button'} onClick={clickHandler}>
            {text}
        </PrimaryBtn>
    );
}

export default PrimaryButton;
