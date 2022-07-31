import styled from 'styled-components';
import { white } from '../../utils/colors';

interface CategoryContainerProps {
    backgroundColor: string;
}

export const CategoryContainer = styled.div<CategoryContainerProps>`
    border-radius: 2px;
    padding: 16px;
    background-color: ${props => props.backgroundColor};
    min-height: 70px;
    display: flex;
    align-items: center;
    :hover {
        cursor: pointer;
        filter: brightness(90%);
        -ms-filter: brightness(90%);
        -webkit-filter: brightness(90%);
    }
`

export const CategoryDescription = styled.span`
    color: ${white};
    font-size: 1.5em;
`