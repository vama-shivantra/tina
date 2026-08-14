import { Routes, Route, Navigate } from "react-router-dom";
import Blog from "./components/pages/Blog";
import BlogDetail from "./components/pages/BlogDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/blog" replace />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogDetail />} />
    </Routes>
  )
}

export default App
