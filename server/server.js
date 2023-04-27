const express = require('express')
const app = express()
const port = 4000
const cors = require('cors')

app.use(cors());

app.get("/api", (req, res) => {
    res.send({ message: "Sent from API" });
})

app.listen({port}, () => {console.log(`Server started on port ${port}`)})