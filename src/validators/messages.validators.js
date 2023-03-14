const { check } = require("express-validator");
const validateResult = require("../utils/validate");

const createMessageValidator = [
    check('content', 'Error regarding the content field')
        .exists()
        .withMessage('The property content was not found')
        .notEmpty()
        .withMessage('The content property must not be empty.')
        .isString()
        .withMessage('The format of the content property is incorrect.'),
    check('userId', 'Error regarding the userId field')
        .exists()
        .withMessage('The property userId was not found')
        .notEmpty()
        .withMessage('The userId property must not be empty.')
        .isInt()
        .withMessage('The format of the userId property is incorrect.'),
    check('conversationId', 'Error regarding the conversationId field')
        .exists()
        .withMessage('The property conversationId was not found')
        .notEmpty()
        .withMessage('The conversationId property must not be empty.')
        .isInt()
        .withMessage('The format of the conversationId property is incorrect.'),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = createMessageValidator