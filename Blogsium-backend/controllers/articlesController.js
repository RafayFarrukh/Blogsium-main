import Article from "../models/Article.js";

import ValidateArticle from "../validation/validation_article.js";
const createArticle = async (req, res) => {
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
const likeArticle = async (req, res) => {
  Article.findByIdAndUpdate(
    req.params.id,
    { $push: { likes: req.params.id } },
    { new: true }
  ).exec((err, result) => {
    if (err) {
      return res.status(422).json({ error: err });
    } else {
      res.json(result);
    }
  });
};
const unlikeArticle = async (req, res) => {
  Article.findByIdAndUpdate(
    req.params.id,
    { $pull: { likes: req.params.id } },
    { new: true }
  ).exec((err, result) => {
    if (err) {
      return res.status(422).json({ error: err });
    } else {
      res.json(result);
    }
  });
};
const commentArticle = async (req, res) => {
  const comment = {
    text: req.body.text,
    postedBy: req.params.id,
  };
  Article.findByIdAndUpdate(
    req.params.id,
    { $push: { comments: comment } },
    { new: true }
  )
    .populate("comments.postedBy", "_id name")
    .populate("postedBy", "_id name")
    .exec((err, result) => {
      if (err) {
        return res.status(422).json({ error: err });
      } else {
        res.json(result);
      }
    });
};
export {
  createArticle,
  getAllArticle,
  getById,
  deleteArticle,
  updateArticle,
  likeArticle,
  unlikeArticle,
  commentArticle,
};
