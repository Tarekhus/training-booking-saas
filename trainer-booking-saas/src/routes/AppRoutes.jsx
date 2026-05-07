import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import TrainerProfilePage from '../pages/TrainerProfilePage'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/trainers/:trainerId" element={<TrainerProfilePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
