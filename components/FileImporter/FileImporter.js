import Button from '@components/Button/Button'
import { useState, useEffect } from 'react'
import CSVReader from 'react-csv-reader'

const ROOT_URL = 'http://localhost:3000'

const FileImporter = () => {
	const [csvData, setCsvData] = useState([])
	const [keeper, setKeeper] = useState(null)
	const [midfielders, setMidfielders] = useState(null)
	const [defender, setDefender] = useState(null)
	const [forward, setForward] = useState(null)
	const [errorMessage, setErrorMessage] = useState(false)

	const postData = async () => {
		const res = await fetch(`${ROOT_URL}/api/data`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(csvData),
		})
		const newData = await res.json()
	}

	const handleOnFileLoad = (data, fileInfo) => {
		data.map((item) => Object.values(item).includes('' || null)).includes(true)
			? setErrorMessage(true)
			: setCsvData(data)
	}

	useEffect(() => {
		const keeperPosition = csvData.filter(
			(data) => data.position === 'Goalkeeper'
		)
		const defenderPosition = csvData.filter(
			(data) => data.position === 'Defender'
		)
		const midfieldPosition = csvData.filter(
			(data) => data.position === 'Midfielder'
		)
		const forwardPosition = csvData.filter(
			(data) => data.position === 'Forward'
		)
		setKeeper(keeperPosition)
		setDefender(defenderPosition)
		setMidfielders(midfieldPosition)
		setForward(forwardPosition)
	}, [csvData])

	const papaparseOptions = {
		header: true,
		dynamicTyping: true,
		skipEmptyLines: true,
		transformHeader: (header) => header.toLowerCase().replace(/\W/g, '_'),
	}

	return (
		<div className='file-importer'>
			<CSVReader
				onFileLoaded={handleOnFileLoad}
				parserOptions={papaparseOptions}
			></CSVReader>
			<label for='react-csv-reader-input'>get file</label>

			<p className='error-message'>{errorMessage && 'Error Error Error'}</p>

			{csvData?.length > 0 && (
				<div className='file-summary'>
					{/* <h3>File summary</h3> */}

					<div>
						<h3>Total players</h3>
						<p>{csvData.length}</p>
					</div>
					<div>
						<h3>Keepers</h3>
						<p>{keeper.length}</p>
					</div>
					<div>
						<h3>Defenders</h3>
						<p>{defender.length}</p>
					</div>
					<div>
						<h3>Midfielders</h3>
						<p>{midfielders.length}</p>
					</div>
					<div>
						<h3>Forwards</h3>
						<p>{forward.length}</p>
					</div>
				</div>
			)}

			<div>
				<Button onClick={() => postData()}>Import</Button>
			</div>
		</div>
	)
}

export default FileImporter
