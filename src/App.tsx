import { Route, Routes } from 'react-router-dom'
import { Character } from './pages/Character'
import { CharactersList } from './pages/CharactersList'

function App() {
  return (
    <div className="container mx-auto px-4">
      <Routes>
        <Route path="/" element={<CharactersList />} />
        <Route path="/:id" element={<Character />} />
      </Routes>
    </div>
  )
}

export default App
