import mongoose,{Schema} from "mongoose";
import { jwt } from "jsonwebtoken";

const userSchema = new Schema({},{timestamps:true});


userSchema.pre("save", async function(next){
    
})
export const User = mongoose.model('User',userSchema);

