import React from "react";
// import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import logo5 from "../img/logo5.jpeg";
import Navbar from "./Navbar";
import { useState } from "react";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    setSubmitting(true);
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setSubmitting(false);
      return;
    }
    console.log({ name, password });
  };
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
                Login
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
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
                    minLength="6"
                    placeholder="User name"
                  />
                </label>

                <label className="block mb-6">
                  <LockIcon />
                  <span className="text-gray-700 ml-2 font-bold">Password</span>
                  <input
                    name="password"
                    type="password"
                    value={password}
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
                    minLength="6"
                    placeholder="Password"
                    required
                  />
                </label>

                <div className="mb-6">
                  <button
                    type="submit"
                    {...(submitting ? { disabled: true } : {})}
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
                    Login
                  </button>
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

export default Login;