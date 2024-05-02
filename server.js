import { connect } from './config/database.js'
import express from 'express'
import movieRoutes from './routes/movieRoutes.js'
import userRoutes from './routes/userRoutes.js'
import morgan from 'morgan'

const PORT = process.env.PORT || 3000
connect()

const api = express()
api.use(express.json())
// api.use(morgan('tiny'))
morgan.token('host', (req, res) => req.hostname)
morgan.token('param', (req, res, param) => req.params[param])
api.use(morgan(':host :method :url :status: param[id] :res[content-length] - :response-time ms - :date'))

api.use('/api/v1/movies', movieRoutes)
api.use('/api/v1', userRoutes)

api.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}🚀`)
})
