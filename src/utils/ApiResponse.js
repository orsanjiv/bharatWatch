/* The ApiResponse class is a JavaScript class that represents a response from an API, including the
status code, data, message, and success status. */
class ApiResponse {
    constructor(statusCode,data,message="Success"){
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.success = statusCode < 400;
    }
}

export default ApiResponse;