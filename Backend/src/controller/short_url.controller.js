import { getShortUrl } from "../dao/short_url.js";
import { createShortUrlWithoutUser } from "../services/short_url.service.js";
import wrapAsync from "../utils/trycatchwrap.js";

export const createShortUrl=wrapAsync(async (req,res)=>{
    const {url}=req.body;
    const shortUrl= await createShortUrlWithoutUser(url);
    res.send(process.env.APP_URL +"/"+shortUrl);
});

export const redirectFromShortUrl=wrapAsync(async (req,res)=>{
  const {id}=req.params;
  const url= await getShortUrl(id);
  if(url)
  {
    res.redirect(url.full_Url);
  }
  else{
     res.status(404).send("not be found");
  }
  
});