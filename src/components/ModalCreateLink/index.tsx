import { useContext, useRef, MutableRefObject } from 'react'
import { Box, Container, CloseButton } from './style'
import { MdClose } from 'react-icons/md'
import { CreateLinkContext } from '../../contexts/ModalCreateLink'
import api from '../../services/api'
import { UpdateListContext } from '../../contexts/UpdateList'

const ModalCreateLink: React.FC = () => {
  const { closeModalCreateLink } = useContext(CreateLinkContext)
  const { addLink } = useContext(UpdateListContext)

  const titleRef = useRef() as MutableRefObject<HTMLInputElement>
  const urlRef = useRef() as MutableRefObject<HTMLInputElement>
  const iconRef = useRef() as MutableRefObject<HTMLSelectElement>

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    api.post('link', {
      title: titleRef.current.value,
      url: urlRef.current.value,
      icon: iconRef.current.value,
      views: 0
    })

    addLink()
    closeModalCreateLink()
  }

  return (
    <Container>
      <Box>
        <form method="post">
          <input ref={titleRef} placeholder="title" type="text"/>
          <input ref={urlRef} placeholder="url" type="text"/>
          <div>
            <select ref={iconRef}>
              <option value="nenhuma">Nenhuma</option>
              <option value="facebook">Facebook</option>
              <option value="instagram">Instagram</option>
              <option value="google">Google</option>
              <option value="twitter">Twitter</option>
              <option value="pinterest">Pinterest</option>
              <option value="bitcoin">Bitcoin</option>
              <option value="tiktok">Tik tok</option>
              <option value="youtube">Youtube</option>
            </select>
            <button onClick={handleSubmit}>Criar</button>
          </div>
        </form>
        <CloseButton type="button" onClick={closeModalCreateLink}>
          <MdClose color="#c9d1d9" />
        </CloseButton>
      </Box>
    </Container>
  )
}

export default ModalCreateLink