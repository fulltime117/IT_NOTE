import React from 'react'
import { useTheme } from 'styled-components'
import { SectionTitle, SectionDescription, InnerContainer } from '../Contact/styles'
import {
  ChooseUSContainer,
  BackgroundImageWrapper,
  ChooseUsHeroImageWrapper,
  AdvantageContainer,
  AdvantageItem,
  AdvantageItemWrapper
} from './styles'

export const ChooseUS = () => {
  const theme = useTheme()
  return (
    <ChooseUSContainer id='aboutUs'>
      <img src='/images/charactor-13.png' alt=' '/>
      <img src='/images/charactor-14.png' alt=' '/>
      <img src='/images/charactor-15.png' alt=' '/>
      <img src='/images/charactor-16.png' alt=' '/>
      <BackgroundImageWrapper>
        <img src={theme.images.leftBackground} alt='' />
      </BackgroundImageWrapper>
      <InnerContainer>
        <SectionTitle className='title'>WHY Choose us</SectionTitle>
        <SectionDescription className='description'>
          Sed ut perspi ciatis unde omnis iste natus error sit volup 
          tatem accusa ntium dolor emque lauda ntium, totam rem aperiam
        </SectionDescription>

        <AdvantageContainer>          
          <ChooseUsHeroImageWrapper>
            <img src={theme.images.chooseUsBg} alt='' />
          </ChooseUsHeroImageWrapper>
          <AdvantageItem isTop>
            <img src={theme.icons.joys} alt='' />
            <p className='title'>Joys of nature</p>
            <p className='content'>
              Funniest NFTs are ready for
              you and taste joys of nature
            </p>
          </AdvantageItem>

          <AdvantageItemWrapper>
            <AdvantageItem>
              <img src={theme.icons.younger} alt='' />
              <p className='title'>Getting younger</p>
              <p className='content'>
                We are getting younger and younger. Who wants be getting younger? Please follow us
              </p>
            </AdvantageItem>
            <AdvantageItem>
              <img src={theme.icons.funnyLife} alt='' />
              <p className='title'>Funny Life</p>
              <p className='content'>
                With Funny NFTs, you can’t stop laughing. More Funny life is waiting you
              </p>
            </AdvantageItem>
          </AdvantageItemWrapper>
          <AdvantageItemWrapper>
            <AdvantageItem>
              <img src={theme.icons.cure} alt='' />
              <p className='title'>Cure illness</p>
              <p className='content'>
                Happy is best cure. How can we cure big illness? That is funny NFTs
              </p>
            </AdvantageItem>
            <AdvantageItem>
              <img src={theme.icons.playing} alt='' />
              <p className='title'>Playing with laugh</p>
              <p className='content'>
                Always happy, always laughing, have laugh with you family and friends
              </p>
            </AdvantageItem>
          </AdvantageItemWrapper>
          <AdvantageItemWrapper>
            <AdvantageItem>
              <img src={theme.icons.stressful} alt='' />
              <p className='title'>Stressless life</p>
              <p className='content'>
                Funny NFTs are destroying stress. All the unhappiness will be gone
              </p>
            </AdvantageItem>
            <AdvantageItem>
              <img src={theme.icons.funnyTravel} alt='' />
              <p className='title'>Funny Traveling</p>
              <p className='content'>
                Funny NFT leads you present and past, animals and plants, space and earth, future and fantasy
              </p>
            </AdvantageItem>
          </AdvantageItemWrapper>
          <AdvantageItem isTop>
            <img src={theme.icons.happy} alt='' />
            <p className='title'>Happy working</p>
            <p className='content'>
              Working is so heavy, with Funny NFT you can fly without any heavy things
            </p>
          </AdvantageItem>
        </AdvantageContainer>
      </InnerContainer>
    </ChooseUSContainer>
  )
}
