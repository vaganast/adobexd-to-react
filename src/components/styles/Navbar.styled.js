import styled from "styled-components"

export const StyledNavbar = styled.nav `
    height: 65px;
    padding: 40px 100px 0 100px;
    display: flex;
    //position: sticky;
    //top:0;

    ul {
    padding-left: 0;
    display: flex;
    list-style: none;
    justify-content: center;
    }

    ul li {
        margin: 0 2rem;
        font-weight: 400;
        font-size: 18px;
        cursor: pointer;
        flex-direction: column;
    }

    a {
        text-decoration: none;
        flex-direction: column;
        color: #ffffff;

    &:hover {
            color: grey;
        }
    }
`
export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;    
`
export const Logo = styled.img `
    display: flex;
    width: 50px;
    height: 50px;
    margin-right:108px;
`