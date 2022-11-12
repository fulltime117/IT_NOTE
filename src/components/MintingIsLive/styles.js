import styled, { css } from 'styled-components'
import { darken } from 'polished'

const MintingIsLiveContainerStyled = styled.div`
  width: 100%;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  min-height: 700px;
  padding: 30px 0px;
  overflow: hidden;

  > img {
    z-index: 1;
    position: absolute;
    height: 100%;
    top: 0px;
    &:first-child {
      left: 0;
    }
    &:last-child {
      right: 0;
    }
  }

  > h1 {
    z-index: 3;
    position: relative;
    font-weight: bold;
    font-size: 30px;
    text-align: center;
    text-transform: uppercase;
    color: #FFFFFF;
  }

  @media (min-width: 1200px) {
    padding: 30px 0px;
    > h1 {
      font-size: 35px;
    }
    > img {
      z-index: 6;
    }
  }
  @media (min-width: 1500px) {
    > h1 {
      font-size: 50px;
    }
    > img {
      position: absolute;
      &:first-child {
        left: 0;
      }
      &:last-child {
        right: 0;
      }
    }
  }
`

export const MintingIsLiveContainer = (props) => {
  const style = {}
  if (props.bgimage && !props.isClosed) {
    style.backgroundImage = `url(${props.bgimage})`
  } else {
    style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.bgimage})`
  }

  return (
    <MintingIsLiveContainerStyled {...props} style={style}>
      {props.children}
    </MintingIsLiveContainerStyled>
  )
}

export const MintingCard = styled.div`
  background: #FFFFFF;
  border-radius: 12px;
  padding: 20px 30px;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  z-index: 3;
  position: relative;

  > h1 {
    font-weight: 500;
    font-size: 20px;
    text-align: center;
    color: #232222;
    margin: 0px;
  }

  @media (min-width: 768px) {
    padding: 30px 40px;
    width: 700px;

    > h1 {
      font-size: 32px;
    }
  }

  @media (min-width: 1200px) {
    z-index: 1;
  }

  @media (min-width: 1500px) {
    padding: 30px 40px;
    width: 1000px;

    > h1 {
      font-size: 50px;
    }
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  > button {
    width: 80%;
    height: 40px;
    font-size: 20px;
  }

  @media (min-width: 768px) {
    > button {
      height: 60px;
      font-size: 45px;
    }
  }

  @media (min-width: 1500px) {
    > button {
      height: 80px;
      font-weight: 600;
      font-size: 50px;
    }
  }
`
export const CounterBtnContainer = styled.div`
  display: flex;
  align-items: center;

  > span {
    font-size: 20px;
    font-weight: 500;
    min-width: 50px;
    text-align: center;
    padding: 0 5px;
    box-sizing: border-box;
  }

  @media (min-width: 768px) {
    > span {
      font-size: 45px;
      min-width: 80px;
    }
  }

  @media (min-width: 1500px) {
    > span {
      font-size: 50px;
      min-width: 100px;
    }
  }
`
export const CounterBtn = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #FFF;
  border: 2px solid ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
  user-select: none;
  transition: all 0.3s;

  &:active {
    background: ${darken(0.01, '#FFF')};
  }
  &:hover {
    background: ${darken(0.07, '#FFF')};
  }

  ${({ disabled }) => disabled && css`
    opacity: 0.7;
    cursor: not-allowed;
    background: ${darken(0.07, '#FFF')};
  `}

  @media (min-width: 768px) {
    height: 60px;
    width: 60px;
    font-size: 45px;
  }

  @media (min-width: 1500px) {
    height: 80px;
    width: 80px;
    font-size: 50px;
  }
`
export const MintButtonContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  > button {
    flex: 1;
    height: 40px;
    font-size: 20px;
    margin-left: 10px;
  }

  @media (min-width: 768px) {
    width: 80%;
    > button {
      height: 60px;
      font-size: 45px;
      margin-left: 30px;
    }
  }

  @media (min-width: 1500px) {
    > button {
      height: 80px;
      font-weight: 600;
      font-size: 50px;
    }
  }
`
