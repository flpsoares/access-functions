/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react';
import { Container } from './styles/styles'

import api from './services/api'

import { useAlert } from './hooks/useAlert'

import Link from './components/Link'
import ModalCreateLink from './components/ModalCreateLink'
import ModalDeleteLink from './components/ModalDeleteLink'
import ModalUpdateLink from './components/ModalUpdateLink'

import { CreateLinkContext } from './contexts/ModalCreateLinkContext'
import { UpdateListContext } from './contexts/UpdateListContext'
import { DeleteLinkContext } from './contexts/DeleteLinkContext'
import { UpdateLinkContext } from './contexts/UpdateLinkContext'

import { AnimatePresence } from 'framer-motion'

import Alert from './components/Alert';

interface LinkProps {
  id: number
  title: string
  url: string
  icon: string
  views: string
}

function App() {
  const { modalCreateLinkIsOpen, openModalCreateLink } = useContext(CreateLinkContext)
  const { linkLength, setLinkLength, linkUpdated } = useContext(UpdateListContext)
  const { deleteTitle } = useContext(DeleteLinkContext)
  const { updateTitle, updateUrl, updateIcon } = useContext(UpdateLinkContext)

  const { success } = useAlert()
  
  const [ links, setLinks ] = useState<LinkProps[]>([])

  useEffect(() => {
    api.get('links').then(res => {
      setLinks(res.data)
      setLinkLength(res.data.length)
    })
  }, [linkLength, linkUpdated])

  return (
    <AnimatePresence>
      <Container>
        <button onClick={openModalCreateLink}>Criar</button>
          { success && <Alert success content={success} /> }
          { 
            links.map(link => {
              return (
                <Link
                  key={link.id}
                  title={link.title}
                  url={link.url}
                  icon={link.icon}
                  views={link.views}
                />
              )
            })
          }
          { modalCreateLinkIsOpen &&  <ModalCreateLink />}
          { deleteTitle && <ModalDeleteLink title={deleteTitle} /> }
          { updateIcon &&  <ModalUpdateLink title={updateTitle} url={updateUrl} icon={updateIcon} /> }
      </Container>
    </AnimatePresence>
  );
}

export default App;