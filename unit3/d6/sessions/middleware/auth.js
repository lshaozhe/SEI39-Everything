const auth = (req, res, next) => {
  if (req.session.userID) {
    next();
  } else {
    res.status(403).json({ status: "error", message: "please login" });
  }
};

module.exports = auth;
