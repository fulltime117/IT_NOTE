import styled from 'styled-components'

export const FunnyNFTCareerContainer = styled.div`
  position: relative;
`

export const Content = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;

  > div {
    width: 100%;
  }

  @media (min-width: 768px) {
    padding: 40px;
    flex-direction: row;
    > div {
      width: 50%;
    }
  }

  @media (min-width: 1500px) {
    padding: 40px 100px;
  }
`

export const ImgWrapper = styled.div`
  img {
    width: 100%;
  }
`

export const InfoWrapper = styled.div`
  > h1 {
    font-weight: 600;
    font-size: 30px;
    color: ${props => props.theme.colors.primary};
    margin: 0px;
    margin-bottom: 20px;
  }
  > p {
    font-size: 16px;
    color: ${props => props.theme.colors.white};
    margin: 0px;
  }

  @media (min-width: 1500px) {
    h1 {
      font-size: 55px;
    }
    p {
      font-size: 25px;
    }
  }
`

export const TitleDecoration = styled.div`
  display: flex;
  align-items: center;

  > div {
    height: 4px;
    width: 70px;
    background-color: ${props => props.theme.colors.primary};
    margin-right: 20px;
  }

  > h2 {
    font-weight: bold;
    font-size: 23px;
    color: ${props => props.theme.colors.white};
    margin: 0;
  }

  @media (min-width: 1500px) {
    h2 {
      font-size: 30px;
    }
  }
`

export const BoxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;

  img {
    width: 60px;
    min-width: 60px;
    height: 60px;
    margin-right: 25px;
  }

  @media (min-width: 1500px) {
    margin-top: 70px;
    img {
      width: 70px;
      min-width: 70px;
      height: 70px;
      margin-right: 40px;
    }
  }
`

export const BoxDescription = styled.div`
  h2 {
    font-family: Poppins;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 20px;
    color: ${props => props.theme.colors.primary};
    margin: 0px;
  }

  p {
    font-family: Poppins;
    font-size: 15px;
    margin: 0px;
    color: ${props => props.theme.colors.white};
    max-width: 500px;
  }

  @media (min-width: 1500px) {
    h1 {
      font-size: 30px;
    }
    p {
      font-size: 19px;
    }
  }
`

export const Overlay = styled.div`
  z-index: -1;
  top: 0px;
  position: absolute;
  left: 0px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  img {
    width: 100%;
  }
`
