import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

const connect = () => {
  mongoose.connect(process.env.DB_CONNCECT_URI)

  const { connection } = mongoose

  connection.once('open', () => {
    console.log('Success')
  })

  connection.on('error', (error) => {
    console.log('Error: ', error)
  })
}

export { connect }
