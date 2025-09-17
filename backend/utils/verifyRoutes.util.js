const verify = (req, res, next) => {
  const token = req.cookie.user;

  if (!token) {
  }

  jwt.verify(token, process.env.JWT_SECRET , (error, user) => {
    if (error) {
    }

    req.user = user;

    next();
  });
};
