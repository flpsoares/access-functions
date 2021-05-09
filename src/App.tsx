import { useContext, useEffect, useState } from 'react';
import { Container } from './styles/styles'

import api from './services/api'

import Link from './components/Link'
import ModalCreateLink from './components/ModalCreateLink'
import { CreateLinkContext } from './contexts/ModalCreateLink';
import { UpdateListContext } from './contexts/UpdateList';
// import ModalDeleteLink from './components/ModalDeleteLink'
// import ModalUpdateLink from './components/ModalUpdateLink'

interface LinkProps {
  id: number
  title: string
  url: string
  icon: string
  views: string
}

function App() {
  const [ links, setLinks ] = useState<LinkProps[]>([])

  const { modalCreateLinkIsOpen, openModalCreateLink } = useContext(CreateLinkContext)
  const { linkLength, setLinkLength } = useContext(UpdateListContext)

  useEffect(() => {
    api.get('links').then(res => {
      setLinks(res.data)
      setLinkLength(res.data.length)
    })
  }, [linkLength, setLinkLength])

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
      {/* <ModalDeleteLink /> */}
      {/* <ModalUpdateLink /> */}
    </Container>
  );
}

export default App;
