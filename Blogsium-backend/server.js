import express from "express";
const app = express();
import dbConnect from "./db/db-connect.js";
import dotenv from "dotenv";
import multer from "multer";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();
app.use(cors());
import articles from "./routes/articles.js";

import notFoundRoute from "./middleware/notFound.js";
import auth from "./routes/auth.js";

app.use(express.json());
app.get("/", (req, res) => {
  res.send("welcome to backend of Blogsium");
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name + ".jpg"); //"file.jpeg for postMan testing as req.body and image togather cannot be sent"
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json({
    message: "file has been uploaded",
  });
});

app.use("/images", express.static(path.join(__dirname, "/images")));

app.use("/api/articles", articles);
app.use("/api/user", auth);
app.use(notFoundRoute);

const port = process.env.PORT || 5000;

const server = async () => {
  try {
    await dbConnect(
      "mongodb+srv://rafayfarrukh:rafay123@cluster0.kpr56.mongodb.net/Blogsium?retryWrites=true&w=majority"
    );
    app.listen(port, () => {
      console.log(`server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
server();
