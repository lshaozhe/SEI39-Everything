const { check } = require("express-validator");

const validatePut = [
  check("name", "name is required").not().isEmpty(),
  check("colour", "colour is required").not().isEmpty(),
  check("colour", "colour must be longer than 5 characters but less than 15").isLength({
    min: 5,
    max: 15,
  }),
];

module.exports = { validatePut };
