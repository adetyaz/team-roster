import { teamData } from '@data/data'

export default function handler(req, res) {
	const httpMethod = req.method
	const playerId = req.query.id
	const filtered = teamData.filter(
		(player) => player.jersey_number === playerId
	)

	const { ...data } = req.body

	switch (httpMethod) {
		case 'GET':
			filtered.length > 0
				? res.status(200).json(filtered[0])
				: res
						.status(400)
						.json({ message: `Player with the id of ${id} is not found` })

			break

		case 'PUT':
			res.status(200).json({ ...data })
			break

		case 'DELETE':
			res.status(200).json(filtered[0])
			break

		default:
			res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
			res.status(405).end(`Method ${httpMethod} Not Allowed`)
	}
}
