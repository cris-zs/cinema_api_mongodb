import express from 'express'
import { createMovie, getAllMovies } from '../controllers/movieController.js'
import { createTicket } from '../controllers/ticketController.js'

const movieRoutes = express.Router()

movieRoutes.post('/', createMovie)
movieRoutes.get('/', getAllMovies)
movieRoutes.post('/ticket', createTicket)

export default movieRoutes
