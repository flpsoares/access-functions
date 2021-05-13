import { TypedEmitter } from 'tiny-typed-emitter'

export class AlertEvents extends TypedEmitter<{
  currentContent: (message: string) => void
  currentError: (value: boolean) => void
  currentSuccess: (value: boolean) => void
}> {}

export default new AlertEvents()