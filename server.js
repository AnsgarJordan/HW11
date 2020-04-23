/* server.js code */
const MongoClient = require('mongodb').MongoClient;
var express = require('express');

const app = express();
app.use(express.static('public'));

const url = "mongodb+srv://ajorda02:lark@cluster0-pmy3l.mongodb.net/test?retryWrites=true&w=majority";

let db = null;
let collection = null;

async function main() {
	client = await MongoClient.connect(url);
	db = client.db('companies');
	collection = db.collection('companies');
	var port = process.env.PORT || 8080;
	await app.listen(port);
	/* make sure its loaded before line printed */
	console.log("listening at port 8080");
}
/* start server  */
main();

/*
app.get('/company/:query', function(req, res) {
   const query = req.params.query;
   search_for_company(query);
});
*/

async function search_for_ticker(req, res) {
	const ticker = req.params.query;

	console.log("ticker is " + ticker);
	console.log("searching for ticker");

	// var result = await collection.find({Ticker: ticker});
	var result = await collection.findOne({Ticker: ticker});

	console.log("got a result");
	if (result == null) {
		console.log("no match");
		res.send("no match");
	}
	else {
		console.log("match");
		/* console.log(result);
		console.log(result.Company);
		console.log(result.Ticker); */
		const response = { Company: result.Company, Ticker: result.ticker};
		res.json(response);
	}
}
 
async function search_for_company(req, res) {
	const company = req.params.query;

	console.log("comp is " + company);
	console.log("searching for ticker");

	// var result = await collection.find({Ticker: ticker});
	var result = await collection.findOne({Company: company});

	console.log("got a result");
	if (result == null) {
		console.log("no match");
		res.send("no match");
	}
	else {
		console.log("match");
		const response = { Ticker: result.Ticker};
		res.json(response);
	}
}
app.get('/company/:query', search_for_company);
app.get('/ticker/:query', search_for_ticker);
