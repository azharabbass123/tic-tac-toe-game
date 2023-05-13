import React, {useState} from 'react';
import './App.css';
import Board from './components/Board';
import { ScoreBoard } from './components/ScoreBoard';
import { ResetButton } from './components/ResetButton';


function App() {
  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3 ,6],
    [1, 4, 7],
    [2 ,5 ,8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [oScores, setOScores] = useState(0);
  const [xScores, setXScores] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const handleBoxClick = (boxId) =>{
    const updatedBorad = board.map((value, idx) =>{
      if(idx === boxId){
        return xPlaying === true ? "X" : "O";
      }
      else{
        return value;
      }
    })
    const winner = checkWinner(updatedBorad);

    if(winner){
      if(winner === "O"){
        setOScores((x) => x + 1)
      }
    else{
        setXScores((x) => x + 1)
    }
  }

    setBoard(updatedBorad);

    setXPlaying(!xPlaying);
  }
  const checkWinner = (board) =>{
    for(let i = 0; i < WIN_CONDITIONS.length; i++){
      const [x, y, z] = WIN_CONDITIONS[i];

      if(board[x] && board[y] === board[x] && board[y] === board[z]){
        setGameOver(true);
        return board[x];
      }
    }
  }
  const resetBoard = () =>{
    setGameOver(false);
    setBoard(Array(9).fill(null))
  }
  return (
    <>
    <ScoreBoard xScores={xScores} oScores={oScores} xPlaying={xPlaying} />
    <Board board={board} onClick={gameOver ?  resetBoard : handleBoxClick}></Board>
    <ResetButton resetBoard={resetBoard}></ResetButton>
   
    </>
  );
}

export default App;
