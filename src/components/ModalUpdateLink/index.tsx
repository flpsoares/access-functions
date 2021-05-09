import { MdClose } from 'react-icons/md'
import { Container, Box, CloseButton } from './style'

const ModalUpdateLink: React.FC = () => {
  return (
    <Container>
      <Box>
        <form method="post">
          <div>
            <select>
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
            <input type="text"/>
          </div>
          <div>
            <input type="text"/>
          </div>
          <button>Atualizar</button>
        </form>
        <CloseButton type="button">
          <MdClose color="#c9d1d9" />
        </CloseButton>
      </Box>
    </Container>
  )
}

export default ModalUpdateLink

