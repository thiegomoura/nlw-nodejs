import express from 'express'

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