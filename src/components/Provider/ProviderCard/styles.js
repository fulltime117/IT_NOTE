import styled from 'styled-components'

export const ProviderCardContainer = styled.div`
  background: #FFFFFF;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
`

export const ImageWrapper = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  min-width: 60px;
  margin: 0px 25px;

  img {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 1500px) {
    min-width: 100px;
    width: 100px;
    height: 100px;
    margin: 0px 40px;
  }
`

export const InfoWrapper = styled.div`
  h1 {
    font-weight: 600;
    font-size: 30px;
    color: #272727;
    margin: 0;
  }
  p {
    font-weight: 500;
    font-size: 18px;
    color: #EA0F04;
    margin: 0;
  }

  @media (min-width: 1500px) {
    h1 {
      font-size: 36px;
    }
    p {
      font-size: 24px;
    }
  }
`

export const CheckWrapper = styled.div`
  position: absolute;
  right: 0px;
  bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: #00D1FF;
  border: 1px solid #FFFFFF;
  border-radius: 50%;

  svg {
    font-size: 12px;
    width: 12px;
  }

  @media (min-width: 1500px) {
    width: 28px;
    height: 28px;
    svg {
      font-size: 16px;
      width: 16px;
    }
  }
`
