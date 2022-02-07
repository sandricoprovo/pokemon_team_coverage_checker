import React from 'react';

import { SecondaryBtn } from './styled';
import ButtonProps from './buttonProps';

function SecondaryButton({ text, clickHandler, type }: ButtonProps) {
    return (
        <SecondaryBtn type={type ?? 'button'} onClick={clickHandler}>
            {text}
        </SecondaryBtn>
    );
}

export default SecondaryButton;
