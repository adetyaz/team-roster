import Header from '@components/Header/Header'
import Navigation from '@components/Navigation/Navigation'
import PlayerCard from '@components/PlayerCard/PlayerCard'
import TeamSheet from '@components/TeamSheet/TeamSheet'
import Head from 'next/head'

const Formation = () => {
	return (
		<>
			<Head>
				<title>Team Formation</title>
				<meta name='description' content='Set up your team' />
				<link rel='icon' href='/images/svg/logo.svg' />
			</Head>
			<Navigation />
			<div className='container'>
				<Header noForm />
				<section className='table-section formation'>
					<TeamSheet />
					<PlayerCard />
				</section>
			</div>
		</>
	)
}

export default Formation
