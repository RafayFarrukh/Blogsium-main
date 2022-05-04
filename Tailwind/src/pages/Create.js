import React from "react";
import axios from "axios";
import { useContext, useState } from "react";
import { Context } from "../context/Context";
import Navbar from "../components/Navbar";
const Create = () => {
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [body, setbody] = useState("");
  const [file, setFile] = useState(null);

  const handlePost = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title: title,
      body: body,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.image = fileName;
      await axios
        .post("http://localhost:5000/api/upload", data)
        .catch((err) => {
          console.log("error in upload");
        });
    }
    await axios
      .post("http://localhost:5000/api/articles/create", newPost)
      .then((resp) => window.location.replace("/post/" + resp.data.post._id))
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log("error in posting article");
      });
  };
  return (
    <div>
      <Navbar />
      {file && (
        <img
          className="uploadedImage h-96 w-96 mt-10 mr-10 float-right"
          src={URL.createObjectURL(file)}
          alt=""
        />
      )}
      <form onSubmit={handlePost}>
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
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
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
                  onChange={(e) => setFile(e.target.files[0])}
                  placeholder="file"
                  filename="articleImage"
                  // style={{ display: "none" }}
                  className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
                />
              </div>
              <div>
                <label for="body" className="block mb-2 text-lg font-serif">
                  body:
                </label>
                <textarea
                  id="body"
                  cols="30"
                  rows="10"
                  //   value={body}
                  onChange={(e) => setbody(e.target.value)}
                  placeholder="Write here.."
                  className="w-full font-serif  p-4 text-gray-600 bg-indigo-50 outline-none rounded-md"
                ></textarea>
              </div>

              <button className=" px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600">
                POST
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Create;
