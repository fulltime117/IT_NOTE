import styled, { css } from 'styled-components'

export const HomeContainer = styled.div`
  section {
    display: flex;
    justify-content: flex-end;
    padding-right: 5%;
  }

  table {
    margin-left: auto;
  }

  h2 {
    display: flex;
    justify-content: flex-end;

  }

  .image-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .anotations {
    
  }

  .general-content table tr, td{
    border: none;
    padding: 5px;
    padding-left: 10px;
  }

  
  #keyInput {
    position: fixed;
    top: 25px;
    right: 20%;
  }


  #console-input {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 50px;
    opacity: 0.2;
    outline: none !important;
  }

`

export const SerchNumWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;


  input {
    width: 50px;
    border: none !important;
    border-radius: 0;
    padding-left: 0;
    opacity: 0.07;
    text-align: right;
  }
`
