import { useContext, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Context } from "../context/Context";
import { Link, useNavigate } from "react-router-dom";
import M from "materialize-css";

const CreateBlog = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (url) {
      fetch("http://localhost:5000/api/articles/create", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: "token" + localStorage.getItem("jwt"),
        },
        body: JSON.stringify({
          title,
          body,
          pic: url,
        }),
      })
        .then((data) => {
          console.log(data);
          if (data.error) {
            M.toast({ html: data.error });
          } else {
            M.toast({
              html: "Created Post Successfully",
              classes: "#388e3c green darken-2",
            });
            // useNavigate("/blogs");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [url]);

  const postDetails = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "insta-clone");
    data.append("cloud_name", "shrushti23");
    fetch("https://api.cloudinary.com/v1_1/shrushti23/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setUrl(data.url);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Navbar />

      {/* <form> */}
      <div className="bg-indigo-50 min-h-screen md:px-20 pt-6">
        <div className=" bg-white rounded-md px-6 py-10 max-w-2xl mx-auto">
          <h1 className="text-center text-2xl font-bold text-gray-500 mb-10">
            Create Article
          </h1>
          <div className="space-y-4">
            <div>
              <label for="title" className="text-lx font-serif">
                Title:
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="title"
                id="title"
                className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
              />
            </div>
            <div>
              <label for="title" className="text-lx font-serif">
                Image:
              </label>
              <input
                type="file"
                id="fileInput"
                onChange={(e) => {
                  setImage(e.target.files[0]);
                }}
                placeholder="file"
                filename="articleImage"
                // style={{ display: "none" }}
                className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
              />
            </div>
            <div>
              <label
                for="description"
                className="block mb-2 text-lg font-serif"
              >
                Description:
              </label>
              <textarea
                id="description"
                cols="30"
                rows="10"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="whrite here.."
                className="w-full font-serif  p-4 text-gray-600 bg-indigo-50 outline-none rounded-md"
              ></textarea>
            </div>

            <button
              className=" px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600"
              onClick={() => postDetails()}
            >
              POST
            </button>
          </div>
        </div>
      </div>
      {/* </form> */}
    </div>
  );
};

export default CreateBlog;
