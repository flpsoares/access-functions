import styled from 'styled-components'

import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
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

export const Box = styled(motion.div)`
  position: relative;

  width: 500px;
  height: 200px;

  padding: 20px;

  border: 1px solid var(--text-primary);
  border-radius: 5px;

  select {
    width: 110px;

    color: var(--text-primary);

    font-weight: 500;

    border: 1px solid var(--primary);

    padding: 9px 0;

    background: 0;
    border-radius: 3px;

    option {
      background: rgba(0, 0, 0, 0.7);
    }
  }

  div:nth-child(1) {
    input {
      width: 70%;

      margin-left: 20px;

      font-size: 18px;
      color: var(--text-primary);
      text-align: center;

      border-bottom: 1px solid var(--primary);
    }
  }

  div:nth-child(2) {
    input {
      width: 100%;

      margin-top: 25px;

      font-size: 18px;
      color: var(--text-primary);
      text-align: center;

      border-bottom: 1px solid var(--primary);
    }
  }

  button:nth-child(3) {
    background: var(--primary);
    width: 100%;

    border-radius: 3px;

    padding: 10px;

    font-size: 16px;

    margin-top: 30px;

    transition: all 0.3s;

    &:hover {
      background: 0;
      color: var(--text-primary);
      border: 1px solid var(--primary);
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
