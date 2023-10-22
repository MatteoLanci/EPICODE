import React, { useContext } from "react";

//!---------->  COMPONENTS IMPORT
import NavBar from "./components/navbar/BlogNavbar";
import Footer from "./components/footer/Footer";
import Home from "./views/home/Home";
import NewBlogPost from "./views/newBlogPost/NewBlogPost";
import NotFound from "./views/notFound/NotFound";
import BlogPage from "./views/blogPage/BlogPage";
import AuthorPage from "./views/authorPage/AuthorPage";

//!----------> ROUTER-DOM IMPORT
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//!----------> CONTEXT IMPORT
import { ThemeContext } from "./context/themeContext";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <Router>
      <div className={theme === "light" ? "bg-light" : "bg-dark"}>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/newPost" element={<NewBlogPost />} />
          <Route path="/blogPage/:id" element={<BlogPage />} />
          <Route path="/authorPage/:id" element={<AuthorPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
