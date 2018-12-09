const {MongoClient, ObjectID} = require('mongodb');





MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, (err, client) => {
	if(err){return console.log('Unable to connect to MongoDB server')}

	console.log("Connected to MongoDB server ")
	const db = client.db('TodoApp')
	const collection = db.collection('Todos')
	let name = 'juice tits'

	collection.find({}).toArray( (err, docs) => { // the .find method acts as a pointer, so for example if we add in the object of find method the parameter pornStar: 'Alyssa Malia',
	// the method points to all documents which have the value of "Alyssa Malia" for the pornstar property. The toArray method is called a cursor method for mongoDB.
	//A cursor method is how the data that was pointed to is executed. So for this example, the pointer points to all data in mongodb because if you look at the obj
	//parameter in the find method, it contains nothing, which means all documents will show. The cursor method will return all teh data found in the db as an array.
    	console.log("Found the following records as of");
    	console.log(docs)

	});

	

	collection.find({}).count().then((docs) =>{ //instead of a call back function you can use promises for mongodb driver.
		console.log(docs)
	}, (err) =>{
		console.log("No data in db")
	})

 
	client.close();
});


