import dotenv from 'dotenv'
dotenv.config()

import cors from 'cors'
import express from 'express'
import routes from './src/routes.js'

const port = process.env.PORT || 4000
const app = express()
app.use(cors())
app.use(express.json())

app.use('/', routes)

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack)
    return res.status(404).json({message: "not found"})
})

app.listen(port, () => console.log(`API server ready on http://localhost:${port}`))
