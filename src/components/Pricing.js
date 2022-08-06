import React from 'react'
import { StyledPricing, Card, Cards, Wrapper } from './styles/Pricing.styled'
import { Box } from './styles/Box.styled'

const Pricing = () => {
  return (
    <StyledPricing>
        <Box>
            <h2>Pricing</h2>
            <p>Start buying your favorite <span>providers</span> at their fair price</p>
        </Box>
        <Cards>
            <Card>
                <h6>LOGO</h6>
                    <Wrapper>
                        <h3>Provider name</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore 
                            magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris.</p>
                    </Wrapper>
            </Card>
            <Card>
                <h6>LOGO</h6>
                    <Wrapper>
                        <h3>Provider name</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore 
                            magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris.</p>
                    </Wrapper>
            </Card>
            <Card>
                <h6>LOGO</h6>
                    <Wrapper>
                        <h3>Provider name</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore 
                            magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris.</p>
                    </Wrapper>
            </Card>
            <Card>
                <h6>LOGO</h6>
                    <Wrapper>
                        <h3>Provider name</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore 
                            magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris.</p>
                    </Wrapper>
            </Card>
            <Card>
                <h6>LOGO</h6>
                    <Wrapper>
                        <h3>Provider name</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore 
                            magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris.</p>
                    </Wrapper>
            </Card>
            <Card>
                <h6>LOGO</h6>
                    <Wrapper>
                        <h3>Provider name</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore 
                            magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris.</p>
                    </Wrapper>
            </Card>
        </Cards>
    </StyledPricing>
  )
}

export default Pricing