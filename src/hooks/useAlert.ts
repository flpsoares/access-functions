import { useState, useEffect } from 'react'

import AlertEvents from '../events/AlertEvents'

export function useAlert() {
  const [content, setContent] = useState('')
  const [success, setSuccess] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    AlertEvents.on('currentContent', setContent)
    AlertEvents.on('currentSuccess', setSuccess)
    AlertEvents.on('currentError', setError)
    return () => {
      AlertEvents.off('currentContent', setContent)
      AlertEvents.off('currentSuccess', setSuccess)
      AlertEvents.off('currentError', setError)
    }
  }, [])

  return {content, success, error}
}