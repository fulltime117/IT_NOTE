import React, { useContext } from 'react'
import { useTheme } from 'styled-components'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
  Navigation,
  Pagination
} from 'swiper'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import { Input, TextArea, Button } from '../Shared'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import {
  Container,
  InnerContainer,
  BackgroundImageWrapper,
  AuctionSection,
  SectionTitle,
  SectionDescription,
  SliderImageWrapper,
  SwiperWrapper,
  GetInTouchSection,
  ContactMethodContainer,
  ContactMethod,
  MessageFormContainer,
  InputWrapper,
  InputGroup,
  NavigationContainer,
  LinksContainer,
  LinksGroup,
  LinkItem,
  CopyRightContainer
} from './styles'

toast.configure()
SwiperCore.use([Navigation, Pagination])

export const Contact = () => {
  const theme = useTheme()

  const menuList = [
    { key: 'home', name: 'Home' },
    { key: 'aboutUs', name: 'About Us' },
    { key: 'benefit', name: 'Here I am' },
    { key: 'nfts', name: 'NFTs' },
    { key: 'mint', name: 'Mint' },
    { key: 'career', name: 'Career' },
    { key: 'roadMap', name: 'Roadmap' },
    { key: 'auction', name: 'Auction' },
    { key: 'contact', name: 'Contact' },
  ]

  const handleClickMenu = (index) => {
    let topPos = 0
    if (index === 'contact') {
      const parentTop = document.getElementById('auction').offsetTop
      const currentPos = document.getElementById('contact').offsetTop
      topPos = parentTop + currentPos
    } else {
      topPos = document.getElementById(index).offsetTop
    }
    window.scroll({
      top: topPos - 100,
      left: 0,
      behavior: 'smooth'
    })
  }

  const handleSendMessage = () => {
    toast('Success! Your message has been sent', { type: 'success' });
  }

  return (
    <Container id='auction'>
      <BackgroundImageWrapper>
        <img src={theme.images.rightBackground} alt='' />
        <img src={theme.images.leftBackground} alt='' />
      </BackgroundImageWrapper>

      <AuctionSection>
        <img src='/images/charactor-10.png' alt='' />
        <img src='/images/charactor-11.png' alt='' />
        <img src='/images/charactor-12.png' alt='' />

        <InnerContainer>
          <SectionTitle>AUCTION</SectionTitle>
          <SectionDescription>
            Who has most funniest NFT?   Yours or mine?   Lets get start.
          </SectionDescription>
        </InnerContainer>

        <SwiperWrapper>
          <Swiper
            slidesPerView={1}
            spaceBetween={40}
            navigation={true}
            pagination={{
              "clickable": true,
              "dynamicBullets": true
            }}
            breakpoints={{
              "@0.00": {
                "slidesPerView": 1,
                "spaceBetween": 16
              },
              "@0.75": {
                "slidesPerView": 2,
                "spaceBetween": 16
              },
              "@1.00": {
                "slidesPerView": 3,
                "spaceBetween": 16
              },
              "@1.25": {
                "slidesPerView": 4,
                "spaceBetween": 16
              }
            }}
            className="slider-container"
          >
            {[...Array(7).keys()].map(index => (
              <SwiperSlide key={index}>
                <SliderImageWrapper bgimage={theme.images[`slider${index + 1}`]} />
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperWrapper>
      </AuctionSection>

      <GetInTouchSection id='contact'>
        <img src='/images/charactor-3.png' alt='' />
        <img src='/images/charactor-4.png' alt='' />
        <img src='/images/charactor-5.png' alt='' />
        <img src='/images/charactor-6.png' alt='' />
        <img src='/images/charactor-7.png' alt='' />
        <InnerContainer>
          <SectionTitle>Get in touch</SectionTitle>
          <SectionDescription>
            Sed ut perspi ciatis unde omnis iste natus error sit volup
            tatem accusa ntium dolor emque lauda ntium, totam rem aperiam
          </SectionDescription>
          <ContactMethodContainer>
            <ContactMethod>
              <img src={theme.icons.phone} alt='' />
              <span>+(801)-918-6647</span>
            </ContactMethod>
            <ContactMethod>
              <img src={theme.icons.location} alt='' />
              <span>102, Street 2712, Newyork</span>
            </ContactMethod>
            <ContactMethod isContrast>
              <img src={theme.icons.message} alt='' />
              <span>info@marketcheck.com</span>
            </ContactMethod>
          </ContactMethodContainer>
          <MessageFormContainer bgimage={theme.images.messageMask}>
            <InputGroup>
              <InputWrapper>
                <label>First name*</label>
                <Input
                  placeholder='Name'
                />
              </InputWrapper>
              <InputWrapper>
                <label>Last name*</label>
                <Input
                  placeholder='Last Name'
                />
              </InputWrapper>
            </InputGroup>
            <InputGroup>
              <InputWrapper>
                <label>Contact number*</label>
                <Input
                  placeholder='Mobile no.'
                />
              </InputWrapper>
              <InputWrapper>
                <label>Your email*</label>
                <Input
                  placeholder='Email Address'
                />
              </InputWrapper>
            </InputGroup>
            <InputWrapper>
              <label>Your message*</label>
              <TextArea
                rows={5}
                placeholder='Type your message'
              />
            </InputWrapper>
            <Button
              color='primary'
              onClick={() => handleSendMessage()}
            >
              Send message
            </Button>
          </MessageFormContainer>
        </InnerContainer>
      </GetInTouchSection>

      <NavigationContainer>
        <InnerContainer>
          <img src={theme.images.linksMask} alt='' />
          <LinksContainer>
            <LinksGroup>
              <LinkItem isParent>Navigate</LinkItem>
              {menuList.map((menu, i) => (
                <LinkItem
                  key={i}
                  onClick={() => handleClickMenu(menu.key)}
                >{menu.name}</LinkItem>
              ))}
            </LinksGroup>
            <LinksGroup>
              <LinkItem isParent>Our Services</LinkItem>
              <LinkItem>Solution</LinkItem>
              <LinkItem>Why Choose Us ?</LinkItem>
              <LinkItem>Roadmap</LinkItem>
            </LinksGroup>
            <LinksGroup>
              <LinkItem isParent>SUBSCRIBE</LinkItem>
              <LinkItem>Discord</LinkItem>
              <LinkItem>Telegram</LinkItem>
            </LinksGroup>
          </LinksContainer>
        </InnerContainer>
      </NavigationContainer>

      <CopyRightContainer>
        <img src='/images/charactor-1.png' alt='' />
        <img src='/images/charactor-2.png' alt='' />
        <InnerContainer>
          <h4>© 2020 by Funny NFT Y.Y</h4>
        </InnerContainer>
      </CopyRightContainer>
    </Container>
  )
}
