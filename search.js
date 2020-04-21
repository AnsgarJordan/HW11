const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = "mongodb+srv://ajorda02:lark@cluster0-pmy3l.mongodb.net/test?retryWrites=true&w=majority";

// Use connect method to connect to the Server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  client.close();
});

function search_for_ticker() {
	alert("in search");
/* set database to companies */
const db = client.db("companies");

/* cursor now contains all of the companies */
var cursor = db.collection('companies').find();


}

















/* 
function search_for_ticker(ticker) {

    MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
    if(err) { 
    	console.log("Connection err: " + err); 
    	return; 
    }
//  alert("searching for ticker");
    var dbo = db.db("companies");
	var coll = dbo.collection('companies');
	
	// testing code 
	// 
	
	console.log("before find");
	coll.find().toArray(function(err, items) {
          if (err) {
            console.log("Error: " + err);
			return;
          } 
		  else 
		  {
            console.log("Items: ");
        	var result = "";
        	alert("down here");
        	alert(items.length);
			for (i = 0; i < items.length; i++){
					var currTicker = items[i].Ticker.trim();
				if (currTicker == ticker){
					console.log("Company: " + items[i].Company.trim() + "\nTicker: " + items[i].Ticker.trim());
					result = "Company: " + items[i].Company.trim() + "\nTicker: " + items[i].Ticker.trim()
				}
			}
		    return result;				
          }     	  
        });  //end find
	});  //end connect
} */




