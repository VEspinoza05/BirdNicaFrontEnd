import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BirdsPage from './pages/BirdsPage'
import ReservesPage from './pages/ReservesPage'
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
          <Route path='reserves' element={<ReservesPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
