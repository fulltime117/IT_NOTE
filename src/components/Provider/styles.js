import styled from 'styled-components'

export const ProviderContainer = styled.div`
  position: relative;
`

export const Content = styled.div`
  width: 100%;
  padding: 20px;

  @media (min-width: 768px) {
    padding: 40px;
  }

  @media (min-width: 1500px) {
    padding: 40px 100px;
  }
`

export const ProviderHeader = styled.div`
  background: #F61206;
  border-radius: 12px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  flex-direction: column;

  button {
    width: 150px;
  }

  @media (min-width: 576px) {
    flex-direction: row;
  }

  @media (min-width: 1500px) {
    padding: 20px 50px;
  }
`

export const LogoWrapper = styled.div`
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
    font-size: 20px;
    text-transform: uppercase;
    color: ${props => props.theme.colors.white};
  }

  @media (min-width: 768px) {
    p {
      font-size: 24px;
    }
  }

  @media (min-width: 1500px) {
    p {
      font-size: 30px;
    }
  }
`

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;

  > div {
    margin: 15px 10px;
    width: calc(100% - 20px);
  }

  @media(min-width: 768px) {
    > div {
      margin: 25px 10px;
      width: calc(50% - 20px);
    }
  }

  @media(min-width: 993px) {
    > div {
      margin: 25px 10px;
      width: calc(33.33% - 20px);
    }
  }

  @media(min-width: 1500px) {
    > div {
      width: calc(33.33% - 20px);
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
