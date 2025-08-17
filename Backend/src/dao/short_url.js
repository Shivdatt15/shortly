import urlSchema from "../model/short_url.model.js"

export const saveShortUrl=async(shortUrl,longUrl,userId)=>{
     
   const newUrl = new urlSchema({
           full_Url : longUrl,
           short_Url: shortUrl
       });
       if(userId)
       {
        newUrl.user_id=userId
       }
       newUrl.save();
}