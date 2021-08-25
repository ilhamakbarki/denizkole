const express = require('express')
const app = express()
const port = process.env.PORT;
// const startScraper = require("./index");

app.get('/', (req, res) => {
	// startScraper();
	res.send('Hello World!')
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})
