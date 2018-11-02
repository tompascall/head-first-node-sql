exports.conditionalMiddleware = (predicate, middleware) => (req, res, next) => {
  if (predicate(req, res)) {
    middleware(req, res, next);
  } else {
    next();
  }
};