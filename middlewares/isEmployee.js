const isEmployee = (req, res, next) => {
  if (req.role === 'EMPLOYEE') {
    next()
  } else {
    return res.status(403).json({ message: 'You do not have permission' })
  }
}

export { isEmployee }
