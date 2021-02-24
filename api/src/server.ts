import 'reflect-metadata'
import express from 'express'
import router from './routes';
import './database'


const api = express()
api.use(express.json())
api.use(router);

const port = 3333

api.listen(port, () =>
    console.log(`Server started on ${port} ✔`))