/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useRef, MutableRefObject } from 'react'
import { Box, Container, CloseButton } from './style'

import { AnimatePresence } from 'framer-motion'

import { MdClose } from 'react-icons/md'

import api from '../../services/api'
import { useAlert } from '../../hooks/useAlert'

import { UpdateListContext } from '../../contexts/UpdateListContext'
import { CreateLinkContext } from '../../contexts/ModalCreateLinkContext'
import Alert from '../Alert'
import AlertEvents from '../../events/AlertEvents'

const ModalCreateLink: React.FC = () => {
  const { closeModalCreateLink } = useContext(CreateLinkContext)
  const { addLink } = useContext(UpdateListContext)

  const { error } = useAlert()
   
  const titleRef = useRef() as MutableRefObject<HTMLInputElement>
  const urlRef = useRef() as MutableRefObject<HTMLInputElement>
  const iconRef = useRef() as MutableRefObject<HTMLSelectElement>

  const handleSubmit = async (e: any) => {
    const validateField = (field: any) => {
      return field.current.value.length > 0
    }

    e.preventDefault()

    const isTitleValidated = validateField(titleRef)
    const isUrlValidated = validateField(urlRef)

    if(isTitleValidated && isUrlValidated) {
      api.post('link', {
        title: titleRef.current.value,
        url: urlRef.current.value,
        icon: iconRef.current.value,
        views: 0
      }).then(() => {
        AlertEvents.emit('currentSuccess', 'Link adicionado com sucesso!')
        addLink()
        closeModalCreateLink()
      })

    } else {
      const errors = []
      if(!isTitleValidated) errors.push('Por favor, insira um título')
      if(!isUrlValidated) errors.push('Por favor, insira uma url')
      AlertEvents.emit('currentError', errors.join(', '))
    }
  }

  return (
    <Container 
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      exit={{
        opacity: 0
      }}
    >
      <AnimatePresence>
        {error && <Alert content={error} />}
      </AnimatePresence>
      <Box 
        initial={{
          scale: 0
        }}
        animate={{
          scale: 1
        }}
        exit={{
          scale: 0
        }}
      >
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