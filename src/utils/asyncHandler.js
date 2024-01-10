/**
 * The `asyncHandler` function is a wrapper that allows for error handling in asynchronous request
 * handlers.
 */
const asyncHandler = requestHandler => {
    return (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>(next(err)))
    }
}

export default asyncHandler;