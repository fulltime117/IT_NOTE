import styled from 'styled-components'

export const FlobMasterCardContainer = styled.div`
  background: ${props => props.theme.colors.white};
  box-shadow: 0px 6px 6px 3px rgba(0, 0, 0, 0.33);
  border-radius: 12px;
  padding: 34px 24px;
  position: relative;
`

export const ImageWrapper = styled.div`
  width: 100%;
  height: 430px;
  padding: 24px 50px;
  background: #000000;
  box-shadow: 0px 6px 6px 3px rgba(0, 0, 0, 0.33);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

export const CardInfoWrapper = styled.div`
  padding: 0 25px;
  margin-top: 25px;

  h1 {
    font-weight: bold;
    font-size: 26px;
    color: ${props => props.theme.colors.primary};
    margin: 0px;
    text-transform: uppercase;
  }
`

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const PriceWrapper = styled.div`
  span {
    font-weight: 500;
    font-size: 20px;
    color: ${props => props.theme.colors.black};
  }
  .price {
    color: #F61206;
  }
`

export const LikeWrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 22px;
    min-width: 22px;
    margin-right: 10px;
  }
`

export const BottomWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 0 10px;

  > div {
    position: relative;
    height: 15px;
    /* overflow: hidden; */

    &::before {
      content: "";
      display: block;
      height: 15px;
      background: #fff;
      border-bottom-left-radius: 12px;
      border-bottom-right-radius: 12px;
      width: calc(100% - 2px);
      position: absolute;
      bottom: 0px;
      left: 1px;
      box-shadow: 0px 6px 6px 3px rgba(0, 0, 0, 0.36);
      z-index: 1;
    }
    &::after {
      content: "";
      display: block;
      height: 20px;
      border-bottom-left-radius: 12px;
      border-bottom-right-radius: 12px;
      background: #efefef4d;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
    }
    &:last-child {
      &::before {
        left: 11px;
        width: calc(100% - 22px);
        bottom: 2px;
      }
      &::after {
        left: 10px;
        width: calc(100% - 20px);
        bottom: 1px;
      }
    }
  }
`
