import React from 'react'
import {
  WalletCardContainer,
  HeaderImg,
  NumberWrapper,
  HeaderWrapper
} from './styles'

export const WalletCard = (props) => {
  const {
    card
  } = props

  return (
    <WalletCardContainer>
      <HeaderWrapper>
        <HeaderImg src={card.icon} alt='' />
        <h1>{card.title}</h1>
        <p>{card.description}</p>
      </HeaderWrapper>
      <NumberWrapper>
        <span>{card.id}</span>
      </NumberWrapper>
      <img src={card.bgPhoto} alt='bg' />
    </WalletCardContainer>
  )
}