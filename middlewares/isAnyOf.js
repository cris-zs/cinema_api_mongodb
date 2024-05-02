const isAnyOf = (roles) => (req, res, next) => {
  if (roles.indexOf(req.role) >= 0) {
    next()
  } else {
    return res.status(403).json({ message: 'You do not have permission' })
  }
}

export { isAnyOf }
