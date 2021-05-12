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

  background: #dc4a46;
  padding: 30px;

  border-radius: 5px;

  color: var(--text-primary);

  div {
    display: flex;
    justify-content: space-evenly;
    margin-top: 15px;
  }

  button {
    font-size: 20px;
    font-weight: 500;

    color: var(--text-primary);
    padding: 2px 5px;
    border-radius: 3px;

    transition: color .2s;

    &:hover {
      color: white;
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