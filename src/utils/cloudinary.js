import {v2 as cloudinary} from "cloudinary";
import fs from "fs";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadCloudinary = async (localfilepath)=>{
    try{
        if(!localfilepath){
        return null;
        }
// upload file on cloudinary
        const response = await cloudinary.uploader.upload(localfilepath,{
            resource_type: "auto"
        })
        // file has been uploaded suceesfully
        // console.log("file uploaded successfully")
        // console.log(response.url)
        return response;
    } catch(error){
        // it remove the locally saved temporary file after upload operation got failed
        fs.unlink(localfilepath);
        return null;
    }
}

export default uploadCloudinary;