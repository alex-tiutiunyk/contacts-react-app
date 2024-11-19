import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './pages/Layout'
import HomePage from './pages/HomePage'
import PostPage from './pages/PostPage'
import NotFound from './pages/NotFound'

function App() {

  return (
    <>
      <Routes>
        <Route path="/contacts-react-app" element={<Layout />}>
          <Route index element={<HomePage />}/>
          <Route path="/contacts-react-app/:id" element={<PostPage />}/>
          <Route path="*" element={<NotFound />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
