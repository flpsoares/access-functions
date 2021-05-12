import { useContext, useEffect, useState } from 'react';
import { Container } from './styles/styles'

import api from './services/api'

import Link from './components/Link'
import ModalCreateLink from './components/ModalCreateLink'
import { CreateLinkContext } from './contexts/ModalCreateLink'
import { UpdateListContext } from './contexts/UpdateList'
import { DeleteLinkContext } from './contexts/DeleteLink'
import ModalDeleteLink from './components/ModalDeleteLink'
import { UpdateLinkContext } from './contexts/UpdateLink';
import ModalUpdateLink from './components/ModalUpdateLink'

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
  
  const [ links, setLinks ] = useState<LinkProps[]>([])

  useEffect(() => {
    api.get('links').then(res => {
      setLinks(res.data)
      setLinkLength(res.data.length)
    })
  }, [linkLength, setLinkLength, linkUpdated])

  return (
    <Container>
      <button onClick={openModalCreateLink}>Criar</button>
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
  );
}

export default App;