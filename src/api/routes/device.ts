import { Router } from 'express'
import Logger from '../../loaders/logger'

const route = Router();

export default (app: Router) => {

  app.use('/devices', route)

  route.get('/', (req, res) => {
    Logger.http(`${req.originalUrl} has been call`)
    return res.json({"device":"device things"}).status(200)
  })
}