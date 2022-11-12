import React from 'react'
import { Button } from '../Shared/Buttons'
import { useTheme } from 'styled-components'

import {
  ProviderContainer,
  Content,
  ProviderHeader,
  LogoWrapper,
  CardWrapper,
  Overlay
} from './styles'
import { ProviderCard } from './ProviderCard'

export const Provider = () => {
  const theme = useTheme()

  const cardList = [
    { id: 1, name: 'Sam Saunders', count: 58, photo: '/images/user_03.png' },
    { id: 2, name: 'YOICHI YAMAMOTO', count: 55, photo: '/images/user_05.png' },
    { id: 3, name: 'RUI HANAJAWA', count: 51, photo: '/images/user_02.png' },
    { id: 4, name: 'Jerome Cobb', count: 47, photo: '/images/user_06.png' },
    { id: 5, name: 'Riya Humphrey', count: 43, photo: '/images/user4.png' },
    { id: 6, name: 'Kiara Wise', count: 40, photo: '/images/user5.png' },
    { id: 7, name: 'Julia Jones', count: 36, photo: '/images/user7.png' },
    { id: 8, name: 'JHON DOE', count: 33, photo: '/images/user_09.png' },
    { id: 9, name: 'Layla Young', count: 29, photo: '/images/user9.png' },
    { id: 10, name: 'Rosie John', count: 27, photo: '/images/user1.png' },
    { id: 11, name: 'Jaylin Kane', count: 25, photo: '/images/user2.png' },
    { id: 12, name: 'Rose Morgan', count: 24, photo: '/images/user3.png' }
  ]

  const onClickViewAll = () => {
    window.open('https://discord.gg/cS4Et8UZ', '_blank');
  }
  return (
    <ProviderContainer>
      <Content>
        <ProviderHeader>
          <LogoWrapper>
            <img src={theme.images.providerLogo} alt='providerLogo' />
            <p>Funny nft provider</p>
          </LogoWrapper>
          <Button color='primaryContrast' onClick={() => onClickViewAll()}>View All</Button>
        </ProviderHeader>
        <CardWrapper>
          {cardList.map(card => (
            <ProviderCard
              key={card.id}
              card={card}
            />
          ))}
        </CardWrapper>
      </Content>
      <Overlay>
        <img src={theme.images.rightBackground} alt='' />
      </Overlay>
    </ProviderContainer>
  )
}
