const express = require('express')
const path = require('path')

const app = express()
const staticFileServer = express()
const restApi = express()

const port = 3000

const staticFilePath = path.join(__dirname, '..', 'client', 'dist')
app.use(express.static(staticFilePath))

staticFileServer.get('/*', (req, res) => {
  res.sendFile(path.join(staticFilePath, 'index.html'))
})

restApi.get('/', (req, res) => {
  res.json({"hello": "world! :)"})
})

app.use('/translate', staticFileServer)
app.use('/translationApi', restApi)

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
