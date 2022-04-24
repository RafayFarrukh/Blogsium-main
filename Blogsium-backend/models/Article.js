import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  title: {
    type: String,
    required: [true, "Please provide title"],
    trim: true,
  },

  image: {
    type: String,
  },

  body: {
    type: String,
    required: [true, "Please enter something"],
  },
  author: {
    type: String,
    required: [true, "Please provide Author"],
    maxlength: 30,
    minlength: 3,
    trim: true,
  },
  created_at: {
    type: Date,
    required: true,
  },
});

export default mongoose.model("Article", ArticleSchema);
