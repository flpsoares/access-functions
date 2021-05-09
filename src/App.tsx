import { useEffect, useState } from 'react';
import { Container } from './styles/styles'

import api from './services/api'

import Link from './components/Link'
// import ModalCreateLink from './components/ModalCreateLink'
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

  useEffect(() => {
    api.get('links').then(res => {
      setLinks(res.data)
    })
  }, [])

  return (
    <Container>
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
      {/* <ModalCreateLink /> */}
      {/* <ModalDeleteLink /> */}
      {/* <ModalUpdateLink /> */}
    </Container>
  );
}

export default App;
