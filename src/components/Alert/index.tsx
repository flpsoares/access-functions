import { Container } from './style'

import { MdClose } from 'react-icons/md'

import AlertEvents from '../../events/AlertEvents'

interface AlertProps {
  success?: boolean
  content: string
}

const Alert: React.FC<AlertProps> = ({success, content}) => {
  const colorError = '#F44336'
  const colorSuccess = '#5cb85c'

  const closeAlert = () => {
    AlertEvents.emit('currentSuccess', false)
    AlertEvents.emit('currentError', false)
  }

  return (
    <Container color={success ? colorSuccess : colorError}>
      <p>{content}</p>
      <button onClick={closeAlert}><MdClose /></button>
    </Container>
  )
}

export default Alert