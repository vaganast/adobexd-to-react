import styled from "styled-components"

export const StyledNavbar = styled.nav `
    width: 100%;
    height: 65px;
    padding-top: 40px;
    display: flex;

    ul {
    flex: 1;
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
export const Logo = styled.img `
    display: flex;
    width: 50px;
    height: 50px;
`