import Movie from '../models/Movie.js'

// CREATE
const createMovie = async (req, res) => {
  try {
    const movieData = req.body
    // validación de datos
    if (!movieData) {
      return res.status(400).json({ msg: 'No movie data submitted' })
    }

    // Creación de la película en la BD
    const newMovie = await Movie.create(movieData)
    res.status(201).json(newMovie)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// Read para consultar la cartelera disponible
const getAllMovies = async (req, res) => {
  const queryDb = { isActive: true }

  const queryKeys = ['title', 'genres', 'relaseDate', 'score']

  queryKeys.forEach(key => {
    if (req.query[key]) {
      queryDb[key] = { $regex: new RegExp(req.query[key], 'i') }
    }
  })
  try {
    const movies = await Movie.find({ isActive: true })
    if (!movies) {
      return res.status(404).json({ msg: 'No active movies found' })
    }
    res.status(200).json(movies)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

export {
  createMovie,
  getAllMovies
}
