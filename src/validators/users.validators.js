const { check } = require("express-validator");
const validateResult = require("../utils/validate");

const createUserValidator = [
    check('username', 'Error regarding the username field')
        .exists()
        .withMessage('The property username was not found')
        .notEmpty()
        .withMessage('The username property must not be empty.')
        .isString()
        .withMessage('The format of the username property is incorrect.')
        .isLength({ max: 30 })
        .withMessage('The username property must have a maximum length of 40 characters.')
        .isLength({ min: 3 })
        .withMessage('The username property must have a minimum length of 3 characters.'),
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
    check('firstname', 'Error regarding the firstname field')
        .exists()
        .withMessage('The property firstname was not found')
        .notEmpty()
        .withMessage('The firstname property must not be empty.')
        .isString()
        .withMessage('The format of the firstname property is incorrect.')
        .isLength({ max: 30 })
        .withMessage('The firstname property must have a maximum length of 30 characters.'),
    check('lastname', 'Error regarding the lastname field')
        .exists()
        .withMessage('The property lastname was not found')
        .notEmpty()
        .withMessage('The lastname property must not be empty.')
        .isString()
        .withMessage('The format of the lastname property is incorrect.')
        .isLength({ max: 30 })
        .withMessage('The lastname property must have a maximum length of 30 characters.'),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = {
    createUserValidator,
}