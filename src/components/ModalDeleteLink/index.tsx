import { MdClose } from 'react-icons/md'
import { Container, Box, CloseButton } from './style'

const ModalDeleteLink: React.FC = () => {
  return (
    <Container>
      <Box>
        <h3>Deseja mesmo excluir o link ?</h3>
        <div>
          <button type="button">Sim</button>
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