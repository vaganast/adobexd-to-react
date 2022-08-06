import styled from "styled-components"

export const StyledPricing = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    margin: 0 0 207px 0;
    flex-direction: column;
    padding: 0 98px 0 98px;

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
    margin-top: 131px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
    row-gap: 52px;
`

export const Card = styled.div`
    display: flex;
    flex-direction: row;
    width: 736px;
    height: 212px;
    color: #fff;
    border: 1px solid #f693d4;
    border-radius: 10px;
    justify-content: start;


    p{
        font-size: 20px;
        font-weight: 100;
        margin: 19px 0 0 0;
      }
    
    h3{
        font-size: 25px;
        font-weight: 200;        
        margin: 30px 0 0 0;
      }

      
    h6{
        display: flex;
        width: 86px;
        height: 86px;
        margin: 25px 44px 101px 24px;
        align-items: center;
        justify-content: center;
        border: 1px solid #ffffff;
        border-radius: 3px;
        font-size: 20px;
        padding: 34px 15px 35px 12px;
        font-weight: 400;
      }
`

export const Wrapper = styled.div`
      display: flex;
      flex-direction: column;
      margin-right: 25px;
      justify-content: start;     
`