const {
    ValidationError,
    DatabaseError,
    ConnectionError,
    ConnectionAcquireTimeoutError,
    ConnectionTimedOutError,
    InvalidConnectionError,
    ConnectionRefusedError
} = require('sequelize')

const logError = async(err, req, res, next) => {
    console.log(err)
    next(err)
}

const errorHandler = async(err, req, res, next) => {
    let {status} = err

    return res.status(status || 500).json({
        message: err.message,
        errorName: err.name
    })
}

const ormErrorHandler = async(error, req, res, next) => {
    if (
        error instanceof ConnectionError ||
        error instanceof ConnectionAcquireTimeoutError ||
        error instanceof ConnectionTimedOutError ||
        error instanceof InvalidConnectionError ||
        error instanceof ConnectionRefusedError
    ) {
        return res.status(409).json({
            name: error.name,
            message: "Database conection error"
        })
    }

    if (error instanceof ValidationError){
        return res.status(409).json({
            name: error.name,
            message: error.message,
            errors: error.errors
        })
    }

    if (error instanceof DatabaseError) {
        return res.status(409).json({
            name: error.name,
            message: error.message,
            errors: error.errors,
            params: error['parameters']
          })
    }

    next(error)
}

module.exports = {
    logError,
    errorHandler,
    ormErrorHandler
}