import express from 'express'
import { createUser, login, getAllUsers, getClients } from '../controllers/userController.js'
import { isAdmin } from '../middlewares/isAdmin.js'
import { isAuth } from '../middlewares/isAuth.js'
import { isAnyOf } from '../middlewares/isAnyOf.js'
// import { isEmployee } from '../middlewares/isEmployee.js'

const userRoutes = express.Router()

userRoutes.post('/register', createUser)
userRoutes.post('/login', login)
userRoutes.get('/users', isAuth, isAdmin, getAllUsers)
userRoutes.get('/clients', isAuth, isAnyOf(['EMPLOYEE', 'ADMIN']), getClients)
// userRoutes.get('/clients', isAuth, isEmployee, getClients)

export default userRoutes
