import React from 'react'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  position: relative;
`
export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  @media (min-width: 768px) {
    padding: 0 40px;
  }
  @media (min-width: 1500px) {
    padding: 0 100px;
  }
`

export const BackgroundImageWrapper = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  z-index: -1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  > img {
    width: 100%;
  }
`
export const AuctionSection = styled.div`
  position: relative;

  > img {
    position: absolute;
    z-index: -1;

    &:nth-child(1) {
      left: 10%;
      bottom: 0;
      width: 60px;
    }
    &:nth-child(2) {
      right: 40%;
      bottom: 50px;
      width: 100px;
    }
    &:nth-child(3) {
      right: 10%;
      bottom: 0;
      width: 90px;
    }
  }
  @media (min-width: 768px) {
    > img {
      &:nth-child(1) {
        left: 10%;
        bottom: 0;
        width: 100px;
      }
      &:nth-child(2) {
        right: 45%;
        bottom: 50px;
        width: 150px;
      }
      &:nth-child(3) {
        right: 10%;
        bottom: 0;
        width: 120px;
      }
    }
  }

  @media (min-width: 1440px) {
    > img {
      &:nth-child(1) {
        left: 10%;
        bottom: 0;
        width: 120px;
      }
      &:nth-child(2) {
        right: 45%;
        bottom: 50px;
        width: 200px;
      }
      &:nth-child(3) {
        right: 10%;
        bottom: 0;
        width: 150px;
      }
    }
  }
`
export const SectionTitle = styled.h1`
  font-weight: 700;
  font-family: Poppins;
  font-size: 32px;
  color: ${props => props.theme.colors.white};
  text-align: center;
  margin: 0;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 42px;
  }

  @media (min-width: 1440px) {
    font-size: 50px;
    line-height: 75px;
  }
`
export const SectionDescription = styled.div`
  color: ${props => props.theme.colors.white};
  font-family: Poppins;
  font-weight: 500;
  font-size: 14px;
  line-height: 30px;
  text-align: center;
  max-width: 720px;
  margin: 0;
  text-transform: uppercase;
  max-width: 80%;

  @media (min-width: 768px) {
    font-size: 16px;
  }
  @media (min-width: 1440px) {
    font-size: 20px;
  }
`
export const PhotoStyled = styled.div`
  width: 100%;
  padding-top: 65%;
  border-radius: 12px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ bgimage }) => bgimage && css`
    background-repeat: no-repeat, repeat;
    background-size: cover;
    object-fit: cover;
    background-position: center;
  `}
`
export const SliderImageWrapper = (props) => {
  const style = {}
  style.backgroundImage = `url(${props.bgimage})`

  return (
    <PhotoStyled {...props} style={style}>
      {props.children}
    </PhotoStyled>
  )
}
export const SwiperWrapper = styled.div`

  div.slider-container {
    padding: 150px 0;

   .swiper-button-next,
    .swiper-button-prev {
      transform: translateY(180px);
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

    .swiper-pagination-bullets-dynamic {
      .swiper-pagination-bullet {
        background: ${props => props.theme.colors.white};
        opacity: 1;
        height: 15px;
        width: 15px;
      }
      .swiper-pagination-bullet-active {
        background: ${props => props.theme.colors.primary};
        padding: 0 18px;
        border-radius: 10px;
      }
    }
  }

  @media (min-width: 1440px) {
    div.slider-container {
     .swiper-button-next,
      .swiper-button-prev {
        transform: translateY(200px);
      }
    }
  }
`
export const GetInTouchSection = styled.div`
  position: relative;
  > img {
    position: absolute;
    z-index: -1;
    &:nth-child(1) {
      width: 150px;
    }
    &:nth-child(2) {
      right: 15%;
      top: 35%;
      width: 80px;
      z-index: 100;
    }
    &:nth-child(3) {
      right: 0;
      width: 100px;
    }
    &:nth-child(4) {
      bottom: -100px;
      width: 100px;
      z-index: 100;
    }
    &:nth-child(5) {
      right: 0;
      bottom: -100px;
      width: 100px;
      z-index: 100;
    }
  }

  @media (min-width: 768px) {
    > img {
      &:nth-child(1) {
        width: 200px;
      }
      &:nth-child(2) {
        width: 100px;
        top: 25%;
      }
      &:nth-child(3) {
        width: 200px;
      }
      &:nth-child(4) {
        width: 150px;
        bottom: -100px;
      }
      &:nth-child(5) {
        right: 0;
        width: 150px;
        bottom: -100px;
      }
    }
  }

  @media (min-width: 1024px) {
    > img {
      &:nth-child(1) {
        width: 250px;
      }
      &:nth-child(2) {
        width: 150px;
        top: 20%;
      }
      &:nth-child(3) {
        width: 250px;
      }
      &:nth-child(4) {
        width: 200px;
        bottom: -150px;
      }
      &:nth-child(5) {
        right: 0;
        width: 200px;
        bottom: -150px;
      }
    }
  }

  @media (min-width: 1440px) {
    > img {
      &:nth-child(1) {
        width: 300px;
      }
      &:nth-child(2) {
        width: 200px;
      }
      &:nth-child(3) {
        width: 300px;
      }
      &:nth-child(4) {
        width: 250px;
        bottom: -200px;
      }
      &:nth-child(5) {
        right: 0;
        width: 250px;
        bottom: -200px;
      }
    }
  }
`
export const ContactMethodContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  z-index: 100;
  
  margin-top: 50px;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-top: 70px;
  }
`
export const ContactMethod = styled.div`
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background: ${props => props.theme.colors.white};
  padding: 14px;
  width: 100%;
  height: 70px;
  margin: 10px 15px;

  img {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }

  span {
    color: ${props => props.theme.colors.primary};
    font-size: 12px;
    line-height: 18px;
    margin-top: 7px;
  }

  ${({ isContrast }) => isContrast && css`
    background: ${props => props.theme.colors.primary};
    span {
      color: ${props => props.theme.colors.white};
    }
  `}

  @media (min-width: 768px) {
    width: 180px;
  }

  @media (min-width: 1440px) {
    width: 225px;
    height: 82px;
    margin: 10px 25px;
    img {
      width: 32px;
      height: 32px;
    }
  }
`
export const FormPhotoStyled = styled.div`
  width: 100%;
  max-width: 1140px;
  border-radius: 12px;
  position: relative;
  padding: 30px 15px;
  margin-top: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${({ bgimage }) => bgimage && css`
    background-repeat: no-repeat, repeat;
    background-size: cover;
    object-fit: cover;
    background-position: center;
  `}

  > button {
    border-radius: 14px;
    font-weight: 600;
    font-size: 20px;
    padding: 16px 18px;
    margin-top: 30px;
  }

  @media (min-width: 768px) {
    padding: 40px;
    border-radius: 24px;

    > button {
      margin-top: 50px;
    }
  }

  @media (min-width: 992px) {
    width: 80%;
  }

  @media (min-width: 1440px) {
    padding: 60px;
    button {
      font-size: 24px;
      margin-top: 80px;
    }
  }
`
export const MessageFormContainer = (props) => {
  const style = {}
  style.backgroundImage = `url(${props.bgimage})`

  return (
    <FormPhotoStyled {...props} style={style}>
      {props.children}
    </FormPhotoStyled>
  )
}
export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  label {
    font-size: 18px;
    line-height: 24px;
    color: ${props => props.theme.colors.white};
    font-family: Poppins;
    margin-bottom: 10px;
  }

  input,
  textarea {
    padding: 12px 15px;
  }

  @media (min-width: 768px) {
    margin-bottom: 40px;

    label {
      font-size: 24px;
      line-height: 45px;
    }
  }

  @media (min-width: 1440px) {
    label {
      font-size: 30px;
      margin-bottom: 14px;
    }

    input,
    textarea {
      padding: 15px 20px;
    }
  }
`
export const InputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  > div {
    width: 100%;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    > div {
      width: calc(50% - 20px);
    }
  }
`
export const NavigationContainer = styled.div`
  margin-top: 60px;

  > div {
    position: relative;
  }

  img {
    position: absolute;
    top: 50px;
    width: 60%;
    max-width: 700px;
  }

  @media (min-width: 768px) {
    margin-top: 80px;
  }
  @media (min-width: 1140px) {
    margin-top: 100px;
  }
`
export const LinksContainer = styled.div`
  width: 100%;
  max-width: 1140px;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row;
  }

  @media (min-width: 992px) {
    width: 80%;
  }
`
export const LinksGroup = styled.div`
  display: flex;
  flex-direction: column;
`
export const LinkItem = styled.a`
  font-size: 20px;
  margin-bottom: 10px;
  color: ${props => props.theme.colors.white};
  text-align: center;
  transition: all 0.2s linear;
  cursor: pointer;

  ${({ isParent }) => isParent && css`
    text-transform: uppercase;
    margin-top: 40px;
    color: ${props => props.theme.colors.primary};
    cursor: default;
  `}

  ${({ active }) => active && css`
    color: ${props => props.theme.colors.primary};
  `}

  @media (min-width: 768px) {
    text-align: initial;
    font-size: 24px;
    margin-bottom: 20px;
  }

  @media (min-width: 1440px) {
    font-size: 30px;
    margin-bottom: 30px;
  }
`
export const CopyRightContainer = styled.div`
  margin-top: 80px;
  border-top: 1px solid ${props => props.theme.colors.white};
  padding: 20px 0;
  position: relative;

  h4 {
    color: ${props => props.theme.colors.primary};
    font-size: 20px;
    font-weight: 400;
    margin: 0;
    z-index: 10;
  }

  > img {
    position: absolute;
    bottom: 0;
    width: 150px;

    &:nth-child(2) {
      right: 0;
      width: 200px;
    }
  }

  @media (min-width: 768px) {
    h4 {
      font-size: 24px;
    }
    > img {
      width: 240px;

      &:nth-child(2) {
        width: 300px;
      }
    }
  }

  @media (min-width: 1024px) {
    > img {
      width: 300px;

      &:nth-child(2) {
        width: 400px;
      }
    }
  }

  @media (min-width: 1440px) {
    padding: 28px 0;
    h4 {
      font-size: 30px;
    }
    > img {
      width: 350px;

      &:nth-child(2) {
        width: 450px;
      }
    }
  }
`
