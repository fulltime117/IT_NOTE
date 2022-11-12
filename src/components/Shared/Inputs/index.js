import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Input = styled.input`
  background: transparent;
  color: #FFF;
  border: 2px solid #FFF;
  border-radius: 12px;
  font-size: 16px;
  padding: 15px 20px;
  outline: none;
  &:focus {
    border-color: ${() => darken(0.07, '#CCC')};
  }
  ${({ w }) => w && css`
    width: 20%;
  `}
  &::placeholder,
  &::-webkit-input-placeholder {
    color: #DBDCDB;
  }
  &:-ms-input-placeholder {
    color: #DBDCDB;
  }
  &::-ms-reveal{
    display: none;
  }
`

export const TextArea = styled.textarea`
  background: transparent;
  color: #FFF;
  border: 2px solid #FFF;
  border-radius: 12px;
  font-size: 16px;
  padding: 15px 20px;
  outline: none;
  resize: none;
  &:focus {
    border-color: ${() => darken(0.07, '#CCC')};
  }
  ${({ w }) => w && css`
    width: 20%;
  `}
  &::placeholder,
  &::-webkit-input-placeholder {
    color: #DBDCDB;
  }
  &:-ms-input-placeholder {
    color: #DBDCDB;
  }
`
