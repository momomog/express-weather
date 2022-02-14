const express = require('express')
const rp = require("request-promise-native")
const cors = require('cors')
const app = express()
const port = 8080

app.use(cors())

app.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
	try {
		const weather = await rp({
			baseUrl: 'https://api.openweathermap.org/data/2.5',
			url: '/weather?q=Ulyanovsk&appid=5763846055e992c5f47c21ba66337e9&lang=ru&units=metric',
			json: true,
			method: 'GET',
		})
		res.status(200).json(weather)
	} catch (e) {
		res.status(400).json({ ...e })
	}

})

app.listen(port, () => {
	console.log(`Service started in ${port} port`)
})
