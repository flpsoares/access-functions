import { useState, useEffect } from 'react'

import AlertEvents from '../events/AlertEvents'

export function useAlert() {
  const [success, setSuccess] = useState<string>()
  const [error, setError] = useState<string>()

  useEffect(() => {
    AlertEvents.on('currentSuccess', setSuccess)
    AlertEvents.on('currentError', setError)
    return () => {
      AlertEvents.off('currentSuccess', setSuccess)
      AlertEvents.off('currentError', setError)
    }
  }, [])

  return { success, error }
}
