import { Container } from './styles/styles'

import Link from './components/Link'
// import ModalCreateLink from './components/ModalCreateLink'
// import ModalDeleteLink from './components/ModalDeleteLink'
// import ModalUpdateLink from './components/ModalUpdateLink'

function App() {
  return (
    <Container>
      <Link
        title="Facebook"
        url="facebook.com"
        icon="facebook"
        views="10"
      />
      {/* <ModalCreateLink /> */}
      {/* <ModalDeleteLink /> */}
      {/* <ModalUpdateLink /> */}
    </Container>
  );
}

export default App;
