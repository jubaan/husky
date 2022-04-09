const { check } = require('express-validator');

let validateNewProduct = [
  check('name')
    .notEmpty()
    .withMessage('Name is required')
    .bail()
    .isLength({ min: 3 })
    .withMessage('Name must be at least 3 characters long'),
  check('description')
    .notEmpty()
    .withMessage('Description is required')
    .bail()
    .isLength({ min: 100 })
    .withMessage('Description must be at least 100 characters long'),
  check('model').exists().withMessage('Model is required'),
  check('type').notEmpty().withMessage('Type is required'),
  check('price').notEmpty().withMessage('Price is required'),
];


module.exports = validateNewProduct;