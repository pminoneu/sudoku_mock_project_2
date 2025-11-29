import React, { useState, useEffect } from 'react'
import Cell from './components/cell.jsx'
import { generateBoard } from './components/board.jsx'
import CustomButton from './components/components.jsx'


function App() {
  const [board, setBoard] = useState([]);
  const [initialBoard, setInitialBoard] = useState([]);

  useEffect(() => {
    const newBoard = generateBoard(9);
    setBoard(newBoard);
    setInitialBoard(newBoard);
  }, []);

  // Keep board state in sync when a cell changes
  const handleValueChange = (rowIndex, colIndex, newValue) => {
    setBoard(prevBoard => {
      const updatedBoard = prevBoard.map(row => [...row]); // shallow copy rows
      updatedBoard[rowIndex][colIndex] = newValue;
      return updatedBoard;
    });
  };

  return (
    <div>
      <h1>My Sudoku Game</h1>
      
      <div className="sudoku-board" >
        {board.map((row, rowIndex) => (
          <div className="container" key={rowIndex}>
            {row.map((value, colIndex) => (
              <Cell
                key={colIndex}
                value={value}
                rowIndex={rowIndex}
                colIndex={colIndex}
                editable={initialBoard[rowIndex]?.[colIndex] === 0}
                onValueChange={handleValueChange}
              />
            ))}
          </div>
        ))}
      </div>
      {/* calls button component from components.jsx */}
      <div className="center-Container">
        
        <CustomButton 
          title="New Game"
          onPress={() => {
            const newBoard = generateBoard(9);
            setBoard(newBoard);
            setInitialBoard(newBoard);
          }}
        />
      </div>
    </div>
  )
}

export default App
