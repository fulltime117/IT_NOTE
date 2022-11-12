import React from 'react'
import { useTheme } from 'styled-components'
import {
  FlobMasterCardContainer,
  ImageWrapper,
  CardInfoWrapper,
  InfoWrapper,
  PriceWrapper,
  LikeWrapper,
  BottomWrapper
} from './styles'

export const FlobMasterCard = (props) => {
  const {
    flob
  } = props
  const theme = useTheme()

  return (
    <FlobMasterCardContainer>
      <ImageWrapper>
        <img src={flob.photo} alt='' />
      </ImageWrapper>
      <CardInfoWrapper>
        <h1>{flob.name}</h1>
        <InfoWrapper>
          <PriceWrapper>
            <span>Price: </span>
            <span className='price'>{flob.price} ETH</span>
          </PriceWrapper>
          <LikeWrapper>
            <img src={theme.icons.hart} alt='hart' />
            <span>{flob.like}</span>
          </LikeWrapper>
        </InfoWrapper>
      </CardInfoWrapper>
      <BottomWrapper>
        <div />
        <div />
      </BottomWrapper>
    </FlobMasterCardContainer>
  )
}
