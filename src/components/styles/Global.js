import { createGlobalStyle } from "styled-components";
import { images } from "../../constants"

export const GlobalStyles = createGlobalStyle `
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap'); 
       
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