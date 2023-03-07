const {validationResult}=require("express-validators")

const validationResult = (req,res) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (err) {
    res.status(403);
    res.send({ errors: err.array() });
  }
};

module.exports=validationResult
