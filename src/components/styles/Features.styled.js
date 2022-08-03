import styled from "styled-components";

export const StyledFeatures = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    margin-top: 75px;
    flex-direction: column;
    padding: 0 88px 0 83px;
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
export const Box =styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 166px;
`
export const Cards = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
flex-wrap: wrap;
row-gap: 70px;
`
export const Card = styled.div`
  background: #0a51cc;
  width: 600px;
  height: 200px;
  color: #fff;
  border-radius: 10px;  
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.6);
  
  
`
export const Icon = styled.img `
    display: flex;
    width: 50px;
    height: 50px;
    margin-right:108px;
`