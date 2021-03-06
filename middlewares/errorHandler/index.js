module.exports = async (err, req, res, next) => {
  return res.status(err.statusCode || 500).json({
    message: err.message,
    success: false,
    code: err.statusCode || 500,
  });
};
