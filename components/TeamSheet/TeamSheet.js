import { useState } from 'react'
import Modal from '@components/Modal/Modal'

const TeamSheet = () => {
	const [empty, setEmpty] = useState(false)
	return (
		<div className='team-sheet'>
			<div className='keeper'>
				<div className='player' data-player-number='1'>
					&nbsp;
				</div>
				<p className='play'>keylor navas</p>
			</div>

			<div className='defense'>
				<div>
					<div className='player' data-player-number='1'>
						&nbsp;
					</div>
					<p>keylor navas</p>
				</div>
				<div>
					<div className='player' data-player-number='1'>
						&nbsp;
					</div>
					<p>keylor navas</p>
				</div>
				<div>
					<div className='player' data-player-number='1'>
						&nbsp;
					</div>
					<p>keylor navas</p>
				</div>
				<div>
					<div className='player' data-player-number='1'>
						&nbsp;
					</div>
					<p>keylor navas</p>
				</div>
			</div>

			<div className='midfield'>
				<div>
					<div className='player' data-player-number='1'>
						&nbsp;
					</div>
					<p>keylor navas</p>
				</div>
				<div>
					<div className='player' data-player-number='1'>
						&nbsp;
					</div>
					<p>keylor navas</p>
				</div>
				<div>
					<div className='player' data-player-number='1'>
						&nbsp;
					</div>
					<p>keylor navas</p>
				</div>
			</div>

			<div className='attack'>
				<div>
					<div className='player' data-player-number='1'>
						&nbsp;
					</div>
					<p>keylor navas</p>
				</div>
				<div>
					<div className='player' data-player-number='1'>
						&nbsp;
					</div>
					<p>keylor navas</p>
				</div>
				<div>
					<div className='player' data-player-number='1'>
						&nbsp;
					</div>
					<p>keylor navas</p>
				</div>
			</div>
			{empty && (
				<Modal>
					<div>
						<img
							src='/images/svg/triangle-exclamation.svg'
							alt='warning'
							className='warning'
						/>
						<h3 className='team-name'>not enough starters</h3>
						<p>
							Your team doesn’t have enough starters for one or more of the
							positions in the 4-3-3 formation
						</p>
					</div>
				</Modal>
			)}
		</div>
	)
}

export default TeamSheet
