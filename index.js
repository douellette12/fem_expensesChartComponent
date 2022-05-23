import express from 'express'
import cors from 'cors'

const PORT = 5000
const app = express()

app.use(express.json()).use(cors())
app.use(express.static('public'))

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})