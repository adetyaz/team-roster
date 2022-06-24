import { useState } from 'react'

const Header = () => {
	const [teamName, setTeamName] = useState('My Team')

	return (
		<>
			<header className='header'>
				<div>
					<h4 className='title'>Roster Details</h4>
					<h3 className='team-name'>
						{teamName}
						<img src='/images/svg/pen.svg' alt='edit' className='edit-name' />
					</h3>
				</div>
			</header>
		</>
	)
}

export default Header
