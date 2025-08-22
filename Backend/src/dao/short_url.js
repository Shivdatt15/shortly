import urlSchema from "../model/short_url.model.js"
import { ConflictError } from "../utils/errorHandler.js";

export const saveShortUrl=async(shortUrl,longUrl,userId)=>{
     try{

         const newUrl = new urlSchema({
             full_Url : longUrl,
             short_Url: shortUrl
            });
            if(userId)
                {
                    newUrl.user=userId
                }
               await newUrl.save();
        }
        catch(err)
        {
            if(error.code == 11000)
            {
                throw new ConflictError("ShortURL already exist")
            }
            throw new Error(err);
        }
}

export const getShortUrl = async (shortUrl)=>{
    return await urlSchema.findOneAndUpdate({short_Url:shortUrl},{$inc:{clicks:1}})
}

export const getCustomShortUrl = async (slug) => {
    return await urlSchema.findOne({short_Url:slug});
}