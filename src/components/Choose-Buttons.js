import React, {useEffect} from 'react'

let autoPlayInterval;
export default function ChooseButtons(props) {
	const {choice1, setChoice1, choice2, setChoice2, mode, isAutoPlay} = props;
	useEffect(() => {
		if (isAutoPlay) {
			autoPlayInterval = setInterval(() => {
				setChoice1([getComChoice(), 'Com1']);
				setChoice2([getComChoice(), 'Com2']);
			}, 1000)
		} else {
			clearInterval(autoPlayInterval)
		}
	}, [isAutoPlay])
	function choose(choice) {
		if(mode==='pvsp') {
		if(!choice1.length && !choice2.length) setChoice1([choice, 'Player1'])
		else if (!choice2.length) setChoice2([choice, 'Player2'])
		} else if (mode === 'pvscom') {
			setChoice1([choice, 'You'])
			setChoice2([getComChoice(), 'Com'])
		}
	}
	function getComChoice() {
		const choices = ['rock', 'paper', 'scissors']
		return choices[Math.floor(Math.random()*3)]
	}
	return(
	<div className='choose-buttons'>
				<img src='/docs/icons/rock.png' className='choose-button' 
				onClick={() => choose('rock')}/>

				<img src='/docs/icons/paper.png' className='choose-button' 
				onClick={() => choose('paper')}/>

				<img src='/docs/icons/scissors.png' className='choose-button' 
				onClick={() => choose('scissors')}/>
		</div>
	)
}