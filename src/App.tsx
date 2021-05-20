import { useContext, useEffect, useState } from 'react'
import { Container } from './styles/styles'

import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult
} from 'react-beautiful-dnd'

import api from './services/api'

import { useAlert } from './hooks/useAlert'

import Link from './components/Link'
import ModalCreateLink from './components/ModalCreateLink'
import ModalDeleteLink from './components/ModalDeleteLink'
import ModalUpdateLink from './components/ModalUpdateLink'

import { CreateLinkContext } from './contexts/ModalCreateLinkContext'
import { UpdateListContext } from './contexts/UpdateListContext'
import { DeleteLinkContext } from './contexts/DeleteLinkContext'
import { UpdateLinkContext } from './contexts/UpdateLinkContext'

import { AnimatePresence } from 'framer-motion'

import Alert from './components/Alert'

interface LinkProps {
  id: number
  title: string
  url: string
  icon: string
  views: number
}

function App() {
  const { modalCreateLinkIsOpen, openModalCreateLink } =
    useContext(CreateLinkContext)
  const { linkLength, setLinkLength, linkUpdated } = useContext(UpdateListContext)
  const { deleteTitle } = useContext(DeleteLinkContext)
  const { updateTitle, updateUrl, updateIcon } = useContext(UpdateLinkContext)

  const { success } = useAlert()

  const [links, setLinks] = useState<LinkProps[]>([])

  useEffect(() => {
    api.get('links').then((res) => {
      setLinks(res.data)
      setLinkLength(res.data.length)
    })
  }, [linkLength, linkUpdated])

  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) return
    const items = Array.from(links)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)

    api.put('link', {
      items: items.map((item, index) => {
        return {
          title: item.title,
          order: index
        }
      })
    })

    console.log(items)

    setLinks(items)
  }

  return (
    <AnimatePresence>
      <Container>
        <button onClick={openModalCreateLink}>Criar</button>
        {success && <Alert isSuccess content={success} />}
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="links">
            {(provided) => {
              return (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {links.map((link, index) => {
                    return (
                      <Draggable
                        key={link.id}
                        draggableId={String(link.id)}
                        index={index}
                      >
                        {(provided) => {
                          return (
                            <div
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                            >
                              <Link
                                title={link.title}
                                url={link.url}
                                icon={link.icon}
                                views={link.views}
                              />
                            </div>
                          )
                        }}
                      </Draggable>
                    )
                  })}
                  {provided.placeholder}
                </div>
              )
            }}
          </Droppable>
        </DragDropContext>
        {modalCreateLinkIsOpen && <ModalCreateLink />}
        {deleteTitle && <ModalDeleteLink title={deleteTitle} />}
        {updateIcon && (
          <ModalUpdateLink title={updateTitle} url={updateUrl} icon={updateIcon} />
        )}
      </Container>
    </AnimatePresence>
  )
}

export default App
