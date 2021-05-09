import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.7);

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`

export const Box = styled.div`
  position: relative;

  width: 500px;

  border: 1px solid white;
  border-radius: 5px;

  display: flex;
  flex-direction: column;

  padding: 20px;

  input {
    border-bottom: 1px solid var(--primary);
    font-size: 20px;

    padding: 5px 12px;

    margin-bottom: 20px;
    color: white;

    width: 100%;

    &::placeholder {
      color: var(--text-primary);
    }
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;

    button {
      background: var(--primary);
      padding: 10px 0;
      border-radius: 15px;
      width: 100px;

      color: var(--text-primary);

      font-weight: 600;

      transition: border-radius .3s;

      &:hover {
        border-radius: 5px;
      }
    }
  }

  select {
    width: 110px;

    color: var(--text-primary);

    font-weight: 500;

    border: 1px solid var(--primary);

    padding: 9px 0;
    margin-left: 5px;

    background: 0;
    border-radius: 3px;

    option {
      background: rgba(0, 0, 0, 0.7);
    }
  }
`

export const CloseButton = styled.button`
  position: absolute;

  top: 5px;
  right: 5px;

  font-size: 20px;

  &:hover {
    filter: brightness(1.2);
  }
`