import mongoose, {Schema} from "mongoose";

                //making of userSchema

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true  
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },
        fullname: {
            type: String,
            required: true,
            trim: true,
            index: true  
        },
        avatar: {
            type: String,   //cloudinary url
            required: true, 
        },
        coverImage: {
            type: String,   //cloudinary url 
        },
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        password: {
            type: String,
            required: [true, 'Password is required']
        },
        refreshToken: {
            type: String
        }
    },{timestamps: true}
)

                //making of mongoose model

export const User = mongoose.model("User", userSchema)