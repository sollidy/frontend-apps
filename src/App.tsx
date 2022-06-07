import { Route, Routes } from 'react-router-dom'
import { Character } from './pages/Character'
import { CharactersList } from './pages/CharactersList'
import { Main } from './pages/Main'

function App() {
  return (
    <div className="container mx-auto px-4">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/characters" element={<CharactersList />} />
        <Route path="/:id" element={<Character />} />
      </Routes>
    </div>
  )
}

export default App
