import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
button {
    background-color: ${props => props.colors.keys.numbersBg};
}`;
