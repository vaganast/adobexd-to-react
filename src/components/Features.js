import React from 'react'
import { StyledFeatures, Cards, Card, Box } from './styles/Features.styled'
const Features = () => {
  return (
    <StyledFeatures>
      
        <Box>
            <h2>Features</h2>
            <p>The most advanced <span>proxy</span> solution in the market</p>
        </Box>
          <Cards>
            <Card>Cheapest Rate</Card>
            <Card>No Expiry</Card>
            <Card>Lighting Fast Speed</Card>
            <Card>99,9% Uptime</Card>
            <Card>Online Dashboard</Card>
            <Card>24/7 Support</Card>
        </Cards>
        
    </StyledFeatures>
  )
}

export default Features