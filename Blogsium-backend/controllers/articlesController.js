import validateArticle from "../validation/articles.js";
import Article from "../models/Article.js";
import Jwt from "jsonwebtoken";

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
