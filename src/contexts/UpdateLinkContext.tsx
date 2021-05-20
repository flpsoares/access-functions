import { useState, createContext, ReactNode } from 'react'

interface UpdateLinkData {
  modalUpdateLinkIsOpen: boolean
  openModalUpdateLink: () => void
  closeModalUpdateLink: () => void
  UpdateInfos: (title: string, url: string, icon: string) => void
  updateTitle: string
  updateUrl: string
  updateIcon: string
}

interface UpdateLinkProviderProps {
  children: ReactNode
}

export const UpdateLinkContext = createContext({} as UpdateLinkData)

export function UpdateLinkProvider({ children }: UpdateLinkProviderProps) {
  const [modalUpdateLinkIsOpen, setModalUpdateLinkIsOpen] = useState(false)

  const [updateTitle, setUpdateTitle] = useState('')
  const [updateUrl, setUpdateUrl] = useState('')
  const [updateIcon, setUpdateIcon] = useState('')

  const UpdateInfos = (title: string, url: string, icon: string) => {
    setUpdateTitle(title)
    setUpdateUrl(url)
    setUpdateIcon(icon)
  }

  const openModalUpdateLink = () => {
    setModalUpdateLinkIsOpen(true)
  }
  const closeModalUpdateLink = () => {
    setModalUpdateLinkIsOpen(false)
  }

  return (
    <UpdateLinkContext.Provider
      value={{
        modalUpdateLinkIsOpen,
        openModalUpdateLink,
        closeModalUpdateLink,
        UpdateInfos,
        updateTitle,
        updateUrl,
        updateIcon
      }}
    >
      {children}
    </UpdateLinkContext.Provider>
  )
}
