import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SudokuGame } from './components/board.jsx'
import { SideNav } from './components/components.jsx'
import HomePage from './home_page.jsx'
import ChooseGames from './choose_games.jsx'


function App() {
  return (
    <Router>
      <div>
        <SideNav />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/games" element={<ChooseGames />} />
          <Route path="games/easy" element={<SudokuGame size={6} />} />
          <Route path="games/normal" element={<SudokuGame/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;