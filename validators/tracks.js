const { check } = require("express-validators");
const validationResult = require("../utils/handleValidator");


const validatorCreateItem = [
  check("name").exists().notEmpty(),
  check("album").exists().notEmpty(),
  check("cover").exists().notEmpty(),
  check("artist").exists().notEmpty(),
  check("artist.name").exists().notEmpty(),
  check("artist.nickname").exists().notEmpty(),
  check("artist.nationality").exists().notEmpty(),
  check("duracion").exists().notEmpty(),
  check("duracion").exists().notEmpty(),
  check("duracion.start").exists().notEmpty(),
  check("duracion.end").exists().notEmpty(),
  check("mediaId").exists().notEmpty().isMongoId(),
  (req, res, next) => {
    return validationResult();
  },
];

module.exports = { validatorCreateItem };
