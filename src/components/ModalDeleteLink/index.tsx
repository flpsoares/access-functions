import { useContext } from 'react'
import { Container, Box, CloseButton } from './style'

import { MdClose } from 'react-icons/md'

import api from '../../services/api'

import { DeleteLinkContext } from '../../contexts/DeleteLinkContext'
import { UpdateListContext } from '../../contexts/UpdateListContext'

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
    <Container
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <Box
        initial={{scale: 0}}
        animate={{scale: 1}}
        exit={{scale: 0}}
      >
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