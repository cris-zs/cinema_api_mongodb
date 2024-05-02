import mongoose from 'mongoose'

const ticketSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  priceSingle: {
    type: Number,
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  },
  screeningTime: {
    type: String,
    required: true
  },
  seats: {
    type: Array,
    required: true
  }
}, { timestamps: true })

export default mongoose.model('Ticket', ticketSchema)
