import LandingPage from "./components/LandingPage";
import Signup from "./components/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutus from "./components/Aboutus";
import Login from "./components/Login";
import Blogs from "./components/Blogs";
import { useContext } from "react";

import { Context } from "./context/Context";

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
        <Route exact path="blogs" element={<Blogs />} />
        <Route exact path="aboutus" element={<Aboutus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
