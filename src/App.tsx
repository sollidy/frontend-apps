import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Character } from './pages/Character'
import { CharactersList } from './pages/CharactersList'
import { Main } from './pages/Main'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/characters" element={<CharactersList />} />
        <Route path="/:id" element={<Character />} />
      </Routes>
    </div>
  )
}

export default App
