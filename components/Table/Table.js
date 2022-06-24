import Button from '@components/Button/Button'
import { useState } from 'react'

const Table = () => {
	const [show, setShow] = useState(false)
	const player = {
		name: 'igor',
		number: 4,
		starter: 'yes',
		position: 'midfielder',
		height: '6.1ft',
		weight: '120kg',
		nationality: 'german',
		appearance: 30,
		minutes: '304mins',
	}

	return (
		<div className='table'>
			<div className='tr'>
				<div className='th'>player name</div>
				<div className='th'>jersey number</div>
				{show && <div className='th'>starter</div>}
				<div className='th'>position</div>
				<div className='th'>height</div>
				<div className='th'>weight</div>
				<div className='th'>nationality</div>
				{show && (
					<>
						<div className='th'>appearances</div>
						<div className='th'>minutes played</div>
						<div className='th'></div>)
					</>
				)}
			</div>
			{show === true ? (
				<div className='tr'>
					<div className='td'>
						<img src='' alt='country' className='player-country' />
						{player.name}
					</div>
					<div className='td'>{player.number}</div>
					<div className='td'>{player.starter}</div>
					<div className='td'>{player.position}</div>
					<div className='td'>{player.height}</div>
					<div className='td'>{player.weight}</div>
					<div className='td'>{player.nationality}</div>
					<div className='td'>{player.appearance}</div>
					<div className='td'>{player.minutes}</div>
					<div className='td'></div>
				</div>
			) : (
				<div className='empty-table'>
					<p>You do not have any players on dive roster</p>
					<Button variant='outline text'>Import Team</Button>
				</div>
			)}
		</div>
	)
}

export default Table
