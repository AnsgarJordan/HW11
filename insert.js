const MongoClient = require('mongodb').MongoClient;
const fs = require('fs'), filename = process.argv[2];
const url = "mongodb+srv://ajorda02:lark@cluster0-pmy3l.mongodb.net/test?retryWrites=true&w=majority";

if (process.argv.length < 3) {
  console.log('Usage: node ' + process.argv[1] + ' FILENAME');
  process.exit(1);
}

//'./companies.csv'
fs.readFile(filename, function(err, data) {
	if(err) console.log(err);
	var array = data.toString().split(/,|\n/);
	for (let i = 2; i < array.length - 1; i = i + 2) {
		insert_data(array[i], array[i + 1]);
	}
});

async function insert_data(company, tick){

 await MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
  if(err) { 
  	console.log ("Error: " + err); 
  	return; 
  }
  
    var dbo = db.db("companies");
	var collection = dbo.collection('companies');
	var newData = {Company:company, Ticker:tick};
	collection.insertOne(newData, function(err, res) {
    if (err) { 
    	console.log ("Error: " + err); 
    	return;
    	 }
    	  console.log("new document inserted");
    	 db.close();
		});

	});

}