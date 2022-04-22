import express from "express";
const app = express();
import dbConnect from "./db/db-connect.js";
import dotenv from "dotenv";

dotenv.config();

import articles from "./routes/articles.js";

import notFoundRoute from "./middleware/notFound.js";
import auth from "./routes/auth.js";

app.use(express.json());
app.get("/", (req, res) => {
  res.send("welcome to backend of Blogsium");
});

app.use("/api/articles", articles);
app.use("/api/user", auth);
app.use(notFoundRoute);

const port = process.env.PORT || 5000;

const server = async () => {
  try {
    await dbConnect(
      "mongodb+srv://rafayfarrukh:rafay123@cluster0.kpr56.mongodb.net/Blogsium?retryWrites=true&w=majority"
    );
    // will create separate file for keys and port later
    app.listen(port, () => {
      console.log(`server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
server();
