import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Blogs from "./pages/Blogs"
import HomePage from "./pages/Home"
import { CreatePost } from "./pages/CreatePost"
import { BlogPage } from "./pages/BlogPage"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/createPost" element={<CreatePost></CreatePost>}></Route>
          <Route path="/blog/:id" element={<BlogPage></BlogPage>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
