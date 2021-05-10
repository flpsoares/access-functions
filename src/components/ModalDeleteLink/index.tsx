import { useContext } from 'react'
import { MdClose } from 'react-icons/md'
import { DeleteLinkContext } from '../../contexts/DeleteLink'
import { UpdateListContext } from '../../contexts/UpdateList'
import api from '../../services/api'
import { Container, Box, CloseButton } from './style'

interface LinkProps {
  title: string
}

const ModalDeleteLink: React.FC<LinkProps> = ({title}) => {
  const { setDeleteTitle } = useContext(DeleteLinkContext)
  const { removeLink } = useContext(UpdateListContext)

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    api.delete(`link/${title}`)
    removeLink()
    closeModal()
  }

  const closeModal = () => {
    setDeleteTitle('')
  }

  return (
    <Container>
      <Box>
        <h3>Deseja mesmo excluir o link {title}?</h3>
        <div>
          <button type="button" onClick={handleSubmit}>Sim</button>
          <button type="button" onClick={closeModal}>Não</button>
        </div>
        <CloseButton type="button" onClick={closeModal}>
          <MdClose color="#c9d1d9" />
        </CloseButton>
      </Box>
    </Container>
  )
}

export default ModalDeleteLink