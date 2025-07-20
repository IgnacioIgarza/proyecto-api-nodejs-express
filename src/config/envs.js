import { config } from 'dotenv'
config()

export const envs = {
  database:{
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID,
    measurementId: process.env.MEASUREMENTID
  },
  port: process.env.PORT,
  secrets:{
    jwt_secret:process.env.JWT_SECRET || "asdfqwer",
    session: process.env.SESION_KEY || "qwerasdf"
  }
}