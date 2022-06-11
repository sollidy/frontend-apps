import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { About } from './pages/About'
import { Character } from './pages/Character'
import { Characters } from './pages/Characters'
import { Main } from './pages/Main'

function App() {
  return (
    <div className=" bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/characters/:id" element={<Character />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
