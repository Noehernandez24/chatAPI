const { check } = require("express-validator");
const validateResult = require("../utils/validate");

const userLoginValidator = [
    check('email', 'Error regarding the email field')
        .exists()
        .withMessage('The property email was not found')
        .notEmpty()
        .withMessage('The email property must not be empty.')
        .isEmail()
        .withMessage('The format of the email property is incorrect.')
        .isLength({ max: 80 })
        .withMessage('The email property must have a maximum length of 80 characters.'),
    check('password', 'Error regarding the password field')
        .exists()
        .withMessage('The property password was not found')
        .notEmpty()
        .withMessage('The password property must not be empty.')
        .isString()
        .withMessage('The format of the password property is incorrect.')
        .isLength({ min: 6 })
        .withMessage('The password property must have a minimum length of 6 characters.'),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = userLoginValidator