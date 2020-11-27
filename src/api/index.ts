import { Router } from 'express'
import device from './routes/device'

export default () => {
  const app = Router()
  device(app)
  return app
}