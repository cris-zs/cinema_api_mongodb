import mongoose from 'mongoose'

const genreEnum = ['Horror', 'Thriller', 'Romance', 'Science fiction', 'Mystery', 'Experimental', 'Historical', 'Documentary', 'Comedy', 'Action', 'Western', 'Musical', 'Film Noir', 'Mockumentary', 'Drama', 'Crime', 'Adventure', 'Black comedy', 'Animation', 'Buddy comedy', 'Fantasy']

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  releaseDate: {
    type: Date,
    required: true
  },
  genres: {
    type: String,
    required: true,
    enum: genreEnum
  },
  score: {
    type: Number,
    required: true
  },
  rating: {
    type: String
  },
  duration: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, { timestamps: true })

export default mongoose.model('Movie', movieSchema)
