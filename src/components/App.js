import React, {useState, useEffect} from 'react'
import Title from './title.js'
import ChooseButtons from './Choose-Buttons.js'
import Result from './Result.js'
import Score from './Score.js'
import ControlButtons from './Control-Buttons.js'

export default function App() {
	const [pvscomScore, setPvscomScore] = useState(
		JSON.parse(localStorage.getItem('pvscomScore'))||{wins: 0, losses: 0, draws: 0})
	const [pvspScore, setPvspScore] = useState(
		JSON.parse(localStorage.getItem('pvspScore'))||{player1: 0, player2: 0, draws: 0})
		
	const [result, setResult] = useState([])
	const [mode, setMode] = useState('pvscom')
	const [choice1, setChoice1] = useState([])
	const [choice2, setChoice2] = useState([])
	const [isAutoPlay, setIsAutoPlay] = useState(false)
	useEffect(() => {
		if(choice1.length && choice2.length) {
				setResult(
					choice2[0] === 'rock' && choice1[0] === 'paper' ||
					choice2[0] === 'paper' && choice1[0] === 'scissors' ||
					choice2[0] === 'scissors' && choice1[0] === 'rock'? [`${choice1[1]} Win`] 
					:choice1[0] === 'rock' && choice2[0] === 'paper' ||
					choice1[0] === 'paper' && choice2[0] === 'scissors' ||
					choice1[0] === 'scissors' && choice2[0] === 'rock' ? [`${choice2[1]} Win`] : ['Draw']
				)
		}
	}, [choice1, choice2])
	useEffect(() => {
		if (!isAutoPlay && result.length && mode === 'pvsp') {
			setPvspScore(prevScore => {
				if (result[0] === 'Player1 Win') return { ...prevScore, player1: prevScore.player1 + 1 }
				else if (result[0] === 'Player2 Win') return { ...prevScore, player2: prevScore.player2 + 1 }
				else return { ...prevScore, draws: prevScore.draws + 1 }
			})
			localStorage.setItem('pvspScore', JSON.stringify(pvspScore))
		} else if (!isAutoPlay && result.length && mode === 'pvscom') {
			setPvscomScore(prevScore => {
				if (result[0] === 'You Win') return { ...prevScore, wins: prevScore.wins + 1 }
				else if (result[0] === 'Com Win') return { ...prevScore, losses: prevScore.losses + 1 }
				else return { ...prevScore, draws: prevScore.draws + 1 }
			})
			localStorage.setItem('pvscomScore', JSON.stringify(pvscomScore))
		}
	}, [result])
	function restart() {
		setChoice1([]);
		setChoice2([]);
		setResult([])
	}
	return (
		<div className="the-game">
			<Title />
			<ChooseButtons 
			choice1={choice1} choice2={choice2} 
			setChoice1={setChoice1} setChoice2={setChoice2}
			mode={mode} isAutoPlay={isAutoPlay} />
			{ Boolean(result.length) && 
				<Result 
				choice1={choice1} choice2={choice2} result = {result} 
				mode={mode} restart={restart} isAutoPlay={isAutoPlay}/>
			}
			<Score pvspScore={pvspScore} pvscomScore={pvscomScore} mode={mode}/>
			<ControlButtons 
				isAutoPlay={isAutoPlay} setIsAutoPlay={setIsAutoPlay}
				mode={mode} setMode={setMode} restart={restart}
				setPvscomScore={setPvscomScore} setPvspScore={setPvspScore}/>
		</div>
	)
}