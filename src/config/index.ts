import * as dotenv from 'dotenv'

process.env.NODE_ENV = process.env.NODE_ENV || 'developpement'

const envFound = dotenv.config()

if(envFound.error) throw new Error("⚠️  Couldn't find .env file  ⚠️")

export default {
  app: {
    name: process.env.APP_NAME
  },
  port: process.env.PORT,
  logs: {
    level: process.env.LOG_LEVEL || 'silly'
  },
  api: {
    prefix: '/api'
  },
  databaseURL: process.env.MONGODB_URI

}