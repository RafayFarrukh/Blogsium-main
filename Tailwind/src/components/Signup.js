import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";
import logo5 from "../img/logo5.jpeg";
import axios from "axios";

import Navbar from "./Navbar";

const Signup = () => {
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [resp, setResp] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/user/register", {
        username,
        email,
        password,
      })
      .then((resp) => setResp(resp))
      .catch((err) => setError(true));
  };
  setTimeout(() => resp && window.location.replace("/login"), 3000);
  return (
    <>
      <Navbar />

      {/* --------------- */}
      <div className="">
        <div className="mt-24 ">
          <div className="w-full md:w-96 md:max-w-full mx-auto shadow-lg">
            <div className="p-6  border-gray-300 sm:rounded-md">
              <h1 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800 mb-12 mr-20">
                <img
                  className="h-16 w-16 inline mx-6 rounded-xl"
                  src={logo5}
                  alt=""
                />
                Signup
              </h1>
              <form method="POST" action="" onSubmit={handleSubmit}>
                <label className="block mb-6">
                  <PersonIcon />
                  <span className="text-gray-700  ml-2 mt-10 font-bold">
                    User Name
                  </span>

                  <input
                    name="name"
                    type="text"
                    required
                    onChange={(e) => setusername(e.target.value)}
                    className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                    minlength="6"
                    placeholder="User name"
                  />
                </label>

                <label className="block mb-6">
                  <EmailIcon />
                  <span className="text-gray-700 ml-2 font-bold">
                    {" "}
                    Email address
                  </span>
                  <input
                    name="email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                    placeholder="Email"
                    required
                  />
                </label>
                <label className="block mb-6">
                  <LockIcon />
                  <span className="text-gray-700 ml-2 font-bold">Password</span>
                  <input
                    name="password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                    minlength="6"
                    placeholder="Password"
                    required
                  />
                </label>

                <div className="mb-6">
                  <button
                    type="submit"
                    className="
            h-10
            px-5
            text-indigo-100
            bg-yellow-400
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-yellow-300
            text-black
          "
                  >
                    Sign Up
                  </button>
                  {resp && (
                    <label style={{ color: "green" }}>
                      Registration Successful redirecting to Login page....
                    </label>
                  )}
                  {error && (
                    <label style={{ color: "red" }}>
                      Something went wrong ⚠️
                    </label>
                  )}
                </div>
                <div></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
