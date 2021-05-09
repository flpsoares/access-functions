import styled from 'styled-components'

export const Container = styled.div`
  width: 50%;
  height: 180px;

  color: black !important ;

  border-radius: 12px;

  margin-top: 20px;
  padding: 25px;

  background: #FFF;
  box-shadow: 0 0 10px gray;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: 
  'icon title buttons'
  'url url views'
  ;

  div:nth-child(1) {
    grid-area: icon;

    button {
      font-size: 20px;
    }
  }

  div:nth-child(2) {
    grid-area: title;
    text-align: center;
  }

  div:nth-child(3) {
    grid-area: buttons;
    display: flex;
    justify-content: flex-end;

    button {
      height: 20px;
      font-size: 20px;

      transition: filter .2s;
    }

    button:nth-child(1) {
      margin-right: 20px;
    }

    button:nth-child(2) {
      &:hover {
        filter: brightness(0.6);
      }
    }
  }

  div:nth-child(4) {
    grid-area: url;

    display: flex;
    align-items: center;
  }

  div:nth-child(5) {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    button {
      font-size: 20px;

      display: flex;
      align-items: center;
      margin-right: 5px;
    }

    span {
      font-size: 18px;
      margin-left: 3px;
    }
  }
`
