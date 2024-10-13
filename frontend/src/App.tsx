import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Blogs from "./pages/Blogs"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
