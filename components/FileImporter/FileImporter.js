import Button from '@components/Button/Button'
import InputField from '@components/InputField/InputField'
import { useState } from 'react'
import CSVReader from 'react-papaparse'

const FileImporter = () => {
	const [csvFile, setCsvFile] = useState('')
	const [csvData, setCsvData] = useState([])

	// const processCsv = (str, delim = ',') => {
	// 	const headers = str.slice(0, str.indexOf('\n')).split(delim)
	// 	const rows = str.slice(str.indexOf('\n') + 1).split('\n')

	// 	const newArray = rows.map((row) => {
	// 		const values = row.split(delim)
	// 		const eachObject = headers.reduce((obj, header, i) => {
	// 			obj[header] = values[i]
	// 			return obj
	// 		}, {})
	// 		return eachObject
	// 	})
	// 	console.log(newArray)
	// 	setCsvData(newArray)
	// }

	// const submitFile = (e) => {
	// 	if (csvFile) {
	// 		const file = csvFile
	// 		const reader = new FileReader()

	// 		reader.onload = (e) => {
	// 			const data = e.target.result
	// 			processCsv(data)
	// 		}

	// 		reader.readAsText(file)
	// 	}
	// }

	return (
		<>
			<CSVReader
				onUploadAccepted={(results) => {
					console.log('---------------------------')
					console.log(results)
					console.log('---------------------------')
				}}
			>
				{({
					getRootProps,
					acceptedFile,

					getRemoveFileProps,
				}) => (
					<>
						<div style={styles.csvReader}>
							<button
								type='button'
								{...getRootProps()}
								style={styles.browseFile}
							>
								Browse file
							</button>
							<div style={styles.acceptedFile}>
								{acceptedFile && acceptedFile.name}
							</div>
							<button {...getRemoveFileProps()} style={styles.remove}>
								Remove
							</button>
						</div>
					</>
				)}
			</CSVReader>
			{/* <div className='file-importer'>
				<InputField
					type='file'
					accept='.csv'
					onChange={(e) => setCsvFile(e.target.files[0])}
				/>
				<Button variant='outline' type='file' onClick={submitFile}>
					Select file
				</Button>
			</div> */}
			{/* <div>
				{csvData.map((data) => (
					<div key={data.Playername}>{data.Position}</div>
				))}
			</div> */}
		</>
	)
}

export default FileImporter
