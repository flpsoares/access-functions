import styled from 'styled-components'

export const Container = styled.div`
  width: 400px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 8px 5px;

  background-color: ${props => props.color};
  border-radius: 4px;

  margin-top: 10px;

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