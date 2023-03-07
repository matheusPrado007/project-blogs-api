const BAD_REQUEST = 400;

const validateName = async (req, res, next) => {
  const { name } = req.body;
  if (name === undefined) {
    return res.status(BAD_REQUEST).json({
      message: '"name" is required',
    });
  }
  return next();
};

module.exports = {
  validateName,
};