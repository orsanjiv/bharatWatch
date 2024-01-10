/* The `ApiError` class is a custom error class in JavaScript that represents an error that occurred
during an API request, including the status code, error message, and stack trace. */
class ApiError extends Error{
    constructor(
        statusCode,
        message="Something went wrong",
        error = [],
        statck = false
    ){
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.error = error;
        this.statck = statck;

        if(statck){
            this.stack = statck;
        }else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}

export default ApiError;