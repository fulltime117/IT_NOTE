import styled, { css } from 'styled-components'

export const ChooseUSContainer = styled.div`
  position: relative;
  margin-top: 40px;

  > div {
    .title,
    .description {
      z-index: 100;
    }
  }

  > img {
    position: absolute;
    z-index: 1;
    width: 100px;

    &:first-child {
      left: 0px;
    }
    &:nth-child(2) {
      right: 0;
    }
    &:nth-child(3) {
      bottom: 0;
    }
    &:nth-child(4) {
      right: 0;
      bottom: 0;
    }
  }

  @media (min-width: 768px) {
    margin-top: 60px;
    > img {
      width: 180px;
      &:first-child {
        left: 40px;
      }
    }
  }

  @media (min-width: 1440px) {
    margin-top: 100px;

    > img {
      width: 220px;
    }
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
export const ChooseUsHeroImageWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;
  margin-top: 70px;

  img {
    max-width: 580px;
    width: 30%;
  }

  @media (min-width: 1440px) {
    margin-top: 80px;
  }
`
export const AdvantageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 50px;
`
export const AdvantageItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 440px;
  margin-bottom: 20px;
  z-index: 100;
  ${({ isTop }) => isTop && css`
    max-width: 300px;
    margin-bottom: 0;
  `}

  img {
    width: 50px;
    height: 50px;
    object-fit: contain;
  }
  > p {
    color: ${props => props.theme.colors.white};
    text-align: center;
    &.title {
      font-weight: 500;
      margin: 16px 0;
      text-transform: uppercase;
      font-size: 20px;
      line-height: 36px;
    }
    &.content {
      font-weight: 400;
      margin: 0;
      font-size: 12px;
      line-height: 24px;
    }
  }

  @media (min-width: 768px) {
    margin-bottom: 30px;
    width: 33%;
    > p {
      &.title {
        margin: 16px 0;
        font-size: 20px;
        line-height: 24px;
      }
      &.content {
        font-size: 14px;
        line-height: 18px;
      }
    }
  }

  @media (min-width: 992px) {
    margin-bottom: 50px;
    > p {
      &.title {
        margin: 16px 0;
        font-size: 24px;
        line-height: 36px;
      }
      &.content {
        font-size: 16px;
        line-height: 24px;
      }
    }
  }

  @media (min-width: 1440px) {
    max-width: 500px;
    ${({ isTop }) => isTop && css`
      max-width: 380px;
    `}
    margin-bottom: 80px;

    img {
      width: 60px;
      height: 60px;
    }
    > p {
      &.title {
        font-size: 26px;
        line-height: 36px;
        margin-top: 22px;
        margin-bottom: 24px;
      }
      &.content {
        font-size: 18px;
        line-height: 24px;
      }
    }
  }
`
export const AdvantageItemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`
