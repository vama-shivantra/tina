import { Routes, Route } from "react-router-dom";
import Blog from "./components/pages/Blog";
import BlogDetail from "./components/pages/BlogDetail";

function App() {
  return (
    <Routes>
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogDetail />} />
    </Routes>
  )
}

export default App
