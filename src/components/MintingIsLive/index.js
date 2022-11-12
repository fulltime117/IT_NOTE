import React, { useState } from 'react'
import { useTheme } from 'styled-components'
import { Button } from '../Shared/Buttons'
import {
  MintingIsLiveContainer,
  MintingCard,
  ButtonWrapper,
  CounterBtnContainer,
  CounterBtn,
  MintButtonContainer
} from './styles'

export const MintingIsLive = () => {
  const theme = useTheme()

  const [isShowCounterBtn, setIsShowCounterBtn] = useState(false)
  const [count, setCount] = useState(0)

  const hanldClickMinus = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }
  const hanldClickPlus = () => {
    if (count < 5)
      setCount(count + 1)
  }

  return (
    <MintingIsLiveContainer bgimage={theme.images.mintingLiveBg} id='mint'>
      <h1>MINTING IS LIVE</h1>
      <MintingCard>
        <h1>Connect with FunnyNFT and see</h1>
        <h1>How many FunnyNFTs are left</h1>
        <h1>3333/5653</h1>
        {isShowCounterBtn ? (
          <h1>0xbb3ssF187C2f8...</h1>
        ) : (null)}
        <h1>FunnyNFT costs 0.12ETH, Presale <b>0.09ETH</b> <small><strike>0.12ETH</strike></small></h1>
        <h1>Connect to the Ethereum network</h1>
        <ButtonWrapper>
          {!isShowCounterBtn ? (
            <Button
              color='primary'
              onClick={() => setIsShowCounterBtn(true)}
            >
              CONNECT
            </Button>
          ) : (
            <MintButtonContainer>
              <CounterBtnContainer>
                <CounterBtn
                  onClick={() => hanldClickMinus()}
                  disabled={count === 0}
                >
                  -
                </CounterBtn>
                <span>{count}</span>
                <CounterBtn
                  onClick={() => hanldClickPlus()}
                >
                  +
                </CounterBtn>
              </CounterBtnContainer>
              <Button
                color='primary'
              >
                MINT
              </Button>
            </MintButtonContainer>
          )}
        </ButtonWrapper>
      </MintingCard>
      <img src={theme.images.mintingLeft} alt='' />
      <img src={theme.images.mintingRight} alt='' />
    </MintingIsLiveContainer>
  )
}
