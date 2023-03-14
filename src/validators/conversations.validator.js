const { check } = require("express-validator");
const validateResult = require("../utils/validate");

const createConversationValidator = [
  check('title', 'Error regarding the title field')
    .exists()
    .withMessage('The property title was not found')
    .notEmpty()
    .withMessage('The title property must not be empty.')
    .isString()
    .withMessage('The format of the title property is incorrect.')
    .isLength({ max: 40 })
    .withMessage(
      'The title property must have a maximum length of 40 characters.'
    ),
  check('userId', 'Error regarding the userId field')
    .exists()
    .withMessage('The property userId was not found')
    .notEmpty()
    .withMessage('The userId property must not be empty.')
    .isInt()
    .withMessage('The format of the userId property is incorrect.'),
    (req, res, next) => {
        validateResult(req, res, next)
    }
];


module.exports = {
    createConversationValidator,
}