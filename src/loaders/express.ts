import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'

import routes from '../api'
import config from '../config'


export default async ({ app } : { app: express.Application }) => {
  app.get('/status', (req,res) => {
    res.status(200).end()
  })
  app.head('/status', (req,res) => {
    res.status(200).end()
  })
  app.enable('trust proxy')

  app.use(cors())
  app.use(bodyParser.json())

  app.use(config.api.prefix,routes)


  if(config.logs.level === 'debug') {
    app.use(morgan('dev'))
  }
  else if(config.logs.level === 'silly') {
    app.use(morgan('combined'))
  }
  else {
    app.use(morgan('tiny'))
  }

  return app
}