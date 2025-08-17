import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
  full_Url: {
    type: String,
    required: true,
  },
  short_Url: {
    type: String,
    required: true,
    unique: true,
    index:true
  },
  clicks: {
    type: Number,
    required:true,
    default: 0,
  },
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"user",
  }
});

const shortUrl = mongoose.model("shortUrl", urlSchema);

export default shortUrl;
