import styled from 'styled-components'

export const Fcontainer = styled.div`
  display: flex;
  position: fixed; 
  bottom: 20px;
  right: 7px;

    .f_container {
      z-index: 2000; 
      height: 144px;
    }

    .po-relative {
      position: relative;
    }

    .f-wrapper {
      position: relative; 
      opacity: 0;
      height: 144px;
    }

    .f-frame {
      position: absolute; 
      bottom: 22%; 
      left: 4%; 
      width: 90%; 
      height: 2px; 
      background-color: #f3f3f3;
    }

    .f-list {
      position: absolute; 
      top: 40px; 
      right: 75px; 
      width: 24px; 
      height:3px; 
      background-color: #f3f3f3;
    }

    .f-close {
      position: absolute; 
      top: 41px; 
      right: 16px; 
      width: 23px; 
      height:3px; 
      background-color: #f3f3f3;
    }

    .f-pushe {
      position: absolute; 
      bottom: 15px; 
      left: 5%; 
      width: 30px; 
      height:4px; 
      background-color: #f3f3f3;
    }

    .f-next {
      position: absolute; 
      bottom: 15px; 
      left: 23%; 
      width: 25px; 
      height:4px; 
      background-color: #f3f3f3;
    }

    .f-error {
      margin-top: 115px;
      margin-right: 15px;
      opacity: 0.5;
    }

    #Div2 {
      position: fixed;
      bottom: 0;
      right: 0;
      z-index: 25;
    }

    .new-f {
      position: relative;
      width: 400px;
      height: 500px;
      opacity: 0.01;
    }

`

export const FReader = styled.iframe`

`

