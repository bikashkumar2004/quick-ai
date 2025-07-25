import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./pages/Layout"
import DashBoard from "./pages/DashBoard"
import WriteArticle from "./pages/WriteArticle"
import BlogTitle from "./pages/BlogTitle"
import GenerateImage from "./pages/GenerateImage"
import RemoveBackground from "./pages/RemoveBackground"
import RemoveObject from "./pages/RemoveObject"
import ReviewResume from "./pages/ReviewResume"
import Community from "./pages/Community"

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/ai" element={<Layout/>}>
          <Route index element={<DashBoard/>}/>
          <Route path="write-article" element={<WriteArticle/>}/>
          <Route path="blog-titles" element={<BlogTitle/>}/>
          <Route path="generate-images" element={<GenerateImage/>}/>
          <Route path="remove-background" element={<RemoveBackground/>}/>
          <Route path="remove-object" element={<RemoveObject/>}/>
          <Route path="review-resume" element={<ReviewResume/>}/>
          <Route path="community" element={<Community/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
