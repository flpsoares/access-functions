import { useState, useEffect, useContext } from 'react'
import { Container } from './style'

import { BiEditAlt } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'
import { IoIosEye } from 'react-icons/io'
import { SiTiktok } from 'react-icons/si'
import { IconBaseProps } from 'react-icons'
import { 
  FaFacebookF,
  FaInstagram,
  FaGoogle,
  FaTwitter,
  FaPinterestP,
  FaBitcoin,
  FaYoutube
} from 'react-icons/fa'

import api from '../../services/api'

import { DeleteLinkContext } from '../../contexts/DeleteLink'
import { UpdateLinkContext } from '../../contexts/UpdateLink'

interface LinkProps {
  title: string,
  url: string,
  icon: string,
  views: string
}

const Link: React.FC<LinkProps> = ({ title, url, icon, views}) => {
  const [currentIcon, setCurrentIcon] = useState<IconBaseProps>()

  const { setDeleteTitle } = useContext(DeleteLinkContext)
  const { UpdateInfos, updateUrl } = useContext(UpdateLinkContext)

  useEffect(() => {
    switch(icon) {
      case 'nenhuma':

      break;
      case 'facebook':
        setCurrentIcon(<FaFacebookF />)
      break;
      case 'instagram':
        setCurrentIcon(<FaInstagram />)
      break;
      case 'google':
        setCurrentIcon(<FaGoogle />)
      break;
      case 'twitter':
        setCurrentIcon(<FaTwitter />)
      break;
      case 'pinterest':
        setCurrentIcon(<FaPinterestP />)
      break;
      case 'bitcoin': 
        setCurrentIcon(<FaBitcoin />)
      break;
      case 'tiktok':
        setCurrentIcon(<SiTiktok />)
      break;
      case 'youtube': 
        setCurrentIcon(<FaYoutube />)
      break;
    }
  }, [icon])

  const getDeleteInfo = () => {
    api.get(`link/${title}`).then(res => {
      setDeleteTitle(res.data.title)
    })
  }

  const getUpdateInfo = () => {
    api.get(`link/${title}`).then(res => {
      UpdateInfos(res.data.title, res.data.url, res.data.icon)
      console.log(updateUrl)
    })
  }

  return (
    <Container>
      <div>
        {currentIcon}
      </div>
      <div>
        <span>{title}</span>
      </div>
      <div>
        <button onClick={getUpdateInfo}>
          <BiEditAlt />
        </button>
        <button onClick={getDeleteInfo}>
          <MdDelete color="red" />
        </button>
      </div>
      <div>
        <span>{url}</span>
      </div>
      <div>
        <button>
          <IoIosEye />
          <span>{views}</span>
        </button>
      </div>
    </Container>
  )
}

export default Link