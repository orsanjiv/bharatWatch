import mongoose ,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
import bcrypt from "bcrypt";

const videoSchema = new Schema(
    {

    }
    ,{timestamps:true}
)

export const Video = mongoose.model('Video',videoSchema);
