import styled from "styled-components";

export const StyledFeatures = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    margin: 75px 0 207px 0;
    flex-direction: column;
    padding: 0 188px 0 183px;
    
    h2{
        margin: 0;
        font-size: 60px;
        font-weight: 400;
        color: #ffffff;
        letter-spacing: 5px;
    }

    p{
        margin: 15px 0 0 0;
        font-size: 20px;
        color: #ffffff
    }    
    span{
        color: #993366
    }   
`

export const Cards = styled.div`
margin-top: 166px;
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
flex-wrap: wrap;
row-gap: 70px;
`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 200px;
  color: #fff;
  
  img{
    display: flex;
    width: 50px;
    height: 50px;
    margin:0;
    }

  p{
    font-size: 20px;
    margin: 31px 0 0 0;
  }

  h3{
    font-size: 30px;
    font-weight: bold;
    margin: 32px 0 0 0;
  }
`
