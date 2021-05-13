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
    AlertEvents.emit('currentSuccess', true)
    AlertEvents.emit('currentContent', 'Link adicionado com sucesso!')
  }

  const removeLink = () => {
    setLinkLength(linkLength - 1)
    AlertEvents.emit('currentSuccess', true)
    AlertEvents.emit('currentContent', 'Link removido com sucesso!')
  }

  const updateLink = () => {
    setLinkUpdated(!linkUpdated)
    AlertEvents.emit('currentSuccess', true)
    AlertEvents.emit('currentContent', 'Link atualizado com sucesso!')
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