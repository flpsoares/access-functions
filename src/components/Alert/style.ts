import styled, { keyframes } from 'styled-components'

import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  width: 400px;

  padding: 8px 5px;

  background-color: ${(props) => props.color};
  border-radius: 4px;

  margin-top: 10px;

  position: relative;
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  overflow: hidden;

  p {
    font-size: 18px;
    color: #fff;
  }

  button {
    color: #fff;
    font-size: 18px;

    &:hover {
      filter: brightness(0.9);
    }
  }
`

const loading = keyframes`
  from {
    width: 0px;
  }
 
  to {
    width: 100%;
  }
`

export const Progress = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 100%;

  div {
    animation: ${loading} 5s linear;
    background: rgba(0, 0, 0, 0.6);

    height: 100%;

    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }
`
