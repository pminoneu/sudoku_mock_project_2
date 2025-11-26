import React from 'react'
import Cell from './components/cell.jsx'

function App() {
  return (
    <div>
      <h1>My Sudoku Game</h1>
      <p>It works!</p>
      
      <div className="sudoku-board">
        <Cell />
      </div>
    </div>
  )
}

export default App