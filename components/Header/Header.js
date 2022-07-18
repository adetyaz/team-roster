import { useState } from 'react'
import { useAppState } from 'context/appState'
import InputField from '@components/InputField/InputField'
import Button from '@components/Button/Button'

const Header = () => {
	const { teamName, setTeamName } = useAppState()
	const [name, setName] = useState('')
	const [showForm, setShowForm] = useState(false)

	const changeName = () => {
		setTeamName(name)
		setShowForm(false)
	}

	const showFormToggle = () => setShowForm(true)

	return (
		<>
			<header className='header'>
				<div>
					<h4 className='title'>Roster Details</h4>
					{showForm === false ? (
						<h3 className='team-name'>{teamName}</h3>
					) : (
						<>
							<InputField
								type='text'
								placeholder='Set Name'
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
							<Button type='submit' onClick={changeName}>
								Submit
							</Button>
						</>
					)}

					<img
						src='/images/svg/pen.svg'
						alt='edit'
						className='edit-name'
						onClick={showFormToggle}
					/>
				</div>
			</header>
		</>
	)
}

export default Header
