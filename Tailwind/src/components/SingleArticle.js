import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../context/Context";
import Navbar from "./Navbar";
require("./singlePost.css");
const SingleArticle = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const { user } = useContext(Context);

  const [title, setTitle] = useState("");
  const [body, setbody] = useState("");
  const [updateMode, setupdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      //   const res = await axios.get("/posts/" + path);
      const res = await axios.get("http://localhost:5000/api/articles/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setbody(res.data.body);
      console.log(res.data);
      // console.log(res.data.title);
      // console.log(res.data.body);
    };
    window.scrollTo(0, 0);

    getPost();
  }, [path]);

  const deletePost = async () => {
    await axios
      .delete(`/posts/${path}`, {
        data: { name: user.name },
      })
      .then(() => window.location.replace("/"))
      .catch(() => console.log("error in deletePost"));
  };

  const updatePost = async () => {
    await axios
      .put(`/posts/${path}`, {
        name: user.name,
        title,
        body,
      })
      .then(() => setupdateMode(false))
      .catch(() => console.log("error in updatePost"));
  };

  const ImageLink = "http://localhost:5000/images/";
  return (
    <div>
      {post.image && (
        <img
          className="postImage"
          src={ImageLink + post.image + ".jpg"}
          alt="mmmmmmm"
        />
      )}
      <h1 className="postTitle">Title{title}</h1>
      <div className="PostInfo">
        <span>
          Author :
          <Link to={`/?user=${post.name}`} className="link">
            <b className="author">{post.name}</b>
          </Link>
        </span>
        <span className="Date">{new Date(post.created_at).toDateString()}</span>
      </div>
      {/* <Navbar /> */}
      <h1 className="postTitle">
        {title}
        {user?.name === post.name && (
          <div className="EditButtons">
            <i
              className="editIcon far fa-edit"
              onClick={() => setupdateMode(true)}
            />
            <i className="editIcon far fa-trash-alt" onClick={deletePost} />
          </div>
        )}
      </h1>
    </div>
  );
};

export default SingleArticle;
