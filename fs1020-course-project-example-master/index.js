import express from 'express'
import * as jwtGenerator from 'jsonwebtoken'
import entryRoutes from './src/entries'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

app.post('/auth', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    if (username == "test" && password == "password") {
        const token = jwtGenerator.sign({username}, process.env.JWT_SECRET, {expiresIn: '1h'})
        return res.send({token})
    }
    return res.status(401).send({error: "incorrect username\password"})
})


app.use('/contact_form/entries', entryRoutes)

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`)
})
