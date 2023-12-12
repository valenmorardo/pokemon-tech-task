const catchedErrorAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res).catch((error) => {
      return next(error);
    });
  };
};

export default catchedErrorAsync;
