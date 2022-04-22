import express from "express";

const router = express.Router();

import {
  // createArticle,
  deleteArticle,
  updateArticle,
  getAllArticle,
  getById,
} from "../controllers/articlesController.js";

// router.route("/create", upload.single("image")).post(createArticle);
router.route("/all").get(getAllArticle);
router.route("/:id").get(getById);
router.route("/delete/:id").delete(deleteArticle);

router.route("/update/:id").put(updateArticle);
export default router;
