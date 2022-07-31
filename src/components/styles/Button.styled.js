import styled from "styled-components";

export const StyledButton = styled.button `
    width: 158px;
    height: 47px;
    background-color: ${({ bg }) => bg ||'#c83f8f'};
    color: white;
    border-radius: 14px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
`