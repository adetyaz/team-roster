const PlayerCard = () => {
	return (
		<div className='player-card'>
			<h1 className='player-number' data-player-number='1'>
				1
			</h1>
			<img
				src='/images/png/player-image.png'
				alt='player image'
				className='player-image'
			/>
			<h2 className='player-name'>keylor navas</h2>
			<h3 className='player-position'>goalkeeper</h3>

			<div className='player-details'>
				<div className='player-info'>
					<span>height</span>
					<span>1.85 m</span>
				</div>
				<div className='player-info'>
					<span>width</span>
					<span>80 kg</span>
				</div>
				<div className='player-info'>
					<span>nationality</span>
					<div>
						<img
							src='/images/png/country.png'
							alt='country'
							className='player-country'
						/>
						<span>costa rica</span>
					</div>
				</div>
			</div>
			<hr />
			<div className='player-stats'>
				<div>
					<h3 className='player-position'>26</h3>
					<span>appearances</span>
				</div>
				<div>
					<h3 className='player-position'>2609</h3>
					<span>minutes played</span>
				</div>
				<div>
					<h3 className='player-position'>10</h3>
					<span>clean sheets</span>
				</div>
				<div>
					<h3 className='player-position'>76</h3>
					<span>saves</span>
				</div>
			</div>
		</div>
	)
}

export default PlayerCard
