import 'reflect-metadata'
import express from 'express'
import './database'

const api = express()


api.get("/", function(request, response) {
    return response.json({message: "Hello World!"})
})

api.post("/", (request, response) => {
    return response.json({message: "Data succesfull save!"})
})

const port = 3333

api.listen(port, () =>
    console.log(`Server started on ${port} ✔`))