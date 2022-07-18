import { useRef } from 'react'
import Head from 'next/head'
import Header from '@components/Header/Header'
import Navigation from '@components/Navigation/Navigation'
import Table from '@components/Table/Table'
import '@fontsource/poppins'
import Modal from '@components/Modal/Modal'
import FileImporter from '@components/FileImporter/FileImporter'
import Button from '@components/Button/Button'
import InputField from '@components/InputField/InputField'
import { useAppState } from 'context/appState'

export default function Home() {
	const modalRef = useRef()
	const { filteredNames, searchValue, setSearchValue } = useAppState()

	const openModal = () => {
		modalRef.current.openModal()
		console.log('hey')
	}

	return (
		<>
			<Head>
				<title>Team Roster</title>
				<meta name='description' content='Set up your team' />
				<link rel='icon' href='/images/svg/logo.svg' />
			</Head>
			<Navigation />
			<div className='container'>
				<section className='header-section'>
					<Header showModal={true} />

					<div>
						<InputField
							type='text'
							placeholder='Search player'
							value={searchValue}
							onChange={(e) => setSearchValue(e.target.value)}
						/>
						<Button onClick={openModal}>Import Team</Button>
					</div>
				</section>
				{filteredNames.map((name) => (
					<div style={{ color: 'white' }}>{name}</div>
				))}
				<section className='table-section'>
					<Table />
				</section>
			</div>

			<Modal title={'Importer'} ref={modalRef}>
				<h3 className='modal-title'>Roster File</h3>
				<FileImporter />
			</Modal>
		</>
	)
}

//https://freckle-ink-be8.notion.site/React-Developer-Code-Challenge-278786931afd4253afd60ec069a932d3

//TODO: styling fileinput
//TODO:create edit dialog
//TODO: style searchbar active states
