import Ticket from '../models/Ticket.js'
// import User from '../models/User.js'
import jwt from 'jwt-simple'

// CREATE PARA LA COMPRA DE BOLETOS

const createTicket = async (req, res) => {
  try {
    const ticketData = req.body
    /*
    if (!ticketData.userName) {
      return res.status(400).json({ msg: 'User data is missing' })
    }

    if (!ticketData) {
      return res.status(400).json({ msg: 'Ticket data is missing' })
    } */

    // Revisar el token en el Header para obtener el nombre de usuario del comprador
    const authHeader = req.headers.authorization
    const [bearer, token] = authHeader.split(' ') // String a Arreglo: ['Bearer', 'token']
    if (bearer !== 'Bearer') {
      return res.status(400).json({ message: 'Authorizacion header format is Bearer {token}' })
    }

    // Verificar que el token no sea vacío
    if (!token) {
      return res.status(400).json({ message: 'Token is required' })
    }

    const payload = jwt.decode(token, process.env.SECRET)
    // Se guarda el id de usuario en el boleto
    ticketData.user = payload.id
    // Se calcula el precio del boleto
    ticketData.totalPrice = ticketData.priceSingle * ticketData.amount
    // Se crea el boleto
    const newTicket = await Ticket.create(ticketData)
    return res.status(201).json({
      msg: 'Successful purchase',
      user: newTicket
    })
    // res.status(200).json(ticketData)

    // validar datos del boleto
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

export {
  createTicket
}
