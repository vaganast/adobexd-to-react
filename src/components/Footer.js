import React from 'react'
import { StyledFooter, Container, Box, LogoFooter, Wrapper } from './styles/Footer.styled'
import { images } from '../constants'

const Footer = () => {
  return (
    <StyledFooter>
        <Container>
            <h6>Navigation</h6>
        <ul>
            {['Home', 'Features', 'Pricing', 'FAQ'].map((item) => (
                <li>
                    <a href={`#${item}`}>{item}</a>
                </li>
            ))}
        </ul>
        </Container>
        <Container>
            <h6>Company</h6>
        <ul>
            {['Contact', 'Terms of Service', 'Privacy Policy'].map((item) => (
                <li>
                    <a href={`#${item}`}>{item}</a>
                </li>
            ))}
        </ul>
        </Container>
        <Box>
            <img src={images.discord} alt='discord'/>
            <p>Join here</p>
            <img src={images.twitter} alt='discord'/>
            <p>Join here</p>
            <img src={images.instagram} alt='discord'/>
            <p>Join here</p>            
        </Box>
        <LogoFooter>
            <img src={images.logo2} alt='logo'/>
            <Wrapper>
            <h5>Cryptic <span>Retail</span></h5>            
            <p>C 2022, Cryptic Retail</p>  
            <h6>Designed by Xtrada</h6>                                
            </Wrapper>
            
        </LogoFooter>
</StyledFooter>
  )
}

export default Footer