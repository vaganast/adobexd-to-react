import React from 'react'
import { StyledFeatures, Cards, Card } from './styles/Features.styled'
import { images } from "../constants";
import { Box } from './styles/Box.styled';

const Features = () => {
  return (
    <StyledFeatures>      
        <Box>
            <h2>Features</h2>
            <p>The most advanced <span>proxy</span> solution in the market</p>
        </Box>
          <Cards>
            <Card>
              <img src={images.cheapest} alt='cheap'/>
              <h3>Cheapest Rate</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
              </p>
              </Card>
            <Card> 
              <img src={images.expiry} alt='expiry' />
              <h3>No Expiry</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
              </p>
              </Card>
            <Card> 
              <img src={images.speed} alt='speed'/>
              <h3>Lighting Fast Speed</h3>
              <p>With more than 5 different providers and the most advanced 
                programs we make sure that your proxiesare always on point
                for every imaginable drop.  
              </p>
              </Card>
            <Card> 
              <img src={images.uptime} alt='uptime'/>
              <h3>99.9 Uptime</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
              </p>
              </Card>
            <Card> 
              <img src={images.dashboard} alt='dashboard'/>
              <h3>Online Dashboard</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
              </p>
              </Card>
            <Card> 
              <img src={images.support} alt='support'/>
              <h3>24/7 Support</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
              </p>
              </Card>
        </Cards>
        
    </StyledFeatures>
  )
}

export default Features