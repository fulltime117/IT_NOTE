import styled from 'styled-components'

export const HomeHeroContainer = styled.div`
  position: relative;
`

export const Content = styled.div`
  width: 100%;
  padding: 100px 0px;
  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    width: 100%;
    margin-top: 30px;
  }

  @media (min-width: 768px) {
    padding: 100px 0px;
    flex-direction: row;
    margin-left: auto;
    margin-right: auto;
    img {
      width: 50%;
      margin-top: 0px;
    }
  }
  @media (min-width: 1500px) {
    padding: 150px 0px 50px 0px;
    flex-direction: row;
    margin-left: auto;
    margin-right: auto;
    height: 1000px;
    img {
      width: 50%;
      margin-top: 0px;
    }
  }
`

export const InfoWrapper = styled.div`
  width: 100%;
  margin-left: 0px;
  padding: 20px;
  h1 {
    font-family: Salsa;
    font-size: 40px;
    color: ${props => props.theme.colors.white};
    margin: 0px;

    span {
      color: ${props => props.theme.colors.primary};
    }
  }

  @media (min-width: 768px) {
    margin-left: 40px;
    padding: 0px;
    width: 50%;
    h1 {
      font-size: 50px;
    }
  }

  @media (min-width: 1500px) {
    margin-left: 100px;
    h1 {
      font-size: 70px;
    }
  }
`

export const ActionWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;

  button {
    height: 44px;
    width: 115px;
    transition: all 0.3s;
    &:first-child {
      margin-right: 15px;
    }
  }

  @media (min-width: 576px) {
    button {
      &:first-child {
        margin-right: 30px;
      }
    }
  }

  @media (min-width: 1500px) {
    margin-top: 70px;

    button {
      height: 52px;
      width: 165px;
      padding-left: 40px;
      padding-right: 40px;
      &:first-child {
        margin-right: 40px;
      }
    }
  }
`

/*** BENEFIT section ***/
export const BenefitContent = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  > div {
    width: 100%;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 20px 40px;
    > div {
      width: 50%;
    }
  }

  @media (min-width: 1500px) {
    padding: 40px 100px;
  }
`

export const BenefitInfoWrapper = styled.div`
  > h1 {
    font-weight: 600;
    font-size: 30px;
    color: ${props => props.theme.colors.primary};
    margin: 0px;
  }
  > p {
    font-size: 18px;
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
    font-size: 30px;
    color: ${props => props.theme.colors.white};
    margin: 0;
  }
`

export const BoxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
  margin-top: 30px;

  img {
    width: 50px;
    min-width: 50px;
    height: 50px;
    margin-right: 25px;
  }

  @media (min-width: 1500px) {
    margin-top: 60px;
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
    font-size: 25px;
    color: ${props => props.theme.colors.primary};
    margin: 0px;
  }

  p {
    font-family: Poppins;
    font-size: 16px;
    margin: 0px;
    color: ${props => props.theme.colors.white};
    max-width: 500px;
  }

  @media (min-width: 1500px) {
    h2 {
      font-size: 30px;
    }
    p {
      font-size: 19px;
    }
  }
`

export const BenefitImageWrapper = styled.div`
  margin-top: 30px;

  > img {
    width: 100%;
  }

  @media (min-width: 768px) {
    margin-top: 0px;
  }
`

export const LiveFunnyContent = styled.div`
  width: 100%;
  padding: 20px;
  position: relative;

  @media (min-width: 768px) {
    padding: 20px 40px;
  }

  @media (min-width: 1500px) {
    padding: 40px 100px;
  }
`

export const LiveFunnyContentBg = styled.div`
  position: absolute;
  width: 100%;
  z-index: 1;
  top: 0px;
  left: 0px;
  display: none;
  justify-content: space-between;

  @media (min-width: 768px) {
    display: flex;
  }
`

export const LiveFunnyHeader = styled.div`
  background: #F61206;
  border-radius: 12px;
  z-index: 2;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  flex-direction: column;

  @media (min-width: 576px) {
    flex-direction: row;
    padding: 15px 30px;
  }

  @media (min-width: 1500px) {
    padding: 20px 50px;
  }

`

export const LiveFunnyLogoWrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 38px;
    min-width: 38px;
    margin-right: 30px;
  }

  p {
    margin: 0px;
    font-family: Poppins;
    font-weight: 600;
    font-size: 25px;
    text-transform: uppercase;
    color: ${props => props.theme.colors.white};
  }
  @media (min-width: 1500px) {
    p {
      font-size: 30px;
    }
  }
`

// export const ArrowButtonGroup = styled.div`
//   display: flex;
//   button {
//     margin-left: 25px;
//     width: 55px;
//     height: 55px;
//     border-radius: 50%;
//     display: flex;
//     align-items: center;
//     justify-content: center;

//     img {
//       width: 17px;
//       height: 17px;
//     }
//   }
// `

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  z-index: 2;
  position: relative;
  margin-top: 30px;

  > div {
    width: calc(100% - 20px);
    margin: 25px 10px;
  }

  @media(min-width: 768px) {
    > div {
      width: calc(50% - 20px);
      min-width: calc(50% - 20px);
    }
  }

  @media(min-width: 1200px) {
    margin-top: 50px;

    > div {
      width: calc(25% - 20px);
      min-width: calc(25% - 20px); 
    }
  }
`

export const OverLay = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: -1;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  img {
    width: 100%;
  }
`

export const SolutionWrokWrapper = styled.div`
  display: flex;
  padding: 50px 20px;
  margin-top: 70px;
  padding-bottom: 60px;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding-left: 40px;
    margin-top: 100px;
    padding-bottom: 100px;
  }

  @media (min-width: 1500px) {
    padding-left: 100px;
    margin-top: 150px;
  }
`

export const DescriptionWrapper = styled.div`
  width: 100%;
  margin-bottom: 50px;

  @media (min-width: 768px) {
    width: 30%;
    margin-bottom: 0px;
  }

  h1 {
    font-weight: bold;
    font-size: 32px;
    margin-bottom: 20px;
    margin-top: 0px;
    color: ${props => props.theme.colors.white};

    &.bold-color {
      color: ${props => props.theme.colors.primary};
    }
  }

  p {
    font-size: 16px;
    text-transform: uppercase;
    margin: 0px;
    color: ${props => props.theme.colors.white};
  }
  @media (min-width: 1024px) {
    h1 {
      font-size: 42px;
    }
    p {
      font-size: 18px;
    }
  }
  @media (min-width: 1440px) {
    h1 {
      font-size: 50px;
    }

    p {
      font-size: 20px;
    }
  }
`

export const WalletCardWrapper = styled.div`
  width: 100%;

  div.slider-container {
    .swiper-button-next,
    .swiper-button-prev {
      color:  ${props => props.theme.colors.primary};
      background-color: ${props => props.theme.colors.white};
      border-radius: 50%;
      width: 40px;
      height: 40px;
      box-shadow: 0px 8px 18px rgb(15 16 20 / 15%);
      &:after {
        font-size: 20px;
        font-weight: 700;
      }
    }
  }

  @media (min-width: 768px) {
    width: 60%;
  }
`
