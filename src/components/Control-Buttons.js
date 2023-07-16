import React from 'react'

export default function ControlButtons(props) {
	const {mode, setMode, setIsAutoPlay, setPvspScore, setPvscomScore, isAutoPlay, restart} = props
	
	function resetScore() {
		mode==='pvsp'? setPvspScore({player1: 0, player2: 0, draws: 0}):
		setPvscomScore({wins: 0, losses: 0, draws: 0})
	}
	function toggleAutoPlay() {
		setIsAutoPlay(prevValue => !prevValue)
		if (isAutoPlay)restart()
	}
	function toggleMode() {
		setMode(prevMode => prevMode==='pvsp'?'pvscom':'pvsp')
	}
	return(
		<div className='control-buttons-container'>
			<button className='resetScore' onClick={resetScore}>
				Reset
			</button>
			<button className="auto-play" onClick={toggleAutoPlay}>
				{!isAutoPlay? 'Auto play': 'Stop'}
			</button>
			<button className='mode' onClick={toggleMode}>Mode: {mode==='pvscom'?'COM':'PvsP'}</button>
		</div>
	)
}