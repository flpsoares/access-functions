import { useState, createContext, ReactNode } from 'react'

interface CreateLinkContextData {
  modalCreateLinkIsOpen: boolean
  openModalCreateLink: () => void
  closeModalCreateLink: () => void
}

interface CreateLinkProviderProps {
  children: ReactNode
}

export const CreateLinkContext = createContext({} as CreateLinkContextData)

export function CreateLinkProvider({ children }: CreateLinkProviderProps) {
  const [modalCreateLinkIsOpen, setModalCreateLinkIsOpen] = useState(false)

  const openModalCreateLink = () => {
    setModalCreateLinkIsOpen(true)
  }

  const closeModalCreateLink = () => {
    setModalCreateLinkIsOpen(false)
  }

  return (
    <CreateLinkContext.Provider
      value={{
        modalCreateLinkIsOpen,
        openModalCreateLink,
        closeModalCreateLink
      }}
    >
      {children}
    </CreateLinkContext.Provider>
  )
}
