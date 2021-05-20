import { TypedEmitter } from 'tiny-typed-emitter'

class AlertEvents extends TypedEmitter<{
  currentError: (message: string) => void
  currentSuccess: (message: string) => void
}> {}

export default new AlertEvents()