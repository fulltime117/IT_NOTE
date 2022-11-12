import React from 'react'
import { Button } from '../Shared/Buttons'
import { useTheme } from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
  Navigation
} from 'swiper'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import {
  HomeHeroContainer,
  Content,
  InfoWrapper,
  ActionWrapper,
  BenefitContent,
  BenefitInfoWrapper,
  TitleDecoration,
  BoxWrapper,
  BoxDescription,
  BenefitImageWrapper,
  LiveFunnyContent,
  LiveFunnyHeader,
  OverLay,
  LiveFunnyLogoWrapper,
  CardWrapper,
  SolutionWrokWrapper,
  DescriptionWrapper,
  WalletCardWrapper,
  LiveFunnyContentBg
} from './styles'
import { FlobMasterCard } from './FlobMasterCard'
import { WalletCard } from './WalletCard'

SwiperCore.use([Navigation])

export const HomeHero = () => {
  const theme = useTheme()

  const flobList = [
    { name: 'Animal Funny', photo: '/images/anim1.gif', price: 0.12, like: 781 },
    { name: 'Life Funny', photo: '/images/anim2.gif', price: 0.12, like: 1029 },
    { name: 'Special Funny', photo: '/images/anim3.gif', price: 0.15, like: 1205 },
    { name: 'Graphic Funny', photo: '/images/anim4.gif', price: 0.12, like: 532 },
  ]

  const walletList = [
    { id: 1, icon: '/images/create-wallet.png', bgPhoto: '/images/create-wallet-bg.png', title: 'Create a Wallet and Buy ETH', description: 'Create metamask or other wallet and buy ETH.' },
    { id: 2, icon: '/images/card-2.png', bgPhoto: '/images/card-2-bg.png', title: 'Connect your wallet', description: 'You can connect to Funny World when you join. If you didn’t, please click here and connect Funny World.' },
    { id: 3, icon: '/images/card-3.png', bgPhoto: '/images/card-3-bg.png', title: 'MINT FUNNY NFT', description: 'Funny World NFT will come into your happy wallet. Please click here, Select amount of NFTS (1-5), Click Mint Button.' }
  ]

  const handleClickMenu = (index) => {
    const topPos = document.getElementById(index).offsetTop
    window.scroll({
      top: topPos - 100,
      left: 0,
      behavior: 'smooth'
    })
  }

  const onClickWhitelist = () => {
    window.open('https://discord.gg/WjY6r8zx', '_blank');
  }

  return (
    <HomeHeroContainer>
      <Content>
        <InfoWrapper>
          <h1>Hiii!!!!</h1>
          <h1>I am <span>FunnyNFT</span></h1>
          <h1>I love to laugh people</h1>
          <ActionWrapper>
            <Button color='primary' onClick={() => handleClickMenu('mint')}>MINT</Button>
            <Button color='secondaryContrast' onClick={() => onClickWhitelist()}>WHITELIST</Button>
          </ActionWrapper>
        </InfoWrapper>
        <img src={theme.images.homeHero} alt='home-hero' />
      </Content>
      <BenefitContent id='benefit'>
        <BenefitInfoWrapper>
          <TitleDecoration>
            <div />
            <h2>HERE I AM</h2>
          </TitleDecoration>
          <h1>I am funny world NFT. I am flying by your side.
            Grab every scrap of happiness while you can.</h1>
          <p>FunnyWorld NFT is make laugh, bring up happiness.
            Your life will be Happiness with Funny NFT. What are you waiting for?</p>
          <BoxWrapper>
            <img src={theme.images.secure} alt='secure' />
            <BoxDescription>
              <h2>Are you not in the mood?</h2>
              <p>What is the problem? Let Funny NFT know, it will rid of stress.
                Without stress, you can fly freely.</p>
            </BoxDescription>
          </BoxWrapper>
          <BoxWrapper>
            <img src={theme.images.automated} alt='automated' />
            <BoxDescription>
              <h2>Do you think, you are happy now?</h2>
              <p>More More happiness world is waiting by your side.
                You can laugh day and night around the clock.</p>
            </BoxDescription>
          </BoxWrapper>
          <BoxWrapper>
            <img src={theme.images.encryption} alt='encryption' />
            <BoxDescription>
              <h2>Laughing with family & friends?</h2>
              <p>Do you wanna laugh out loud with family & friends?
                Come with us. And send Funny NFT to them. Make laugh together 😊.</p>
            </BoxDescription>
          </BoxWrapper>
        </BenefitInfoWrapper>
        <BenefitImageWrapper>
          <img src={theme.images.benefit} alt='benefit' />
        </BenefitImageWrapper>
      </BenefitContent>
      <LiveFunnyContent id='nfts'>
        <LiveFunnyHeader>
          <LiveFunnyLogoWrapper>
            <img src={theme.images.liveFunnyLogo} alt='liveFunnyLogo' />
            <p>LiVE FUNNY NFTs</p>
          </LiveFunnyLogoWrapper>
        </LiveFunnyHeader>
        <CardWrapper>
          {flobList.map((flob, i) => (
            <FlobMasterCard
              key={i}
              flob={flob}
            />
          ))}
        </CardWrapper>
        <LiveFunnyContentBg>
          <img src='/images/live-funny-left.png' alt='' />
          <img src='/images/live-funny-right.png' alt='' />
        </LiveFunnyContentBg>
      </LiveFunnyContent>
      <SolutionWrokWrapper>
        <DescriptionWrapper>
          <h1>SOLUTIONS</h1>
          <h1 className='bold-color'>How to grab Funny NFT?</h1>
          <p>You can grab Funny NFTs by following these steps with ease.</p>
        </DescriptionWrapper>
        <WalletCardWrapper>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            navigation={true}
            pagination={{
              "clickable": true
            }}
            breakpoints={{
              "@0.00": {
                "slidesPerView": 1,
                "spaceBetween": 30
              },
              "@0.75": {
                "slidesPerView": 1,
                "spaceBetween": 30
              },
              "@1.03": {
                "slidesPerView": 2,
                "spaceBetween": 30
              },
              "@1.40": {
                "slidesPerView": 2.7,
                "spaceBetween": 30
              }
            }}
            className="slider-container"
          >

            {walletList.map((card, i) => (
              <SwiperSlide key={i}>
                <WalletCard
                  key={i}
                  card={card}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </WalletCardWrapper>
      </SolutionWrokWrapper>
      <OverLay>
        <img src={theme.images.leftBackground} alt='leftBackground' />
        <img src={theme.images.rightBackground} alt='leftBackground' />
      </OverLay>
    </HomeHeroContainer>
  )
}
