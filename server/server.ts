// Add express
import express from 'express'

const app: express.Application = express()
const PORT: string | number = process.env.PORT || 3000

app.get('/health', (req, res): void => {
    res.status(200).send()
})

app.post('/registration', (req, res): void => {
    
})

app.post('/login', (req, res): void => {

})

app.get('/reviews', (req, res): void => {

})

app.patch('/reviews', (req, res): void => {

})

app.listen(PORT, () => console.log(`Listening on ${PORT}`))