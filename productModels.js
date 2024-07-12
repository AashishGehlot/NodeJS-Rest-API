import mongoose from "mongoose";

const productSchema = mongoose.Schema(
    {
        name: {
            type:string,
            required:[true, "please enter the product name"]
        },
        quantity:{
            type:Number,
            required:true, 
            default:0
        },

        price:{
            type:Number,
            required:true
        },
        image:{
            type:number, 
            required:false,
        }
    },
    {
        timestamps:true
    }
)

export const Product = mongoose.model('Product', productSchema);