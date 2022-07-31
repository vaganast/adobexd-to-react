import { createGlobalStyle } from "styled-components";
import { images } from "../../constants"

export const GlobalStyles = createGlobalStyle `
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    
    *{
        box-sizing: border-box;
    }

    body {
        background: url(${images.background2});
        background-repeat: no-repeat;
        background-size: cover;     
        margin: 0;
        padding: 0px 100px 0px 100px;        
        font-family: 'Montserrat', sans-serif;
    }
`