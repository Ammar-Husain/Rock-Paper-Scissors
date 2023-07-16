import React from 'react'

export default function Score({pvspScore, pvscomScore, mode}) {
	return(
		<div className='the-results'>
			<span className="result" id="wins">
				{mode==='pvscom'?'Wins': 'Player1'} : 
				{mode==='pvsp'?` ${pvspScore.player1}`:` ${pvscomScore.wins}`}
			</span>
			<span className="result" id={mode==='pvscom'?'losses':'wins'}>
				{mode==='pvscom'?'Losses': 'Player2'} : 
				{mode==='pvsp'?` ${pvspScore.player2}`:` ${pvscomScore.losses}`}
			</span>
			<span className="result" id="draws">
				Draws : 
				{mode==='pvsp'? ` ${pvspScore.draws}`: ` ${pvscomScore.draws}`}
			</span>
		</div>	
	)
}