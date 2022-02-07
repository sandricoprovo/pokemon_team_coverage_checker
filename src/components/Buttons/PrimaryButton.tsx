import React from 'react';

import { PrimaryBtn } from './styled';
import ButtonProps from './buttonProps';

function PrimaryButton({ text, type, clickHandler }: ButtonProps) {
    return (
        <PrimaryBtn type={type ?? 'button'} onClick={clickHandler}>
            {text}
        </PrimaryBtn>
    );
}

export default PrimaryButton;
