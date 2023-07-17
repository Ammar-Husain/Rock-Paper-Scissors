import React from 'react'

export default function Result({choice1, choice2, result, mode, restart, isAutoPlay}) {
	return(
		<div className="result-container">
			<div className='choices'>
				<div className='side-choice'>
					{choice1[1]} <img src={`./icons/${choice1[0]}.png`} className='result-icon'/>
				</div>
				<div className='side-choice'>
					<img src={`./icons/${choice2[0]}.png`} className='result-icon'/> {choice2[1]}
				</div>
				</div>
				<span className="the-result-text" 
				id={result[0]==='Com Win'?"losses":result==='Draw'?"draws":"wins"}>
					{result[0] ==='Com Win'? 'You lose':result[0]}</span>
				{(!isAutoPlay && mode!=='pvscom') && <button className="play-again" onClick={() => restart()}>Play Again</button>}
		</div>
	)
}