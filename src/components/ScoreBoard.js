import React from 'react'
import './ScoreBoard.css'
export const ScoreBoard = ({xScores, oScores, xPlaying}) => {
  return (
    <div className='scoreboard'>
        <span className={`score x-score ${!xPlaying && "inactive"}`}>X - {xScores}</span>
        <span className={`score o-score ${xPlaying && "inactive"}`}>O - {oScores}</span>

    </div>
  )
}
