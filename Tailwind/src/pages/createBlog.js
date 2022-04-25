import React from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useContext, useState } from "react";
import { Context } from "../context/Context";
import AddIcon from "@mui/icons-material/Add";
const CreateBlog = () => {
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const handlePost = async (e) => {
    e.preventDefault();
    const newPost = {
      name: user.name,
      title: title,
      description: description,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.photo = fileName;
      await axios.post("https://localhost:5000/upload", data).catch((err) => {
        console.log("error in upload");
      });
    }
    await axios
      .post("https://localhost:5000/api/articles/create", newPost)
      .then((resp) => window.location.replace("/post/" + resp.data.post._id))
      .catch((err) => {
        console.log("error in posting article");
      });
  };
  return (
    <div>
      <Navbar />
      {file && (
        <img className="uploadedImage" src={URL.createObjectURL(file)} alt="" />
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
                  placeholder="title"
                  id="title"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
                />
              </div>
              <div>
                <label for="title" className="text-lx font-serif">
                  Image:
                </label>
                {/* <AddIcon /> */}
                <input
                  type="file"
                  id="fileInput"
                  placeholder="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
                />
              </div>
              <div>
                <label
                  for="description"
                  className="block mb-2 text-lg font-serif"
                  onChange={(e) => setDescription(e.target.value)}
                >
                  Description:
                </label>
                <textarea
                  id="description"
                  cols="30"
                  rows="10"
                  placeholder="whrite here.."
                  className="w-full font-serif  p-4 text-gray-600 bg-indigo-50 outline-none rounded-md"
                ></textarea>
              </div>

              <button className=" px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600  ">
                POST
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateBlog;
