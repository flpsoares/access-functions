import { useState, createContext, ReactNode } from 'react'

interface DeleteLinkContextData {
  deleteTitle: string
  modalDeleteLinkIsOpen: boolean
  setDeleteTitle: (title: string) => void
  openModalDeleteLink: () => void
  closeModalDeleteLink: () => void
}

interface DeleteLinkProviderProps {
  children: ReactNode
}

export const DeleteLinkContext = createContext({} as DeleteLinkContextData)

export function DeleteLinkProvider({children}: DeleteLinkProviderProps) {
  const [ modalDeleteLinkIsOpen, setModalDeleteLinkIsOpen ] = useState(false)

  const [ deleteTitle, setDeleteTitle ] = useState('')

  const openModalDeleteLink = () => {
    setModalDeleteLinkIsOpen(true)
  }

  const closeModalDeleteLink = () => {
    setModalDeleteLinkIsOpen(false)
  }

  return (
    <DeleteLinkContext.Provider 
      value={{
        modalDeleteLinkIsOpen,
        openModalDeleteLink,
        closeModalDeleteLink,
        deleteTitle,
        setDeleteTitle,
      }}
    >
      {children}
    </DeleteLinkContext.Provider>
  )
}