import React from 'react'
import { StyledFaq, StyledList, LogoPlus, Line } from './styles/Faq.styled'
import { images } from '../constants'

const Faq = () => {
  return (
    <StyledFaq>
      <h2>FAQ</h2>
      <StyledList>
        <h3>What is Cryptic Retail?</h3>
        <LogoPlus src={images.plus} alt='logo'/>
        </StyledList>
        <StyledList>
        <h3>What is Cryptic Retail?</h3>
        <LogoPlus src={images.minus} alt='logo'/>
        </StyledList>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        <StyledList>
        <h3>What is Cryptic Retail?</h3>
        <LogoPlus src={images.plus} alt='logo'/>
        </StyledList>
        <StyledList>
        <h3>What is Cryptic Retail?</h3>
        <LogoPlus src={images.plus} alt='logo'/>
        </StyledList>
        <Line />
    </StyledFaq>
  )
}

export default Faq