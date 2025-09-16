const verify = (req, res, next) => {
  const token = req.cookie.user;

  if (!token) {
  }

  jwt.verify(token, "8767854840", (error, user) => {
    if (error) {
    }

    req.user = user;

    next();
  });
};
