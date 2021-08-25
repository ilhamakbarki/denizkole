const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const startScraper = require("./scraper");

app.get('/', (req, res) => {
	startScraper()
		.then((result) => {
			res.send('result: ' + result)
		});
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})
