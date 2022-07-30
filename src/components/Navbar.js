import React from 'react'
import { Logo, StyledNavbar } from './styles/Navbar.styled'
import { images } from '../constants'
import { Container } from './styles/Container.styled'
import { StyledButton } from './styles/Button.styled'

const Navbar = () => {
  return (
    <StyledNavbar>
        <Container>
            <Logo src={images.logo2} alt='logo'/>
                <ul>
                    {['Home', 'Features', 'Pricing', 'FAQ'].map((item) => (
                        <li>
                            <a href={`#${item}`}>{item}</a>
                        </li>
            ))}
                </ul>
                        <StyledButton>Dashboard</StyledButton>
        </Container>
    </StyledNavbar>
  )
}

export default Navbar