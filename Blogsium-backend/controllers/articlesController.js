import validateArticle from "../validation/articles.js";
import Article from "../models/Article.js";
import Jwt from "jsonwebtoken";
import cloudinary from "cloudinary";
import multer from "multer";

const { CLOUD_NAME, API_KEY, API_SECRET } = process.env;

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET,
});

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
// const upload = multer({ storage: storage });

// Router.post("/create", upload.single("image"), async (req, res) => {
//   const { title, content, date, token } = req.body;

//   if (req.file) {
//     cloudinary.uploader.upload(
//       req.file.path,
//       { folder: "bugblog" },
//       async (err, result) => {
//         if (err) {
//           return res.status(500).json({
//             error: "Internal server error",
//           });
//         }
//         const image = result.secure_url;
//         const cloudinaryId = result.public_id;
//         try {
//           const decoded = jwt.verify(token, process.env.JWT_SECRET);
//           const user = await User.findById(decoded._id);
//           if (!user) {
//             return res.status(404).send({ error: "User not found" });
//           }
//           const blog = new Blog({
//             title,
//             content,
//             image,
//             cloudinaryId,
//             author: user.name,
//             author_id: user._id,
//             created_at: date,
//           });
//           await blog.save();
//           user.blogs.push(blog._id);
//           await user.save();
//           return res.status(200).send({
//             message: "Blog created successfully",
//           });
//         } catch (err) {
//           return res.status(401).send({ error: "Invalid token" });
//         }
//       }
//     );
//   } else {
//     try {
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);
//       const user = await User.findById(decoded._id);
//       if (!user) {
//         return res.status(404).send({ error: "User not found" });
//       }
//       const blog = new Blog({
//         title,
//         content,
//         author: user.name,
//         author_id: user._id,
//         created_at: date,
//       });
//       await blog.save();
//       user.blogs.push(blog._id);
//       await user.save();
//       return res.status(200).send({
//         message: "Blog created successfully",
//       });
//     } catch (err) {
//       return res.status(401).send({ error: "Invalid token" });
//     }
//   }
// });

const createArticle = async (req, res) => {
  const { errors, isValid } = validateArticle(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  try {
    const article = await Article.create(req.body);
    res.status(201).json({ article });
  } catch (error) {
    res.status(404).json({ msg: "error hai" });
  }
};
const getAllArticle = async (req, res) => {
  try {
    const articles = await Article.find();
    res.status(201).json({ articles });
  } catch (err) {
    res.status(404).json({ msg: "error in displaying all articles" });
  }
};
const getById = async (req, res) => {
  try {
    const articlebyid = await Article.findById(req.params.id);
    res.status(201).json({ articlebyid });
  } catch (error) {
    res.status(404).json({ notfound: "can not find article by this id" });
  }
};
const deleteArticle = async (req, res) => {
  try {
    const deleteArticle = await Article.findById(req.params.id).deleteOne();

    res.status(201).json({ deleteArticle });
  } catch (error) {
    res.status(404).json({ error: "error in deleting" });
  }
};
const updateArticle = async (req, res) => {
  try {
    const updateArticle = await Article.updateOne(
      {
        _id: req.params.id,
      },
      {
        $set: {
          title: req.body.title,
          body: req.body.body,
          author: req.body.author,
        },
      }
    );

    res.status(201).json({ updateArticle: "Article Updated" });
  } catch (error) {
    res.status(404).json({ error: "error in updating" });
  }
};
export { createArticle, getAllArticle, getById, deleteArticle, updateArticle };
