import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import './App.css';
import CreateNewBlog from "./components/CreateNewBlog";
import BlogDetails from "./components/BlogDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/create" element={<CreateNewBlog />} />
          <Route path="/blogs/:id" element={ <BlogDetails /> } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
