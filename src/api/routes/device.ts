import { Router } from 'express'
const route = Router();

export default (app: Router) => {

  route.get('/', (req, res) => {
    console.log('tesss')
    return res.json({"device":"device things"}).status(200)
  })

  app.use('/devices', route)
}