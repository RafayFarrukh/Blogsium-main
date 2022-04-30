import React, { useState, useEffect, useContext } from "react";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";
const Blogs = () => {
  const { user, dispatch } = useContext(Context);

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/articles/all", {
      headers: {
        Authorization: "token" + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData(result.posts);
      });
  }, []);
  // if (loading) {
  //   return <p>Data is loading...</p>;
  // }
  const likePost = (id) => {
    fetch("http://localhost:5000/api/articles/like", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        const newData = data.map((item) => {
          if (item._id == result._id) {
            return result;
          } else {
            return item;
          }
        });
        setData(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const unlikePost = (id) => {
    fetch("http://localhost:5000/api/articles/unlike", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        const newData = data.map((item) => {
          if (item._id == result._id) {
            return result;
          } else {
            return item;
          }
        });
        setData(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const makeComment = (text, postId) => {
    fetch("http://localhost:5000/api/articles/comment", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        postId,
        text: text,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        const newData = data.map((item) => {
          if (item._id == result._id) {
            return result;
          } else {
            return item;
          }
        });
        setData(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deletePost = (postid) => {
    fetch(`http://localhost:5000/api/articles/delete/${postid}`, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        const newData = data.filter((item) => {
          return item._id !== result._id;
        });
        setData(newData);
      });
  };

  return (
    <>
      <Navbar />
      <div className="home">
        {(data || []).map((item) => {
          return (
            <div className="card home-card">
              <h5 style={{ padding: "5px" }}>
                <Link
                  to={
                    item.postedBy._id !== user._id
                      ? "/profile/" + item.postedBy._id
                      : "/profile"
                  }
                >
                  {item.postedBy.name}
                  {item.postedBy._id == user._id && (
                    <i
                      class="material-icons"
                      style={{ float: "right" }}
                      onClick={() => deletePost(item._id)}
                    >
                      delete
                    </i>
                  )}
                </Link>
              </h5>
              <div className="card-image">
                <img src={item.photo} />
              </div>
              <div className="card-content">
                <i className="material-icons" style={{ color: "red" }}>
                  favorite
                </i>
                {item.likes.includes(user._id) ? (
                  <i
                    className="material-icons"
                    onClick={() => {
                      unlikePost(item._id);
                    }}
                  >
                    thumb_down
                  </i>
                ) : (
                  <i
                    className="material-icons"
                    onClick={() => {
                      likePost(item._id);
                    }}
                  >
                    thumb_up
                  </i>
                )}

                <h6>{item.likes.length}</h6>
                <p>{item.body}</p>
                {item.comments.map((record) => {
                  return (
                    <h6 key={record._id}>
                      <span style={{ fontWeight: "500" }}>
                        {record.postedBy.name}
                      </span>
                      {record.text}
                    </h6>
                  );
                })}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    makeComment(e.target[0].value, item._id);
                  }}
                >
                  <input type="text" placeholder="add comment" />
                </form>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Blogs;
