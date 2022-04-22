import React from "react";
import Landing1 from "../img/Landing1.jpg";
import Landing2 from "../img/Landing2.jpg";
import Landing3 from "../img/Landing3.jpg";
import logo5 from "../img/logo5.jpeg";
import Aboutus from "./Aboutus";
import Navbar from "./Navbar";
const LandingPage = () => {
  return (
    <>
      {/* navbar */}
      <Navbar />
      <div>
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="text-center py-10 sm:py-14">
            <h1 className="text-3xl md:text-5xl font-bold font-title text-sec">
              Latest Blog <br />
              <span className="text-pri">Posts</span>
            </h1>
            <p className="text-pri max-w-xs mx-auto py-6">
              Welcome to our blog site. Get our latest news with just one
              search!
            </p>
            <input
              type="search"
              name=""
              id=""
              className="bg-our-bg px-8 py-2 rounded-3xl shadow-inner ring-sec focus:outline-none focus:ring-1"
              placeholder="Search.."
            />
          </div>
          <section className="main">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 sm:gap-y-12 lg:gap-y-16 gap-x-8 lg:gap-x-12">
              <div className="col-span-1 md:col-span-2 lg:col-span-3">
                <a
                  href="#/"
                  className="border border-gray-100 block md:flex rounded-3xl overflow-hidden transition duration-300 hover:shadow-lg"
                >
                  <div className="md:w-1/2">
                    <img
                      src={Landing1}
                      alt=""
                      className="h-full w-full rounded-xl"
                    />
                  </div>
                  <div className="md:w-1/2 p-4 md:p-7">
                    <p className="px-3 py-1 bg-our-bg rounded text-sec text-xs inline">
                      FEATURED
                    </p>
                    <h2 className="font-bold text-pri text-xl md:text-2xl font-title py-3 transition duration-200 hover:text-sec">
                      Why is it important to follow a Brand Style Guide for your
                      business?
                    </h2>
                    <p className="text-gen pb-5">
                      A brand style guide is also known as a brand guide or
                      brand book. For many companies, the guide is essential to
                      maintain their brand identity. For them, such a
                      well-thought-of guide becomes their key document, which
                      serves as a guide to create a variety of content for brand
                      marketing.
                    </p>
                    <div className="flex items-center">
                      <img
                        src={logo5}
                        alt=""
                        className="w-9 h-9 rounded-full"
                      />
                      <div className="pl-3">
                        <h6 className="text-xs text-pri font-bold">Blogsium</h6>
                        <p className="text-xs text-gen">Brand Specialist</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="blog-card">
                <a href="#/">
                  <img src={Landing2} alt="" />
                  <div className="px-4 pb-6">
                    <h2 className="post-title">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </h2>
                    <p className="text-gen pb-5">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Ab molestias amet aspernatur? Dignissimos hic temporibus
                      doloribus iusto, unde provident vero!
                    </p>
                    <div className="flex items-center">
                      <img
                        src={logo5}
                        alt=""
                        className="w-9 h-9 rounded-full"
                      />
                      <div className="pl-3">
                        <h6 className="text-xs text-pri font-bold">John Doe</h6>
                        <p className="text-xs text-gen">Brand Specialist</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="blog-card">
                <a href="#/">
                  {/* src={logo5} */}
                  <div className="px-4 pb-6">
                    <h2 className="post-title">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </h2>
                    <p className="text-gen pb-5">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Ab molestias amet aspernatur? Dignissimos hic temporibus
                      doloribus iusto, unde provident vero!
                    </p>
                    <div className="flex items-center">
                      <img
                        src={logo5}
                        alt=""
                        className="w-9 h-9 rounded-full"
                      />
                      <div className="pl-3">
                        <h6 className="text-xs text-pri font-bold">John Doe</h6>
                        <p className="text-xs text-gen">Brand Specialist</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="blog-card">
                <a href="#/">
                  <img src={"img/img4.jpg"} alt="" />
                  <div className="px-4 pb-6">
                    <h2 className="post-title">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </h2>
                    <p className="text-gen pb-5">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Ab molestias amet aspernatur? Dignissimos hic temporibus
                      doloribus iusto, unde provident vero!
                    </p>
                    <div className="flex items-center">
                      <img
                        src={logo5}
                        alt=""
                        className="w-9 h-9 rounded-full"
                      />
                      <div className="pl-3">
                        <h6 className="text-xs text-pri font-bold">John Doe</h6>
                        <p className="text-xs text-gen">Brand Specialist</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="blog-card col-span-1 lg:col-span-2">
                <a href="#/">
                  <img
                    src={Landing3}
                    alt=""
                    className="lg:h-72 w-full rounded-xl"
                  />
                  <div className="px-4 pb-6">
                    <h2 className="post-title">
                      Rafay ipsum dolor sit amet, consectetur adipisicing elit.
                    </h2>
                    <p className="text-gen pb-5">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Ab molestias amet aspernatur? Dignissimos hic temporibus
                      doloribus iusto, unde provident vero!
                    </p>
                    <div className="flex items-center">
                      <img
                        src="img/author1.jpg"
                        alt=""
                        className="w-9 h-9 rounded-full"
                      />
                      <div className="pl-3">
                        <h6 className="text-xs text-pri font-bold">John Doe</h6>
                        <p className="text-xs text-gen">Brand Specialist</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="blog-card">
                <a href="#/">
                  <img src="img/img6.jpg" alt="" />
                  <div className="px-4 pb-6">
                    <h2 className="post-title">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </h2>
                    <p className="text-gen pb-5">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Ab molestias amet aspernatur? Dignissimos hic temporibus
                      doloribus iusto, unde provident vero!
                    </p>
                    <div className="flex items-center">
                      <img
                        src="img/author1.jpg"
                        alt=""
                        className="w-9 h-9 rounded-full"
                      />
                      <div className="pl-3">
                        <h6 className="text-xs text-pri font-bold">John Doe</h6>
                        <p className="text-xs text-gen">Brand Specialist</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </section>
          {/* About us */}
          <Aboutus />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
