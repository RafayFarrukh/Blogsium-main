import Validator from "validator";
import isEmpty from "./is-empty.js";
export default function validateArticle(data) {
  let errors = {};
  data.title = !isEmpty(data.title) ? data.title : "";
  data.author = !isEmpty(data.author) ? data.author : "";
  data.body = !isEmpty(data.body) ? data.body : "";

  if (!Validator.isLength(data.title, { min: 2, max: 30 })) {
    errors.title = "Title must be between 2 and 30 characters";
  }

  if (Validator.isEmpty(data.title)) {
    errors.title = "Title field is required";
  }
  if (!Validator.isLength(data.author, { min: 2, max: 30 })) {
    errors.author = "Author must be between 2 and 30 characters";
  }
  if (Validator.isEmpty(data.author)) {
    errors.author = "Author field is required";
  }

  if (!Validator.isLength(data.body, { min: 2, max: 300 })) {
    errors.body = "Body must be between 2 and 300 characters";
  }

  if (Validator.isEmpty(data.body)) {
    errors.body = "Body field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}
