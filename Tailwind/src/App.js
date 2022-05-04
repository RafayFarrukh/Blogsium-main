import LandingPage from "./components/LandingPage";
import Signup from "./components/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutus from "./components/Aboutus";
import Login from "./components/Login";
import Blogs from "./components/Blogs";
import { useContext } from "react";
// import CreateBlog from "./pages/createBlog";
import { Context } from "./context/Context";
import Create from "./pages/Create";
import Single from "./pages/Single";

function App() {
  const { user } = useContext(Context);

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Navbar />} /> */}
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="signup" element={<Signup />} />
        <Route
          exact
          path="login"
          element={user ? <LandingPage /> : <Login />}
        />
        <Route exact path="create" element={user ? <Create /> : <Login />} />
        <Route exact path="blogs" element={<Blogs />} />
        <Route exact path="aboutus" element={<Aboutus />} />
        <Route exact path="post/:postId" element={<Single />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
