import config from './config'
import express from 'express'

async function startServer() {
  const app = express()

  await require('./loaders').default({expressApp : app})

  app.listen(config.port, () => {
    console.log(`
      ##########################################
         ${config.app.name} listening on port : ${config.port}
      ##########################################
    `)
  })
}

startServer()