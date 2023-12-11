const express = require('express')
const app = express()
const port = 3000
require("./src/db/connection")
const company = require("./src/modals/User")
const router = require('./src/routers/routes')
app.use(express.json())



app.use(router)
app.listen(port, () => {
  console.log(`Server in live on ${port}`)
})