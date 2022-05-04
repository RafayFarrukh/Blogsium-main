import Article from "../models/Article.js";

import ValidateArticle from "../validation/validation_article.js";
// const createArticle = async (req, res) => {
//   try {
//     const article = await Article.create(req.body);

//     res.status(201).json({ article });
//   } catch (error) {
//     res.status(404).json({ msg: "error hai" });
//   }
// };
const createArticle = async (req, res) => {
  const newPost = new Article(req.body);
  newPost.save((err, createdPost) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      post: createdPost,
    });
  });
};
// const getAllArticle = async (req, res) => {
//   try {
//     const articles = await Article.find();
//     res.status(201).json({ articles });
//   } catch (err) {
//     res.status(404).json({ msg: "error in displaying all articles" });
//   }
// };
const getAllArticle = async (req, res) => {
  const username = req.query.user;
  // const category = req.query.category;

  if (username) {
    Article.find({ username })
      .then((post, err) => {
        if (err) {
          return res.status(400).json({
            errorInFind: err,
          });
        }
        return res.status(200).json(post);
      })
      .catch((err) => {
        return res.status(400).json({
          error: "Post not found",
        });
      });
  }
  // else if (category) {
  //   Post.find({
  //     categories: {
  //       $in: [category],
  //     },
  //   })
  //     .then((post, err) => {
  //       if (err) {
  //         return res.status(400).json({
  //           errorInFind: err,
  //         });
  //       }
  //       return res.status(200).json(post);
  //     })
  //     .catch((err) => {
  //       return res.status(400).json(err);
  //     });
  // }
  else {
    Article.find()
      .then((post, err) => {
        if (err) {
          return res.status(400).json({
            errorInAllPost: err,
          });
        }
        return res.status(200).json(post);
      })
      .catch((err) => {
        return res.status(400).json(err);
      });
  }
};
// const getById = async (req, res) => {
//   try {
//     const articlebyid = await Article.findById(req.params.id);
//     res.status(201).json({ articlebyid });
//   } catch (error) {
//     res.status(404).json({ notfound: "can not find article by this id" });
//   }
// };
const getById = async (req, res) => {
  Article.findById(req.params.id)
    .then((foundPost, err) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      return res.status(200).json(foundPost);
    })
    .catch((err) => {
      return res.status(400).json({
        error: "Post not found",
      });
    });
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
