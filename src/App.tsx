import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BirdsPage from './pages/BirdsPage'
import ReservesPage from './pages/ReservesPage'
import MainLayout from './layouts/MainLayout'
import ReserveInfo from './pages/ReserveInfo'
import "leaflet/dist/leaflet.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={<MainLayout />}
        >
          <Route path='/' element={<HomePage/>} />
          <Route path='/birds' element={<BirdsPage/>} />
          <Route path='/reserves' element={<ReservesPage/>} />
          <Route path='/reserveinfo' element={<ReserveInfo/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
