import { useRef, MutableRefObject, useContext } from 'react'
import { MdClose } from 'react-icons/md'
import { UpdateLinkContext } from '../../contexts/UpdateLink'
import { UpdateListContext } from '../../contexts/UpdateList'
import api from '../../services/api'
import { Container, Box, CloseButton } from './style'

interface LinkProps {
  title: string
  url: string
  icon: string
}

const ModalUpdateLink: React.FC<LinkProps> = ({ title, url, icon }) => {
  const { UpdateInfos } = useContext(UpdateLinkContext)
  const { updateLink } = useContext(UpdateListContext)

  const titleRef = useRef() as MutableRefObject<HTMLInputElement>
  const urlRef = useRef() as MutableRefObject<HTMLInputElement>
  const iconRef = useRef() as MutableRefObject<HTMLSelectElement>

  const closeModal = () => {
    UpdateInfos('', '', '')
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    await api.put(`link/${title}`, {
      title: titleRef.current.value,
      url: urlRef.current.value,
      icon: iconRef.current.value
    })

    // console.log(titleRef.current.value)
    // console.log(urlRef.current.value)
    // console.log(iconRef.current.value)

    updateLink()
    closeModal()
  }

  return (
    <Container>
      <Box>
        <form method="put">
          <div>
            <select ref={iconRef} defaultValue={icon}>
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
            <input ref={titleRef} defaultValue={title} type="text"/>
          </div>
          <div>
            <input ref={urlRef} defaultValue={url} type="text"/>
          </div>
          <button onClick={handleSubmit}>Atualizar</button>
        </form>
        <CloseButton type="button" onClick={closeModal}>
          <MdClose color="#c9d1d9" />
        </CloseButton>
      </Box>
    </Container>
  )
}

export default ModalUpdateLink

