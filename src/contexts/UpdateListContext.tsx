import { useState, createContext, ReactNode } from 'react'

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
  }

  const removeLink = () => {
    setLinkLength(linkLength - 1)
  }


  const updateLink = () => {
    setLinkUpdated(!linkUpdated)
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