import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import SubjectPage from './pages/SubjectPage'
import ChapterPage from './pages/ChapterPage'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subject/:subjectId" element={<SubjectPage />} />
        <Route path="/subject/:subjectId/chapter/:chapterId" element={<ChapterPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}
