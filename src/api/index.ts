import { Router } from 'express'
import device from './routes/device'

export default () => {
  const app = Router()
  console.log('avant les devices')
  device(app)
  console.log('après les devices')
  return app
}