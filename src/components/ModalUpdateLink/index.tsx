import { useRef, MutableRefObject, useContext } from 'react'
import { Container, Box, CloseButton } from './style'

import { MdClose } from 'react-icons/md'

import api from '../../services/api'

import { useAlert } from '../../hooks/useAlert'

import { UpdateLinkContext } from '../../contexts/UpdateLinkContext'
import { UpdateListContext } from '../../contexts/UpdateListContext'
import AlertEvents from '../../events/AlertEvents'
import Alert from '../Alert'

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

  const { error } = useAlert()

  const closeModal = () => {
    UpdateInfos('', '', '')
  }

  const handleSubmit = async (e: any) => {
    const validateField = (field: any) => {
      return field.current.value.length > 0
    }

    const isTitleValidated = validateField(titleRef)
    const isUrlValidated = validateField(urlRef)

    console.log(isTitleValidated)
    console.log(isUrlValidated)

    e.preventDefault()

    if (isTitleValidated && isUrlValidated) {
      await api
        .put(`link/${title}`, {
          title: titleRef.current.value,
          url: urlRef.current.value,
          icon: iconRef.current.value
        })
        .then(() => {
          AlertEvents.emit('currentSuccess', 'Link atualizado com sucesso!')
          updateLink()
          closeModal()
        })
    } else {
      AlertEvents.emit('currentError', 'O campo título ou url não pode ser vazio')
    }
  }

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {error && <Alert content={error} />}
      <Box initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
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
            <input ref={titleRef} defaultValue={title} type="text" />
          </div>
          <div>
            <input ref={urlRef} defaultValue={url} type="text" />
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
