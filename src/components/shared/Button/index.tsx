import React, { PropsWithChildren } from 'react';
import { ButtonProps } from '@mui/material'

import { ButtonStrab } from './styles'

interface ButtonStrabProps extends ButtonProps {
    width?: number;
}

export const Button: React.FC<PropsWithChildren<ButtonStrabProps>> = ({ children, color, width }) => {
    return (
        <div style={{ width: width || 200 }}>
            <ButtonStrab color={color}>{children}</ButtonStrab>
        </div>
    )
}