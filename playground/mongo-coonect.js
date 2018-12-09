//const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb');





MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, (err, client) => {
	if(err){return console.log('Unable to connect to MongoDB server')}

	console.log("Connected to MongoDB server ")
	const db = client.db('TodoApp')
	const collection = db.collection('Todos')
	let name = 'juice tits'

	collection.find({}).toArray( (err, docs) => {
    	console.log("Found the following records as of");
    	console.log(docs)

	});


	collection.findOneAndDelete({pornStar: "Big Nips Nicole"}, (err, result) =>{
		try{
			console.log(`${result.value.pornStar} was removed from the db`)
		}
		catch(err){
			console.log("No such pornStar exists in the database")
		}

	})


 
	client.close();
});


