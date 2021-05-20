import { useState, createContext, ReactNode } from 'react'
import AlertEvents from '../events/AlertEvents'

interface UpdateListContextData {
  linkLength: number
  linkUpdated: boolean
  setLinkLength: (link: number) => void
  addLink: () => void
  updateLink: () => void
  removeLink: () => void
} 

interface UpdateListProviderProps {
  children: ReactNode
}

export const UpdateListContext = createContext({} as UpdateListContextData)

export function UpdateListProvider({children}: UpdateListProviderProps) {
  const [ linkLength, setLinkLength ] = useState(0)
  const [ linkUpdated, setLinkUpdated ] = useState(false)

  const addLink = () => {
    setLinkLength(linkLength + 1)
    AlertEvents.emit('currentSuccess', 'Link adicionado com sucesso!')
    AlertEvents.emit('currentError', '')
  }

  const removeLink = () => {
    setLinkLength(linkLength - 1)
    AlertEvents.emit('currentSuccess', 'Link removido com sucesso!')
    AlertEvents.emit('currentError', '')
  }


  const updateLink = () => {
    setLinkUpdated(!linkUpdated)
    AlertEvents.emit('currentSuccess', 'Link atualizado com sucesso!')
    AlertEvents.emit('currentError', '')
  }

  return (
    <UpdateListContext.Provider 
      value={{
        linkLength,
        linkUpdated,
        setLinkLength,
        addLink,
        updateLink,
        removeLink
      }}
    >
      {children}
    </UpdateListContext.Provider>
  )
}