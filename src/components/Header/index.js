import React, { useState, useEffect, useContext } from 'react'
import { useTheme } from 'styled-components'
import { useWindowSize } from '../../hooks/useWindowSize'
import { useLocation } from 'react-router-dom'
import { MenuContext } from '../../contexts/MenuContext'

import {
  HeaderContainer,
  Content,
  LogoAndMenu,
  SocialMenuList,
  LogoWrapper,
  MenuList,
  MenuLink,
  MenuListIcon,
  MobileMenuList,
  MobileMenuLink,
  OverLay
} from './styles'

export const Header = () => {
  const theme = useTheme()
  const windowSize = useWindowSize()
  const location = useLocation()
  const [selectedMenu, setSelectedMenu] = useContext(MenuContext)

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

  const [isMenu, setIsMenu] = useState(false)
  const [isFixed, setIsFixed] = useState(false)

  // const handleScroll = () => {
  //   if (window.scrollY > 70) setIsFixed(true)
  //   else setIsFixed(false)
  // }

  const handleClickMenu = (index) => {
    let topPos = 0
    if (index === 'contact') {
      const parentTop = document.getElementById('auction').offsetTop
      const currentPos = document.getElementById('contact').offsetTop
      topPos = parentTop + currentPos
    } else {
      topPos = document.getElementById(index).offsetTop
    }
    console.log('index: ', index)
    window.scroll({
      top: topPos - 100,
      left: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) setIsFixed(true)
      else setIsFixed(false)
      menuList.forEach(menu => {
        const windowTop = window.scrollY
        let topPos = 0
        if (menu.key === 'contact') {
          const parentTop = document.getElementById('auction').offsetTop
          const currentPos = document.getElementById('contact').offsetTop
          topPos = parentTop + currentPos
        } else {
          topPos = document.getElementById(menu.key).offsetTop
        }

        if (Math.abs(windowTop - topPos) < 150) {
          setSelectedMenu(menu.key)
        }
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // useEffect(() => {
  //   console.log(selectedMenu, 'this is selected menu')
  // }, [selectedMenu])

  const handleClickMobileMenu = (index) => {
    handleClickMenu(index)
    setIsMenu(false)
  }

  const onClickDiscord = () => {
    window.open('https://discord.gg/cS4Et8UZ', '_blank');
  }
  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll)
  //   return () => window.removeEventListener('scroll', handleScroll)
  // }, [isFixed])

  return (
    <HeaderContainer>
      <Content isFixed={isFixed}>
        {windowSize.width < 993 && (
          <MenuListIcon onClick={() => setIsMenu(true)}>
            <MenuIcon />
          </MenuListIcon>
        )}
        <LogoAndMenu>
          <LogoWrapper>
            <img src={theme.images.logo} alt='logo' />
            <span>FunnyNFT</span>
          </LogoWrapper>
          {windowSize.width > 993 && (
            <MenuList>
              {menuList.map((menu, i) => (
                <MenuLink
                  onClick={() => handleClickMenu(menu.key)}
                  active={selectedMenu === menu.key}
                  key={i}
                >{menu.name}</MenuLink>
              ))}
            </MenuList>
          )}
        </LogoAndMenu>
        <SocialMenuList>
          <img src={theme.images.discord} alt='discord' onClick={() => onClickDiscord()} />
          <img src={theme.images.instagram} alt='instagram' />
        </SocialMenuList>
      </Content>
      {windowSize.width < 993 && (
        <MobileMenuList style={{ width: isMenu ? '80vw' : '0px' }}>
          <div>
            <LogoWrapper isShow>
              <img src={theme.images.logo} alt='logo' />
              <span>FunnyNFT</span>
            </LogoWrapper>
            {menuList.map((menu, i) => (
              <MobileMenuLink
                key={i}
                onClick={() => handleClickMobileMenu(menu.key)}
                active={selectedMenu === menu.key}
              >
                <span>{menu.name}</span>
              </MobileMenuLink>
            ))}
          </div>
        </MobileMenuList>
      )}
      {isMenu && windowSize.width < 993 && (
        <OverLay onClick={() => setIsMenu(false)} />
      )}
    </HeaderContainer>
  )
}

const MenuIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      fill='white'
      className="bi bi-list"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
      ></path>
    </svg>
  )
}