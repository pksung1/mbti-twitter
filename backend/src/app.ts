import * as express from 'express'
import * as dotenv from 'dotenv' 
import * as path from 'path'
import { messageRouter } from './routes'

dotenv.config({path: path.join(__dirname, '..', 'env/dev.env')})
const app = express()

app.use(express.json())
app.use('/message', messageRouter)







