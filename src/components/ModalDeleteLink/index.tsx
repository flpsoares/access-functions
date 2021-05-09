import { MdClose } from 'react-icons/md'
import api from '../../services/api'
import { Container, Box, CloseButton } from './style'

interface LinkProps {
  title: string
}

const ModalDeleteLink: React.FC<LinkProps> = ({title}) => {
  const handleSubmit = async (e: any) => {
    e.preventDefault()

    api.delete(`link/${title}`)
  }

  return (
    <Container>
      <Box>
        <h3>Deseja mesmo excluir o link {title}?</h3>
        <div>
          <button type="button" onClick={handleSubmit}>Sim</button>
          <button type="button">Não</button>
        </div>
        <CloseButton type="button">
          <MdClose color="#c9d1d9" />
        </CloseButton>
      </Box>
    </Container>
  )
}

export default ModalDeleteLink