import { useState, createContext, ReactNode } from 'react'

interface DeleteLinkContextData {
  deleteTitle: string
  deleteId: number
  modalDeleteLinkIsOpen: boolean
  setDeleteTitle: (title: string) => void
  setDeleteId: (id: number) => void
  openModalDeleteLink: () => void
  closeModalDeleteLink: () => void
}

interface DeleteLinkProviderProps {
  children: ReactNode
}

export const DeleteLinkContext = createContext({} as DeleteLinkContextData)

export function DeleteLinkProvider({ children }: DeleteLinkProviderProps) {
  const [modalDeleteLinkIsOpen, setModalDeleteLinkIsOpen] = useState(false)

  const [deleteTitle, setDeleteTitle] = useState('')
  const [deleteId, setDeleteId] = useState(0)

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
        deleteId,
        setDeleteId
      }}
    >
      {children}
    </DeleteLinkContext.Provider>
  )
}
