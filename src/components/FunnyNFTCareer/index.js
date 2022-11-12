import React from 'react'
import { useTheme } from 'styled-components'
import {
  FunnyNFTCareerContainer,
  Content,
  ImgWrapper,
  InfoWrapper,
  TitleDecoration,
  BoxWrapper,
  BoxDescription,
  Overlay
} from './styles'

export const FunnyNFTCareer = () => {
  const theme = useTheme()

  return (
    <FunnyNFTCareerContainer id='career'>
      <Content>
        <ImgWrapper>
          <img src={theme.images.funnyCareer} alt='' />
        </ImgWrapper>
        <InfoWrapper>
        <TitleDecoration>
            <div />
            <h2>FUNNY NFT CAREER</h2>
          </TitleDecoration>
          <h1>OUR 3 YEARS FUNNY WORLD TRAVLE IS PREPAREED FOR YOU</h1>
          <p>We have traveled 3 years to get in Funny World.
            Lots of funny photos, images, actions made change our life
            From 2018, we are getting younger and younger and so funniest life is with us.
            We are getting more and more happy and funniest world is up to you & us.
            Now we are in Funny World and calling you.
          </p>
          <BoxWrapper>
            <img src='/images/history.png' alt='history' />
            <BoxDescription>
              <h2>OUR HISTORY</h2>
              <p>We had 3 years travel all over the world. (present and past, animals and plants, space and earth, future and fantasy)</p>
            </BoxDescription>
          </BoxWrapper>
          <BoxWrapper>
            <img src='/images/now-we-are.png' alt='now' />
            <BoxDescription>
              <h2>NOW WE ARE</h2>
              <p>Now we have many funniest staffs and made 3000 images to NFT</p>
            </BoxDescription>
          </BoxWrapper>
          <BoxWrapper>
            <img src='/images/future.png' alt='future' />
            <BoxDescription>
              <h2>FOR FUTURE</h2>
              <p>We are keep going on Funny World and trying to get in funniest world </p>
            </BoxDescription>
          </BoxWrapper>
        </InfoWrapper>
      </Content>
      <Overlay>
        <img src={theme.images.leftBackground} alt='' />
      </Overlay>
    </FunnyNFTCareerContainer>
  )
}
