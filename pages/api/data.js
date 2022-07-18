import { teamData } from '@data/data'

export default function handler(req, res) {
	const httpMethod = req.method
	const { body } = req

	switch (httpMethod) {
		case 'GET':
			res.status(200).json(teamData)
			break

		case 'POST':
			if (teamData.length <= 0) {
				teamData.push({ ...body })
				return res.status(200).json(teamData)
			} else {
			}
			return res
				.status(400)
				.json({ message: `You can't perform this operation again` })

			break

		default:
			req.setHeader('Allow', ['GET', 'POST'])
			res.status(405).end(`Method ${httpMethod} Not Allowed`)
	}
}
