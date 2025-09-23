import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BirdsPage from './pages/BirdsPage'
import MainLayout from './layouts/MainLayout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={<MainLayout />}
        >
          <Route path='/' element={<HomePage/>} />
          <Route path='/birds' element={<BirdsPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
