import EErrors from '../../controllers/errors/enums.js'

export default (error, req, res, next) => {
    switch (error.code) {
        case EErrors.PRODUCT_FIELDS_ERROR:
            res.status(400).send({
                status: 'error',
                error: error.name,
                description: error.cause
            })
            break;

        default:
            res.send({
                status: 'error',
                error: 'unhandled error'
            })
            break;
    }
    next()
}