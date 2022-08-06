import React from 'react'
import { StyledButton } from './styles/Button.styled'
import { StyledHeader, ButtonScroll, Box } from './styles/Header.styled'

const Header = () => {
  return (
    
    <StyledHeader >  
             
            <h1>Cryptic <span>Retail</span></h1>
            <h3>Easy, fast and affordable proxies </h3>
            <p>With the most advanced tools, we offer you the opportunity to buy proxies <br />
            directly from the provider at the same price and speed.</p>
            <Box>
              <StyledButton >Sign up</StyledButton>
              <StyledButton bg= '#f693d4'>Contact us</StyledButton>
            </Box>  
                      
            <ButtonScroll />  
            
    </StyledHeader>
    
  )
}

export default Header