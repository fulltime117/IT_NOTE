import styled, { css } from 'styled-components'

export const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  z-index: 999;
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  ${({ isFixed }) => isFixed && css`
    background-color: #000000;
    box-shadow: 0px 6px 6px 3px rgba(0, 0, 0, 0.33);
  `}

  @media (min-width: 768px) {
    padding: 20px 40px;
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: 1500px) {
    padding: 20px 100px;
    margin-left: auto;
    margin-right: auto;
  }
`

export const LogoAndMenu = styled.div`
  display: flex;
  align-items: center;
`

export const SocialMenuList = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 18px;
    min-width: 21px;
    transition: all 0.2s ease-in;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }

    &:first-child {
      margin-right: 20px;

      @media (min-width: 1500px) {
        margin-right: 40px;
      }
    }
  }
`

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    min-width: 30px;
    margin-right: 10px;
  }

  span {
    font-family: Salsa;
    font-size: 25px;
    color: ${props => props.theme.colors.white};
    user-select: none;
    display: block;
  }

  @media (min-width: 400px) {
    img {
      min-width: 57px;
      margin-right: 20px;
    }
    span {
      font-size: 35px;
    }
  }

  @media (min-width: 993px) {
    span {
      display: none;
    }
  }

  @media (min-width: 1200px) {
    span {
      display: block;
    }
  }

  @media (min-width: 1500px) {
    span {
      font-size: 49px;
    }
  }
`

export const MenuList = styled.div`
  display: flex;
  margin-left: 0px;

  @media (min-width: 1200px) {
    margin-left: 40px;
  }
`

export const MenuLink = styled.div`
  font-weight: bold;
  font-size: 18px;
  color: ${props => props.theme.colors.white};
  margin: 0 10px;
  cursor: pointer;
  transition: all 0.3s linear;
  user-select: none;

  @media (min-width: 1600px) {
    margin: 0 20px;
  }
  
  ${({ active }) => active && css`
    color: ${props => props.theme.colors.darkRed};
  `}
`

export const MenuListIcon = styled.div`
  min-width: 30px;
  height: 30px;

  svg {
    font-size: 30px;
    cursor: pointer;
  }
`

export const MobileMenuList = styled.div`
  & > div {
    padding: 1.8em 1.8em 1.8em 1.8em;
    font-size: 1.15em;
  }
  position: fixed;
  right: inherit;
  z-index: 1100;
  width: 0%;
  height: 100%;
  transition: all 0.5s ease 0s;
  top: 0px;
  left: 0px;
  overflow: auto;
  background: rgb(255, 255, 255);
`

export const MobileMenuLink = styled.div`
  padding: 15px 15px 15px 0px;
  border-bottom: 1px solid #efefef;
  cursor: pointer;

  ${({ active }) => active && css`
    color: ${props => props.theme.colors.darkRed};
  `}

  & > span {
    font-weight: 500;
    font-size: 22px;
    margin-top: 15px;
    margin-bottom: 15px;
    transition: 0.2s;
  }
`

export const OverLay = styled.div`
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background: #d8d8d84d;
  opacity: 1;
  transition: opacity 0.3s ease 0s;
  top: 0px;
  left: 0px;
`
