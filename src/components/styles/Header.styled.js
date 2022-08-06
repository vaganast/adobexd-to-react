import styled from "styled-components";
import { images } from "../../constants";

export const StyledHeader = styled.div`
align-items: center;
justify-content: center;
display: flex;
color: #ffffff;
flex-direction: column;
padding-top: 260px;

h1{ 
    font-weight: 900;
    font-size: 100px;
    margin: 0;
    span{
        color: #c83f8f;
    }
}

h3{ 
    font-weight: 600;
    margin: 22px 0 0 0;
    font-size: 40px;
}
p{  
    display: inline-block;
    text-align: center;
    margin-top: 48px;
    font-size: 20px;
    margin-bottom: 103px;
}
`
export const ButtonScroll = styled.button `
    background: url(${images.Scroll});
    width: 23px;
    height: 57px;
    border: none;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
`

export const Box = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 363px;
    margin-bottom: 253px;
`