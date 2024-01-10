import asyncHandler from "../utils/asyncHandler.js";

const registerUser = asyncHandler( async(req,res)=>{
    res.send(200).json({
        message:"Success"
    })
})

export default registerUser;