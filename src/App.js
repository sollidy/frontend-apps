import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from './pages'
import { DetailedPage } from './pages/detailed'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detailed" element={<DetailedPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
