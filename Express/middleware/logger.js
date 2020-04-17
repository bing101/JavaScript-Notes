// Creating a middleware
// A middleware is a function which has access to req and res object
// It has a next function which has access to next middleware function
const logger = (req, res, next) => {
  console.log(
    `Url is :  ${req.protocol}://${req.get("host")}/${req.orignalUrl}`
  );
  next();
};

module.exports = logger;
