export default class CustomError extends Error {
    static createError({ name = "Error", cause, message, code = 1 }) {
        let error = new Error(message, {cause});
        error.name = name
        error.code = code;
        // console.log('este es ---------------' + error.cause)
        return error;
    }
}
