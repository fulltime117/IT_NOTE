import styled from 'styled-components'

export const WalletCardContainer = styled.div`
  background: #FFFFFF;
  border-radius: 12px;
  position: relative;
  width: 100%;
  margin-top: 70px;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 300px;
  
  h1 {
    font-family: Poppins;
    font-weight: 500;
    font-size: 25px;
    text-transform: uppercase;
    color: #1B1B1B;
    margin: 0;
  }

  p {
    margin-top: 5px;
    margin-bottom: 0px;
    font-size: 15px;
    color: #BABABA;
  }

  > img {
    position: absolute;
    top: -20px;
    right: -20px;
    min-width: 90px;
    width: 90px;
  }
  @media (min-width: 1024px) {
    min-height: 365px;
  }

  @media(min-width: 1500px) {
    padding: 30px 25px;
    height: 483px;
    h1 {
      font-size: 24px;
    }
    p {
      margin-top: 10px;
      font-size: 18px;
    }
    > img {
      position: absolute;
      top: -70px;
      right: -20px;
      min-width: 120px;
      width: 120px;
    }
  }
`

export const HeaderImg = styled.img`
  height: 80px;
  margin-bottom: 15px;
  min-width: 75px;

  @media(min-width: 1500px) {
    height: 100px;
    margin-bottom: 20px;
  }
`

export const NumberWrapper = styled.div`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background: #FD0D00;
  box-shadow: 0px 0px 6px 2px rgba(255, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-weight: 600;
    font-size: 25px;
    color: #FFFFFF;
  }

  @media(min-width: 1500px) {
    width: 70px;
    height: 70px;

    span {
      font-size: 30px;
    }
  }
`

export const HeaderWrapper = styled.div``