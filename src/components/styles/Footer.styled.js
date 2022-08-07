import styled from "styled-components";

export const StyledFooter = styled.footer `
    display: flex;
    background-color: #000000;
    width: 100%;
    height: 230px;
    padding: 28px 50px 0 200px;
    
`
export const Container = styled.div `
    display: flex;
    flex-direction: column;
    margin: 0 192px 0 0;
    

    h6{
        font-size: 20px;
        color: #ffffff;
        font-weight: 200;
        margin: 0 0 23px 0;
        padding: 0;
    }

    ul {
        flex-direction: column;
        padding: 0;
        display: flex;
        list-style: none;
        justify-content: center;
        }
    
        ul li {
            margin-bottom: 16px;
            font-weight: 200;
            font-size: 12px;
            cursor: pointer;
            
        }
    
        a {
            text-decoration: none;
            color: #d8d8d8;
            white-space: nowrap;
    
        &:hover {
                color: white;
            }
        }
`

export const Box = styled.div `
    display: flex;
    flex-direction: row;
    margin: 0px 0 0 104px;
    align-items: center;
        
    img {
        width: 32px;
        height: 32px;
        display: flex;
        margin: 0 21px 0 0;        
    }

    p {
        font-size: 15px;
        font-weight: 200;
        color: #d8d8d8;
        margin: 0 49px 0 0;
        text-align: center;
        white-space: nowrap;

        &:hover {
            opacity: 80%;
            cursor: pointer;
        }
    }
`

export const LogoFooter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 194px;
        
    h5 {
        font-size: 20px;
        font-weight: 200;
        color: #ffffff;        
        white-space: nowrap;
        margin:0 0 4px 0;
    }

    span {
        color: #c83f8f;
    }

    img{
        width: 71px;
        height: 71px;
    }

    p {
        color: #d8d8d8;
        margin: 0;
        white-space: nowrap;
    }

    h6 {
        margin: 0;
        color: #d8d8d8;
        white-space: nowrap;        
    }
`

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
`