import React from 'react'
import {
  ProviderCardContainer,
  ImageWrapper,
  InfoWrapper,
  CheckWrapper
} from './styles'

export const ProviderCard = (props) => {
  const {
    card
  } = props

  return (
    <ProviderCardContainer>
      <ImageWrapper>
        <img src={card.photo} alt='' />
        <CheckWrapper>
          <CheckIcon />
        </CheckWrapper>
      </ImageWrapper>
      <InfoWrapper>
        <h1>{card.name}</h1>
        <p>{card.count} PHOTOS</p>
      </InfoWrapper>
    </ProviderCardContainer>
  )
}

const CheckIcon = () => {
  return (
    <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M17.0597 2.18945L7.56006 14.0673L0.0976562 7.84785L1.50566 6.15825L7.24326 10.9389L15.3437 0.81665L17.0597 2.18945Z" fill="white"/>
    </svg>
  )
}
