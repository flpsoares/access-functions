import { Container, Content, Progress } from './style'

import { MdClose } from 'react-icons/md'

import AlertEvents from '../../events/AlertEvents'
import { useEffect } from 'react'

interface AlertProps {
  isSuccess?: boolean
  content: string
}

const Alert: React.FC<AlertProps> = ({isSuccess, content}) => {
  const colorError = '#F44336'
  const colorSuccess = '#5cb85c'

  const closeAlert = () => {
    AlertEvents.emit('currentSuccess', '')
    AlertEvents.emit('currentError', '')
  }

  useEffect(() => {
    setTimeout(() => {
      AlertEvents.emit('currentSuccess', '')
      AlertEvents.emit('currentError', '')
    }, 5000)
  }, [])

  return (
    <Container
      color={isSuccess ? colorSuccess : colorError}
      initial={{scale: 0}}
      animate={{scale: 1}}
      exit={{scale: 0}}
    >
      <Content>
        <p>{content}</p>
        <button onClick={closeAlert}><MdClose /></button>
      </Content>
      <Progress>
        <div></div>
      </Progress>
    </Container>
  )
}

export default Alert